const {
  jpmStore
} = require("../model/jpm/store");
const assert = require("assert");

describe("store", function() {
  it("returns an article", async function() {
    const content = await jpmStore.buildArticle("62d809e707ccbecda6c82ca7");

    assert.ok(content);
  });

  it("build teasers", async function() {
    const teasers = jpmStore.buildTeasers("2016");

    console.log(teasers);
  });
});
