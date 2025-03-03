#!/usr/bin/env node

const nodemon = require("nodemon");
const { execSync } = require("child_process");
const { writeFileSync } = require("fs");

// Empty Script so we don't actually run anything.
nodemon({
  script: 'empty.js',
  ext: 'yaml',
  watch: ['site/content/**/family.yaml'],
})
  .on('start', () => {
    console.log('Starting');
  })
  .on('restart', files => {
    for (const file of files) {
      console.log(`Processing ${file}.`);
      const output = execSync(`pnpm kingraph ${file} -F svg`);
      writeFileSync(file.replace(/\.ya?ml/, '.svg'), output.toString('utf-8'), {
        encoding: 'utf-8',
      });
      console.log(`Done.`);
    }
  });
