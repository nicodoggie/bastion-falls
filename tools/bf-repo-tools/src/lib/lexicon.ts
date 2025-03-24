import {
  LexicalEntry,
  Sense,
  DerivedForm,
  OntolexLemon,
} from '../types/lexicon.js';

export function getLexicalCategory(writtenForm: string, types: string[]) {
  const lexicalCategory = types.find(type => type.startsWith('lexinfo:'));

  switch (lexicalCategory) {
    case 'lexinfo:CommonNoun':
    case 'lexinfo:Noun':
      return 'noun';
    case 'lexinfo:Verb':
      return 'verb';
    case 'lexinfo:Adjective':
      return 'adjective';
    case 'lexinfo:Adverb':
      return 'adverb';
    case 'lexinfo:Interrogative':
      return 'interrogative';
    case 'lexinfo:Preposition':
      return 'preposition';
    case 'lexinfo:Conjunction':
      return 'conjunction';
    case 'lexinfo:SubordinatingConjunction':
      return 'subordinating conjunction';
    case 'lexinfo:Suffix':
      return 'suffix';
    case 'lexinfo:Prefix':
      return 'prefix';
    case 'lexinfo:Interjection':
      return 'interjection';
    case undefined:
      console.warn('No lexical category for', writtenForm);
      return 'unknown';
    default:
      // if no lexinfo category is in the @type array, it will go to the
      // undefined case, so the default case implies that lexinfo was defined
      // but no special handling was done for it.
      return lexicalCategory.replace('lexinfo:', '').toLowerCase();
  }
}

interface ParseLexiconOpts {
  silence?: boolean;
}

export function parseLexicon(jsonData: OntolexLemon, opts?: ParseLexiconOpts) {
  const { silence } = {
    silence: false,
    ...opts,
  };

  const lexicon = new Map<string, LexicalEntry>();

  const id = jsonData['@id'];
  const title = jsonData['dc:title'];

  for (const entry of jsonData['@graph']) {
    const senses: Sense[] = [];
    if (entry.sense) {
      for (const ontoSense of entry.sense) {
        const semanticField = Array.isArray(ontoSense['lexinfo:semanticField'])
          ? ontoSense['lexinfo:semanticField']
          : [ontoSense['lexinfo:semanticField']];
        senses.push({
          definition: ontoSense.definition['@value'],
          semanticField: semanticField.map(field => {
            if (field.trim() == '') {
              return 'Unknown';
            }
            return field;
          }),
          usage: ontoSense.usage ?? '',
        });
      }
    } else {
      if (!silence) {
        console.warn('No sense property for', entry['@id']);
      }
      senses.push({
        definition: '',
        semanticField: ['Unknown'],
        usage: '',
      });
    }

    const derivedForms: DerivedForm[] = [];
    if (entry.derivedForms) {
      for (const ontoDerivedForm of entry.derivedForms) {
        derivedForms.push({
          writtenForm: ontoDerivedForm.writtenRep,
          phoneticForm: ontoDerivedForm.phoneticRep,
          decomposition: ontoDerivedForm.decomposition,
          grammaticalMeaning: ontoDerivedForm.grammaticalMeaning,
        });
      }
    }

    const lexicalEntry = {
      id: entry['@id'],
      types: !Array.isArray(entry['@type']) ? [entry['@type']] : entry['@type'],
      writtenForm: entry.canonicalForm?.writtenRep,
      phoneticForm: entry.canonicalForm?.phoneticRep,
      lexicalCategory: entry.lexicalCategory,
      protoform: entry?.etymology?.['etymon:protoform'] ?? undefined,
      note: entry?.etymology?.['etymon:note'] ?? undefined,
      senses,
      derivedForms,
      graphEntry: entry,
    };
    lexicon.set(entry['@id'], lexicalEntry);
  }
  if (!silence) {
    console.log(`Parsed ${lexicon.size} lexical entries`);
  }
  return { id, title, lexicon };
}

export function jsonAlphabetical(
  id: string,
  title: string,
  lexicon: Map<string, LexicalEntry>,
) {
  const sortedLexicon = JSON.stringify(
    {
      id,
      title,
      lexicon: Object.fromEntries(
        [...lexicon.entries()].sort((a, b) =>
          a[1].writtenForm.localeCompare(b[1].writtenForm),
        ),
      ),
    },
    null,
    2,
  );
  return sortedLexicon;
}

