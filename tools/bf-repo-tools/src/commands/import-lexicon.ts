import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";

import { parseLexicon, jsonAlphabetical, jsonByField, csvAlphabetical, termOutAlphabetical, termOutByField } from "../lib/lexicon.js";

const importLexicon = new Command('import-lexicon');

importLexicon
  .argument('<output>', 'Output directory')
  .argument('<inputs...>', 'Input OntoLex-Lemon JSON-LD file')
  .option('--dry-run', "Don't actually write the file", false)
  .action(async (output: string, inputs: string[], options: any) => {
    const { dryRun } = options;

    try {
      for (const input of inputs) {
        console.log(`Processing ${input}...`);
        const fileContent = await fs.readFileSync(input, { encoding: 'utf-8' });
        const jsonData = JSON.parse(fileContent);
        console.log(jsonData);
        const { id, title, lexicon } = parseLexicon(jsonData);
        console.log(`${id} - ${title}`);
        if (dryRun) {
          termOutAlphabetical(title, lexicon);
          termOutByField(title, lexicon);
        } else {
          const jsonAlpha = jsonAlphabetical(id, title, lexicon);
          const name = id.replace("lexicon:", "").toLocaleLowerCase();
          fs.writeFileSync(path.join(output, `lexicon-${name}-alphabetical.json`), jsonAlpha);
          const jsonField = jsonByField(id, title, lexicon);
          fs.writeFileSync(path.join(output, `lexicon-${name}-by-field.json`), jsonField);
          const csv = csvAlphabetical(title, lexicon);
          fs.writeFileSync(path.join(output, `lexicon-${name}-alphabetical.csv`), csv);
        }
      }
    } catch (error) {
      console.error('Error importing lexicon:', error);
      process.exit(1);
    }
  });

export default importLexicon;
