const commandLineArgs = require("command-line-args");

const optionDefinitions = [
  {
    name: "project",
    alias: "p",
    type: String,
  }
];
const options = commandLineArgs(optionDefinitions);


console.log(options);
