const { inlineSource } = require("inline-source");
const path = require("path");
const fs = require("fs").promises;

class AssetsBuilder {
  cssInput = null;
  jsInput = null;
  styleOutput = null;
  scriptOutput = null;

  constructor({
    cssInput, 
    jsInput, 
    styleOutput, 
    scriptOutput
  }={}) {
    this.cssInput = cssInput;
    this.jsInput = jsInput;
    this.styleOutput = styleOutput;
    this.scriptOutput = scriptOutput;
  }

  get scriptTag() {
    return `<script inline src="${this.jsInput}"></script>`
  }

  get styleTag() {
    return `<link inline rel="stylesheet" href="${this.cssInput}">`
  }

  async inlineScript() {
    const html = await inlineSource(this.scriptTag);
    const dest = path.resolve(process.cwd(), this.scriptOutput);

    console.log(`Writing file ${dest}`);

    await fs.writeFile(dest, html);
  }

  async inlineStyle() {
    
    const html = await inlineSource(this.styleTag);
    const dest = path.resolve(process.cwd(), this.styleOutput);

    console.log(`Writing file ${dest}`);

    await fs.writeFile(dest, html);
  }

  async build() {
    const queue = [];

    if (this.cssInput) {
      queue.push(this.inlineStyle());
    }

    if (this.jsInput) {
      queue.push(this.inlineScript());
    }

    return Promise.all(queue);
  }
}

module.exports = AssetsBuilder;