export function jsonByField(
  id: string,
  title: string,
  lexicon: Map<string, LexicalEntry>,
) {
  const fields = new Map<string, LexicalEntry[]>();
  for (const [id, entry] of lexicon.entries()) {
    for (const sense of entry.senses) {
      for (const field of sense.semanticField) {
        fields.set(field, [...(fields.get(field) ?? []), entry]);
      }
    }
  }

  const sortedLexicon = JSON.stringify(
    {
      id,
      title,
      fields: Object.fromEntries(
        [...fields.entries()].sort().map(([key]) => {
          const fieldData = {
            uri: key.replaceAll(' ', '-').toLowerCase(),
            label: key,
          };
          return [key, fieldData];
        }),
      ),
      lexicon: Object.fromEntries([...fields.entries()].sort()),
    },
    null,
    2,
  );
  return sortedLexicon;
}

export function csvAlphabetical(
  title: string,
  lexicon: Map<string, LexicalEntry>,
) {
  const sortedLexicon = [...lexicon.entries()].sort((a, b) =>
    a[1].writtenForm.localeCompare(b[1].writtenForm),
  );
  const csv = [
    ...sortedLexicon.map(([_, entry]) => [
      `"${entry.writtenForm} /${entry.phoneticForm}/"`,
      `"(${getLexicalCategory(entry.writtenForm, entry.types)})\n\n${entry.senses.map(sense => sense.definition).join(';')}"`,
    ]),
  ];
  return csv.join('\n');
}

export function termOutAlphabetical(
  title: string,
  lexicon: Map<string, LexicalEntry>,
) {
  console.log(title);
  const sortedLexicon = new Map(
    [...lexicon.entries()].sort((a, b) =>
      a[1].writtenForm.localeCompare(b[1].writtenForm),
    ),
  );
  for (const [id, entry] of sortedLexicon.entries()) {
    const {
      writtenForm,
      phoneticForm,
      types,
      senses,
      derivedForms,
      protoform,
    } = entry;
    const cat = getLexicalCategory(writtenForm, types);
    console.log(`${writtenForm} /${phoneticForm}/ ${id}`);
    console.log(`  : ${cat}`);
    if (protoform) {
      console.log(`  : ${protoform}`);
    }
    for (const sense of senses) {
      console.log(
        `  : ${sense.definition} (${sense.semanticField.join(', ')})`,
      );
    }

    for (const derivedForm of derivedForms) {
      console.log(`${derivedForm.writtenForm} /${derivedForm.phoneticForm}/`);
      console.log(`  : ${derivedForm.decomposition}`);
      console.log(`  : ${derivedForm.grammaticalMeaning}`);
    }

    console.log();
  }
  console.log('done');
}

export function termOutByField(
  title: string,
  lexicon: Map<string, LexicalEntry>,
) {
  console.log(title);
  const fields = new Map<string, LexicalEntry[]>();
  for (const [id, entry] of lexicon.entries()) {
    for (const sense of entry.senses) {
      for (const field of sense.semanticField) {
        fields.set(field, [...(fields.get(field) ?? []), entry]);
      }
    }
  }

  for (const [field, entries] of fields.entries()) {
    console.log(`${field}:`);
    for (const entry of entries) {
      const {
        writtenForm,
        phoneticForm,
        types,
        senses,
        derivedForms,
        protoform,
      } = entry;
      const cat = getLexicalCategory(writtenForm, types);
      console.log(`${writtenForm} /${phoneticForm}/`);
      console.log(`  : ${cat}`);
      if (protoform) {
        console.log(`  : ${protoform}`);
      }
      for (const sense of senses) {
        console.log(
          `  : ${sense.definition} (${sense.semanticField.join(', ')})`,
        );
      }

      for (const derivedForm of derivedForms) {
        console.log(`${derivedForm.writtenForm} /${derivedForm.phoneticForm}/`);
        console.log(`  : ${derivedForm.decomposition}`);
        console.log(`  : ${derivedForm.grammaticalMeaning}`);
      }

      console.log();
    }
  }
  console.log('done');
}
