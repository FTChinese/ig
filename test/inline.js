const AssetsBuilder = require("../util/assets-builder");

describe("inline", function() {
  it("css", async function () {
    const builder = new AssetsBuilder({
      cssInput: "build/production/jpmcc.css",
      styleOutput: "view/jpmcc/partials/style.html",
    });

    console.log(builder.styleTag);

    await builder.build();
  });
});
