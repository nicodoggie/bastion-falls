import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";

import { parseLexicon, jsonAlphabetical, jsonByField, csvAlphabetical, termOutAlphabetical, termOutByField } from "../lib/lexicon.js";

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
        fs.writeFileSync(path.join(output, `lexicon-${name}-alphabetical.json`), jsonAlpha);
        const jsonField = jsonByField(id, title, lexicon);
        fs.writeFileSync(path.join(output, `lexicon-${name}-by-field.json`), jsonField);
        const csv = csvAlphabetical(title, lexicon);
        fs.writeFileSync(path.join(output, `lexicon-${name}-alphabetical.csv`), csv);
      }
    } catch (error) {
      console.error('Error importing lexicon:', error);
      process.exit(1);
    }
  });

export default importLexicon;
