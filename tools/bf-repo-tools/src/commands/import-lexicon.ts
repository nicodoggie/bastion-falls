import { Command } from "commander";
import * as fs from "fs/promises";
import * as path from "path";
import matter from "gray-matter";
import * as frontmatter from "../lib/frontmatter.js";
import { JsonLdParser } from "jsonld-streaming-parser";
import { Quad } from "n3";
import { PartialObject } from "lodash";

// OntoLex-Lemon namespaces
const ONTOLEX = 'http://www.w3.org/ns/lemon/ontolex#';
const LEXINFO = 'http://www.lexinfo.net/ontology/3.0/lexinfo#';
const DCT = 'http://purl.org/dc/terms/';

interface LexicalEntry {
  id: string;
  lemma: string;
  category: string;
  pronunciation: string;
  definition: string;
  sense: string;
  etymology: string;
  semanticField: string;
  crossRefs?: string[];
  examples?: string[];
}

interface LexiconData {
  entries: Map<string, Partial<LexicalEntry>>;
}

const importLexicon = new Command('import-lexicon');

importLexicon
  .argument('<input>', 'Input OntoLex-Lemon JSON-LD file')
  .argument('<output>', 'Output markdown file')
  .option('--dry-run', "Don't actually write the file", false)
  .action(async (input: string, output: string, options: any) => {
    const { dryRun } = options;

    try {
      const fileContent = await fs.readFile(input, { encoding: 'utf-8' });
      const parser = <Iterable<Quad> & JsonLdParser>new JsonLdParser();

      // Initialize lexicon data with a Map to track entries by ID
      const lexicon: LexiconData = {
        entries: new Map()
      };

      const unsortedPredicates = new Set<string>();

      parser.write(fileContent);

      const predicateSorter = (entry: Partial<LexicalEntry>, predicate: string, object: string) => {
        switch (predicate) {
          case ONTOLEX + 'canonicalForm':
            // Handle canonical form - usually points to another node
            break;

          case ONTOLEX + 'writtenRep':
            entry.lemma = object;
            break;

          case LEXINFO + 'pronunciation':
            entry.pronunciation = object;
            break;

          case DCT + 'description':
          case ONTOLEX + 'definition':
            entry.definition = object;
            break;
          case ONTOLEX + 'sense':
            entry.sense = object;
            break;

          case ONTOLEX + 'etymology':
          case LEXINFO + 'etymology':
            entry.etymology = object;
            break;

          case LEXINFO + 'semanticField':
            entry.semanticField = object;
            break;

          case ONTOLEX + 'reference':
            entry.crossRefs = entry.crossRefs || [];
            entry.crossRefs.push(object);
            break;

          case LEXINFO + 'example':
            entry.examples = entry.examples || [];
            entry.examples.push(object);
            break;

          case ONTOLEX + 'lexicalCategory':
            entry.category = object;
            break;
          default:
            console.log('Unhandled predicate:', predicate, object);
        }
        return entry;
      };

      for await (const quad of parser) {
        const subject = quad.subject.value;
        const predicate = quad.predicate.value;
        const object = quad.object.value;

        // Check if this is a lexical entry
        if (object === ONTOLEX + 'LexicalEntry') {
          if (!lexicon.entries.has(subject)) {
            lexicon.entries.set(subject, { id: subject });
          }
          continue;
        }

        // Get the current entry if it exists
        const entry = lexicon.entries.get(subject);
        if (entry) {
          predicateSorter(entry, predicate, object);
        }
      }

      // Convert entries map to array and group by semantic field
      const entriesByField = new Map<string, LexicalEntry[]>();

      for (const entry of lexicon.entries.values()) {
        const field = entry.semanticField || 'Uncategorized';
        if (!entriesByField.has(field)) {
          entriesByField.set(field, []);
        }
        entriesByField.get(field)?.push(entry as LexicalEntry);
      }

      // Generate markdown content
      let content = '';

      for (const [field, entries] of entriesByField) {
        content += `## ${field}\n\n`;

        for (const entry of entries) {
          content += `- ${entry.lemma} [${entry.pronunciation}] "${entry.definition}"`;

          if (entry.etymology) {
            content += ` < ${entry.etymology}`;
          }

          if (entry.crossRefs?.length) {
            content += ` See: ${entry.crossRefs.join(', ')}`;
          }

          if (entry.examples?.length) {
            content += `\n  Examples:\n`;
            for (const example of entry.examples) {
              content += `  - ${example}\n`;
            }
          }

          content += '\n';
        }

        content += '\n';
      }

      // Add frontmatter
      const frontMatterData = {
        title: "Lexicon",
        description: "Imported lexicon data",
        weight: 1,
        taxonomies: {
          tags: ["lexicon", "vocabulary"]
        }
      };

      const finalContent = matter.stringify(content, frontMatterData,
        frontmatter.options);

      if (!dryRun) {
        const outputDir = path.dirname(output);
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(output, finalContent);
        console.log(`Successfully imported lexicon to ${output}`);
      } else {
        console.log('--dry-run was passed. Would write to:', output);
        console.log('Content preview:\n', finalContent.slice(0, 200) + '...');
      }

    } catch (error) {
      console.error('Error importing lexicon:', error);
      process.exit(1);
    }
    console.log('done');
  });

export default importLexicon;