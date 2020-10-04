const commandLineArgs = require("command-line-args");
const assetsConfig = require("./assets-config");
const AssetsBuilder = require("./assets-builder");

const optionDefinitions = [
  {
    name: "project",
    alias: "p",
    type: String,
  }
];

const options = commandLineArgs(optionDefinitions);

const config = assetsConfig[options.project];

if (!config) {
  throw new Error("Please select a project name from assets-config.js");
}

if (require.main === module) {
  new AssetsBuilder(config).build().then(() => {
    console.log("Inline finished");
  })
  .catch(err => {
    console.error(err);
  });
}
