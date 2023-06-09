import { Command } from "commander";
import * as frontmatter from "../lib/frontmatter.js";
import matter from "gray-matter";
import slugify from "../lib/slugify.js";
import { writeFileSync } from "fs";
import path from "path";
import GenericEntity, { Entity, Frontmatter } from "../entities/generic-entity.js";

const entityMap = {
  org: "organizations",
  loc: "locations",
  fam: 'families',
  cha: 'characters',
  evt: 'events',
} as { [key: string]: string }

const newFile = new Command('new');
newFile
  .argument('<type>')
  .argument('<title>')
  .option('-o, --out-dir <outDir>', "target output directory", "content")
  .action(async (type: string, title: string, options: any) => {
    let slug = slugify(title);
    let module = `../entities/${type}.js`;

    if (type in entityMap) {
      module = `../entities/${entityMap[type]}.js`;
    }

    let entity;
    try {
      const importedEntity = (await import(module)).default;
      entity = new importedEntity(title);
    } catch (e) {
      entity = new GenericEntity<Frontmatter>(title, type);
    }

    const content = matter.stringify("", entity, frontmatter.options);
    const target = path.resolve(process.cwd(), options.outDir, entity.dir, slug + ".md")

    writeFileSync(target, content);
  });

export default newFile;