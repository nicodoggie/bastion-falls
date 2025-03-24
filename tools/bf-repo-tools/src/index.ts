#!/usr/bin/env ts-node-script
import { Command } from "commander";
import migrate from "./commands/migrate.js";
import transformFrontmatter from "./commands/transform-frontmatter.js";
import newFile from "./commands/new.js";
import generateFamily from "./commands/gen-family.js";
import commitContent from "./commands/commit-content.js";
import importLexicon from "./commands/import-lexicon.js";
import randomWord from "./commands/random-word.js";
const app = new Command('repo-tools');

export async function main() {
  app.addCommand(commitContent);
  app.addCommand(generateFamily);
  app.addCommand(importLexicon);
  app.addCommand(migrate);
  app.addCommand(newFile);
  app.addCommand(transformFrontmatter);
  app.addCommand(randomWord);
  await app.parseAsync();
}

main().then(() => {
  process.exit(0);
}).catch((e) => {
  console.error(e);
  process.exit(e.code)
});
