import { Command } from "commander";
import * as fs from "fs";
import { parseLexicon, getLexicalCategory } from "../lib/lexicon.js";

const randomWord = new Command('random-word');

randomWord
  .argument('<input>', 'Input OntoLex-Lemon JSON-LD file')
  .action(async (input: string) => {
    const jsonData = JSON.parse(fs.readFileSync(input, { encoding: 'utf-8' }));
    const parsedLexicon = parseLexicon(jsonData, { silence: true });

    const randomNumber = Math.floor(Math.random() * parsedLexicon.lexicon.size)
    const randomEntry = [...parsedLexicon.lexicon.entries()][randomNumber][1];
    console.log(`${randomEntry.writtenForm} /${randomEntry.phoneticForm}/\n`);
    console.log(getLexicalCategory(randomEntry.writtenForm, randomEntry.types));
    randomEntry.senses.forEach((sense) => {
      console.log(sense.definition);
    });
    console.log(` -- ${parsedLexicon.title} \n`);
  });

export default randomWord;
