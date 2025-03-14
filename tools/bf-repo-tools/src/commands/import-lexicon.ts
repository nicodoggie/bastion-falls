import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";

interface OntolexLemon {
  "@context": {
    "@vocab": string;
    "ontolex": string;
    "lexinfo": string;
  };
  "@id": string;
  "@type": string;
  "dc:title": string;
  "dc:language": {
    "@id": string;
  };
  "@graph": GraphEntry[];
}

interface GraphEntry {
  "@id": string;
  "@type": string;
  "lexicalCategory": string;
  "canonicalForm": {
    "@type": string;
    "writtenRep": string;
    "phoneticRep": string;
  };
  "etymology": {
    "@type": string;
    "etymon:protoform": string;
    "etymon:soundChange": string;
    "etymon:note": string;
  };
  "sense": OntolexSense[];
  "derivedForms": OntolexDerivedForm[];
}

interface OntolexSense {
  "@type": string;
  "definition": {
    "@value": string;
    "@language": string;
  };
  "usage"?: string;
  "lexinfo:semanticField": string | string[];
}

interface OntolexDerivedForm {
  "@type": string;
  "writtenRep": string;
  "phoneticRep": string;
  "decomposition": string;
  "grammaticalMeaning": string;
}
interface Sense {
  definition: string;
  semanticField: string[];
  usage: string;
}

interface DerivedForm {
  writtenForm: string;
  phoneticForm: string;
  decomposition: string;
  grammaticalMeaning: string;
}
interface LexicalEntry {
  id: string;
  writtenForm: string;
  phoneticForm: string;
  protoform?: string;
  lexicalCategory: string;
  note?: string;
  senses: Sense[];
  derivedForms: DerivedForm[];
  graphEntry: GraphEntry;
}



const importLexicon = new Command('import-lexicon');

importLexicon
  .argument('<input>', 'Input OntoLex-Lemon JSON-LD file')
  .argument('<output>', 'Output directory')
  .option('--dry-run', "Don't actually write the file", false)
  .action(async (input: string, output: string, options: any) => {
    const { dryRun } = options;

    try {
      const fileContent = await fs.readFileSync(input, { encoding: 'utf-8' });
      const jsonData = JSON.parse(fileContent);

      const { id, title, lexicon } = parseLexicon(jsonData);

      if (dryRun) {
        termOutAlphabetical(title, lexicon);
        termOutByField(title, lexicon);
      } else {
        const jsonAlpha = jsonAlphabetical(id, title, lexicon);
        const name = id.replace("lexicon:", "").toLocaleLowerCase();
        fs.writeFileSync(path.join(output, `${name}-alphabetical.json`), jsonAlpha);
        const jsonField = jsonByField(id, title, lexicon);
        fs.writeFileSync(path.join(output, `${name}-by-field.json`), jsonField);
      }


    } catch (error) {
      console.error('Error importing lexicon:', error);
      process.exit(1);
    }
  });

function getLexicalCategory(lexicalCategory: string) {
  switch (lexicalCategory) {
    case "lexinfo:Noun":
      return "noun";
    case "lexinfo:Verb":
      return "verb";
    case "lexinfo:Adjective":
      return "adjective";
    case "lexinfo:Adverb":
      return "adverb";
    case "lexinfo:Interrogative":
      return "interrogative";
    case "lexinfo:Preposition":
      return "preposition";
    case "lexinfo:Conjunction":
      return "conjunction";

  }
}

function parseLexicon(jsonData: OntolexLemon) {
  const lexicon = new Map<string, LexicalEntry>();

  const id = jsonData["@id"];
  const title = jsonData["dc:title"];

  for (const entry of jsonData["@graph"]) {
    const senses: Sense[] = [];
    if (entry.sense) {
      for (const ontoSense of entry.sense) {
        const semanticField = Array.isArray(ontoSense["lexinfo:semanticField"])
          ? ontoSense["lexinfo:semanticField"]
          : [ontoSense["lexinfo:semanticField"]];
        senses.push({
          definition: ontoSense.definition["@value"],
          semanticField: semanticField.map(field => {
            if (field.trim() == "") {
              return "Unknown";
            }
            return field;
          }),
          usage: ontoSense.usage ?? "",
        });
      }
    } else {
      console.warn("No sense property for", entry["@id"]);
      senses.push({
        definition: "",
        semanticField: ["Unknown"],
        usage: "",
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
      id: entry["@id"],
      writtenForm: entry.canonicalForm?.writtenRep,
      phoneticForm: entry.canonicalForm?.phoneticRep,
      lexicalCategory: entry.lexicalCategory,
      protoform: entry?.etymology?.["etymon:protoform"] ?? undefined,
      note: entry?.etymology?.["etymon:note"] ?? undefined, 
      senses,
      derivedForms,
      graphEntry: entry,
    };
    lexicon.set(entry["@id"], lexicalEntry);
  }
  console.log(`Parsed ${lexicon.size} lexical entries`);
  return { id, title, lexicon };
}

function jsonAlphabetical(id: string, title: string, lexicon: Map<string, LexicalEntry>) {
  const sortedLexicon = JSON.stringify({
    id, title, lexicon: Object.fromEntries([...lexicon.entries()]
      .sort((a, b) => a[1].writtenForm.localeCompare(b[1].writtenForm)))
  }, null, 2);
  return sortedLexicon;
}

function jsonByField(id: string, title: string, lexicon: Map<string, LexicalEntry>) {
  const fields = new Map<string, LexicalEntry[]>();
  for (const [id, entry] of lexicon.entries()) {
    for (const sense of entry.senses) {
      for (const field of sense.semanticField) {
        fields.set(field, [...(fields.get(field) ?? []), entry]);
      }
    }
  }

  const sortedLexicon = JSON.stringify({
    id,
    title,
    fields: Object.fromEntries([...fields.entries()].sort().map(
      ([key]) => {
        const fieldData = {
          uri: key.replaceAll(" ", "-").toLowerCase(),
          label: key,
        };
        return [key, fieldData];
      }
    )),
    lexicon: Object.fromEntries([...fields.entries()].sort())
  }, null, 2);
  return sortedLexicon;
}

function termOutAlphabetical(title: string, lexicon: Map<string, LexicalEntry>) {
  console.log(title);
  const sortedLexicon = new Map([...lexicon.entries()].sort((a, b) => a[1].writtenForm.localeCompare(b[1].writtenForm)));
  for (const [id, entry] of sortedLexicon.entries()) {
    const { writtenForm, phoneticForm, lexicalCategory, senses, derivedForms, protoform } = entry;
    const cat = getLexicalCategory(lexicalCategory);
    console.log(`${writtenForm} /${phoneticForm}/ ${id}`);
    console.log(`  : ${cat}`);
    if (protoform) {
      console.log(`  : ${protoform}`);
    }
    for (const sense of senses) {
      console.log(`  : ${sense.definition} (${sense.semanticField.join(', ')})`);
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

function termOutByField(title: string, lexicon: Map<string, LexicalEntry>) {
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
      const { writtenForm, phoneticForm, lexicalCategory, senses, derivedForms, protoform } = entry;
      const cat = getLexicalCategory(lexicalCategory);
      console.log(`${writtenForm} /${phoneticForm}/`);
      console.log(`  : ${cat}`);
      if (protoform) {
        console.log(`  : ${protoform}`);
      }
      for (const sense of senses) {
        console.log(`  : ${sense.definition} (${sense.semanticField.join(', ')})`);
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

export default importLexicon;
