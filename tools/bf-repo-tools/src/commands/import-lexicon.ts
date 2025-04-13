import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";

import { parseLexicon, jsonAlphabetical, jsonByField, csvAlphabetical, termOutAlphabetical, termOutByField } from "../lib/lexicon.js";
import { LexicalEntry } from "../types/lexicon.js";

const importLexicon = new Command('import-lexicon');

importLexicon
  .argument('<output>', 'Output directory')
  .argument('<inputs...>', 'Input OntoLex-Lemon JSON-LD file')
  .option('--dry-run', "Don't actually write the file", false)
  .action(async (output: string, inputs: string[], options: any) => {
    const { dryRun } = options;

    try {
      // for now, we assume that the input files are all alphabetical JSON-LD
      // lexicon files for the same language. So aside from the alphabetical
      // iisting, we can merge the lexicons for by field sorting.
      let name;
      let id;
      let title;
      let mergedLexicon: Map<string, LexicalEntry> = new Map();

      for (const input of inputs) {
        console.log(`Processing ${input}...`);
        const fileContent = await fs.readFileSync(input, { encoding: 'utf-8' });
        const jsonData = JSON.parse(fileContent);

        const parsed = parseLexicon(jsonData);

        id = parsed.id;
        title = parsed.title;
        const lexicon = parsed.lexicon;

        mergedLexicon = new Map<string, LexicalEntry>([
          ...mergedLexicon,
          ...lexicon
        ]);

        console.log(`${id} - ${title}`);
        if (dryRun) {
          termOutAlphabetical(title, lexicon);
          termOutByField(title, lexicon);
        } else {
          const jsonAlpha = jsonAlphabetical(id, title, lexicon);
          name = id.replace("lexicon:", "").toLocaleLowerCase();
          fs.writeFileSync(path.join(output, `lexicon-${name}-alphabetical.json`), jsonAlpha);
        }
      }

      const csv = csvAlphabetical(title ?? "", mergedLexicon);
      fs.writeFileSync(path.join(output, `lexicon-${name?.replace(/_.+$/, "")}-alphabetical.csv`), csv);

      const jsonField = jsonByField(id ?? "", title ?? "", mergedLexicon);
      fs.writeFileSync(path.join(output, `lexicon-${name?.replace(/_.+$/, "")}-by-field.json`), jsonField);

    } catch (error) {
      console.error('Error importing lexicon:', error);
      process.exit(1);
    }
  });

export default importLexicon;
