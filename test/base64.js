const { 
  Random,
  base64URLEncoding,
  base64StdEncoding,
} = require("../lib/random");
const assert = require("assert");

describe("random", function() {
  it("generate a mongdb like object id", async function() {
    const id = await new Random(12).hex();

    console.log(id);
  })
});

describe("base64", function() {
  it("base64 url encoding", async function() {
    const buf = await new Random(72).raw();

    console.log(base64URLEncoding.encode(buf));
  });

  it("base64 raw encoding", async function() {
    const buf = await new Random(72).raw();

    console.log(base64StdEncoding.encode(buf));
  })
})
