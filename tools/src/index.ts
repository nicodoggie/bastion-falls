#!/usr/bin/env ts-node-script
import { Command } from "commander";
import migrate from "./commands/migrate.js";
import transformFrontmatter from "./commands/transform-frontmatter.js";
import newFile from "./commands/new.js";
import generateFamily from "./commands/gen-family.js";
import commitContent from "./commands/commit-content.js";

const app = new Command('repo-tools');


export async function main() {
  app.addCommand(migrate);
  app.addCommand(transformFrontmatter);
  app.addCommand(newFile);
  app.addCommand(generateFamily);
  app.addCommand(commitContent)

  await app.parseAsync();
}

main().then(() => {
  process.exit(0);
}).catch((e) => {
  console.error(e);
  process.exit(e.code)
});
