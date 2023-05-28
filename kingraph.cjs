#!/usr/bin/env node

const nodemon = require("nodemon");
const { spawnSync } = require("child_process");

nodemon({
  script: "kingraph.sh",
  ext: "yaml",
  watch: ["content/**/family.yaml"],
})
  .on("start", () => {
    console.log("Starting");
  })
  .on("restart", (files) => {
    for (const file of files) {
      console.log(`Processing ${file}.`);
      spawnSync(`yarn kingraph ${file} -F svg > $\{i %% yaml\}svg`);
    }
  });
