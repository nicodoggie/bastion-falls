import { Command } from "commander";
import { writeFile, readFile, rm, stat } from "fs/promises";
import * as frontmatter from "../lib/frontmatter.js";
import Bluebird from "bluebird";
import matter from "gray-matter";
import { existsSync, readFileSync, statSync, writeFileSync } from "fs";
import { resolve } from "path";
import * as YAML from "js-yaml";
import { FamilyTree, searchChildren, searchParents, searchSiblings, searchSpouse } from "../types/family-tree.js";
import slugify from "../lib/slugify.js";
import * as char from "../entities/characters.js";
import { spawnSync } from "child_process";
import { temporaryFileTask } from "tempy";
import { sha256 } from "js-sha256";

const generateFamily = new Command('gen-family');

generateFamily
  .argument('<family>')
  .option('-o, --content-dir <contentDir>', 'Directory containing family yaml', 'content')
  .option('-d, --diff-tool <diffTool>', 'Use specified diff-tool', undefined)
  .option('--dry-run [dryRun]', 'Do not actually execute')
  .action(async (family: string, options: Record<string, string>) => {
    const { contentDir, diffTool, dryRun } = options;
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

          let { dir, data } = char.create(fullname);
          data.extra.kingraph_key = key;
          if (born) {
            data.extra.cha.date_of_birth = `date#${born}`;
          }
          if (died) {
            data.extra.cha.date_of_death = `date#${died}`;
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

          if (!(await existsSync(memberFilename))) {
            console.log(`Generating ${fullname} into ${memberFilename}...`);
            const newContent = matter.stringify(
              "",
              data,
              frontmatter.options
            );
            if (!dryRun) {
              await writeFile(memberFilename, newContent);
            }
          } else {
            const currentFileContents = readFileSync(memberFilename);
            const { content } = await frontmatter.read(memberFilename);
            const newContent = matter.stringify(
              content,
              data,
              frontmatter.options
            );

            if (sha256(newContent) != sha256(currentFileContents)) {
              temporaryFileTask(tempFile => {
                console.log(`${memberFilename} exists. Generating ${fullname} into ${tempFile} and melding...`);

                writeFileSync(tempFile, newContent);

                let differ = diffTool;
                if (!differ) {
                  if (existsSync('/usr/bin/meld')) {
                    differ = '/usr/bin/meld';
                  } else {
                    differ = '/usr/bin/diff';
                  }
                }

                if (!dryRun) {
                  const spawned = spawnSync(differ, ["-u", tempFile, memberFilename]);
                  console.log(spawned.stdout.toString());
                }
              }, { extension: 'md' });
            } else {
              console.log(`${memberFilename} matches new content. Skipping ${fullname}...`);
            }
          }
        }
      });
    }
  });
export default generateFamily;
