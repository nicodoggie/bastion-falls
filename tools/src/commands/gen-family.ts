import { Command } from "commander";
import { readdir, writeFile, readFile } from "fs/promises";
import * as lodash from "lodash-es";
import * as frontmatter from "../lib/frontmatter.js";
import Bluebird from "bluebird";
import matter from "gray-matter";
import { existsSync } from "fs";
import { resolve } from "path";
import * as YAML from "js-yaml";
import { FamilyTree, searchChildren, searchParents, searchSiblings, searchSpouse } from "../types/family-tree.js";
import slugify from "../lib/slugify.js";
import * as char from "../entities/characters.js";
import { tmpdir } from "os";

const generateFamily = new Command('gen-family');

generateFamily
  .argument('<family>')
  .option('-o, --content-dir <contentDir>', 'family content dir', 'content')
  .action(async (family: string, options: Record<string, string>) => {
    const { contentDir } = options;
    const filename = resolve(contentDir, 'families', family, 'family.yaml');
    if (existsSync(filename)) {
      const readContents = await readFile(filename);
      const tree = YAML.load(readContents.toString()) as FamilyTree;
      const { people } = tree;
      const entries = Object.entries(people);
      await Bluebird.map(entries, async ([key, person]) => {
        const { fullname, born, died, class: className } = person;
        if (fullname) {
          const memberFilename = resolve(contentDir, 'characters', slugify(fullname) + '.md');
          if (!(await existsSync(memberFilename))) {
            let { dir, data } = char.create(fullname);
            if (born) {
              data.extra.cha.date_of_birth = `date#${born}`;
            }
            if (died) {
              data.extra.cha.date_of_birth = `date#${died}`;
            }
            if (className?.includes('dead')) {
              data.extra.mortality_status = 'Dead';
            } else {
              data.extra.mortality_status = 'Alive';
            }

            const spouse = searchSpouse(tree, key);
            if (spouse) {
              console.log('Found spouse', people[spouse]?.fullname, 'for', fullname);
              data.extra.cha.married_to = people[spouse]?.fullname ?? '';
            }

            const parents = searchParents(tree, key);
            if (parents) {
              const parentNames = parents
                .map(i => people[i].fullname)
                .filter(i => typeof i !== 'undefined') as string[];
              console.log('Found parents', parentNames, 'for', fullname);
              data.taxonomies.parents = parentNames ?? [];
            }

            const siblings = searchSiblings(tree, key);
            if (siblings) {
              const siblingNames = siblings
                .map(i => people[i].fullname)
                .filter(i => typeof i !== 'undefined') as string[];
              console.log('Found siblings', siblingNames, 'for', fullname);
              data.taxonomies.siblings = siblingNames ?? [];
            }

            const children = searchChildren(tree, key);
            if (children) {
              const childrenNames = children
                .map(i => people[i].fullname)
                .filter(i => typeof i !== 'undefined') as string[];
              console.log('Found children', childrenNames, 'for', fullname);
              data.taxonomies.children = childrenNames ?? [];
            }

            const newContent = matter.stringify(
              "",
              data,
              frontmatter.options
            );
            console.log(`Generating ${fullname} into ${memberFilename}...`);
            await writeFile(memberFilename, newContent);
          }
        }
      });
    }
  });
export default generateFamily;
