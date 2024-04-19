import { Command } from "commander";
import * as frontmatter from "../lib/frontmatter.js";
import matter from "gray-matter";
import slugify from "../lib/slugify.js";
import { existsSync, writeFileSync } from "fs";
import path, { resolve } from "path";
import GenericEntity, { Entity, Frontmatter } from "../entities/generic-entity.js";

const entityMap = {
  blog: "blogs",
  org: "organizations",
  loc: "locations",
  fam: 'families',
  cha: 'characters',
  evt: 'events',
} as { [key: string]: string }

const newFile = new Command('new');
newFile
  .argument('<type>')
  .argument('<title...>')
  .option('-o, --out-dir <outDir>', "Change target output directory to <outDir>.", undefined)
  .option('--overwrite', "Overwrite existing file if it exists.", false)
  .option('--dry-run', "Don't actually execute the command.", false)
  .action(async (type: string, title: string[], options: any) => {
    let { outDir, dryRun, overwrite } = options;
    const fullTitle = title.join(' ')
    const slug = slugify(fullTitle);

    let finalType = type;
    if (type in entityMap) {
      finalType = entityMap[type];
    }

    const module = `../entities/${finalType}.js`;

    let entity;
    try {
      const importedEntity = (await import(module)).default;
      entity = new importedEntity(fullTitle);
    } catch (e) {
      entity = new GenericEntity<Frontmatter>(fullTitle, finalType);
    }

    if (!outDir) {
      outDir = `content/${entity.dir}`;
    }

    const content = matter.stringify("", entity, frontmatter.options);
    const target = path.resolve(process.cwd(), outDir, slug + ".md")
    const fileExists = existsSync(target)
    if (!dryRun && (overwrite || !fileExists)) {
      writeFileSync(target, content);
    } else if (dryRun) {
      console.log('--dry-run was passed. Simulating write to', target)
    } else if (fileExists) {
      console.error(`File ${target} exists. Skipping..`);
    }

  });

export default newFile;