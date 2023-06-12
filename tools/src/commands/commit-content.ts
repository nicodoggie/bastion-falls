import { spawnSync } from "child_process";
import { Command } from "commander";
import { groupBy, keyBy } from "lodash-es";
import { temporaryFile, temporaryFileTask } from "tempy";
import * as frontmatter from "../lib/frontmatter.js";
import { readFileSync, writeFileSync } from "fs";

const commitContent = new Command('commit-content');

commitContent
  .action(async () => {
    const url = new URL("https://bastion-falls.thekennel.info");
    const { stdout } = spawnSync('git', ['diff', '--name-status', '-r', 'HEAD']);
    const changes = stdout.toString().split("\n").map(change => {
      const match = change.match(/^(\w)\s+(content\/.+\.md)$/);
      if (match?.length === 3) {
        const [, typeItem, path] = match;

        let type;
        switch (typeItem.toLowerCase()) {
          case 'm':
            type = 'modified';
            break;
          case 'a':
            type = 'added';
            break;
        }
        return {
          type,
          path
        };
      }
    })

    const oldContent = readFileSync('.git/COMMIT_EDITMSG').toString();

    const filtered = groupBy(changes.filter((i): boolean => i !== undefined), 'type')
    let fileContent = ''
    for (const [key, values] of Object.entries(filtered).sort()) {
      fileContent += `# ${key}\n`;
      for (const value of values) {
        const { path } = value ?? {};
        if (path) {
          const pathname = path.replace('content', '').replace(/((_?index)?\.md$)/, '');
          console.log(pathname)
          url.pathname = pathname;
          const { data } = await frontmatter.read(path);

          fileContent += ` - [${data.title}](${url.toString()})\n`
        }
      }
    }

    fileContent += `\n${oldContent}`
    writeFileSync('.git/COMMIT_EDITMSG', fileContent);
  });

export default commitContent;