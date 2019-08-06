const path = require("path");
const fs = require("fs").promises;
const makeDir = require("make-dir");

const {
  jpmStore,
} = require("../model/jpm/store");
const render = require("./render");
const SocialShare = require("../lib/social-share");
const baseUrl = "http://interactive.ftchinese.com/corporate-challenge";
const {
  matrix,
} = require("../model/footer");
const pkg = require("../package.json");
const galleries = require("../model/jpm/gallery.json");
const contents = require("../model/jpm/stories.json");

const outDir = path.resolve(process.cwd(), "public");

const sitemap = {
  suffix: ".html",
  base: "/corporate-challenge/index.html",
  gallery: `/corporate-challenge/gallery`,
  content: `/corporate-challenge/content`,
  imgPrefix: `/corporate-challenge`,
};

const env = {
  suffix: ".html",
  isProduction: true,
  year: new Date().getFullYear(),
  footer: matrix,
  version: pkg.version,
};

async function buildHome() {
  const homeData = jpmStore.buildHome();

  const socialShare = new SocialShare({
    title: homeData.meta.title,
    link: `${baseUrl}/index.html`,
    summary: homeData.meta.description,
  }).build();

  const html = await render("jpmcc/home.html", {
    env,
    ...homeData,
    socialShare,
    sitemap,
  });

  const dest = path.resolve(process.cwd(), `${outDir}/index.html`);

  console.log(`Writing file ${dest}`);

  await fs.writeFile(dest, html);
}

async function buildGallery(year) {
  const gallery = jpmStore.buildGallery(year);
  const socialShare = new SocialShare({
    title: gallery.meta.title,
    link: `${baseUrl}/gallery/${year}.html`,
    summary: gallery.meta.description,
  }).build();

  const html = await render("jpmcc/annual.html", {
    env,
    ...gallery,
    socialShare,
    sitemap,
  });

  const dest = path.resolve(process.cwd(), `${outDir}/gallery/${year}.html`)

  console.log(`Writing file ${dest}`);

  await fs.writeFile(dest, html);
}

async function buildContent(id) {
  const article = await jpmStore.buildArticle(id);

  const socialShare = new SocialShare({
    title: article.meta.title,
    link: `${baseUrl}/content/${id}.html`,
    summary: article.meta.description,
  }).build();

  const html = await render("jpmcc/story.html", {
    env,
    ...article,
    socialShare,
    sitemap,
  });

  const dest = path.resolve(process.cwd(), `${outDir}/content/${id}.html`)

  console.log(`Writing file ${dest}`);

  await fs.writeFile(dest, html);
}

async function build() {
  console.log("Building home html...");

  await buildHome();

  console.log("Building gallery html...");
  await makeDir(path.resolve(outDir, "gallery"));

  const years = Object.entries(galleries).map(([key, _]) => {
    return key;
  });

  await Promise.all(years.map(year => {
    return buildGallery(year);
  }));

  console.log("Building content html...");
  await makeDir(path.resolve(outDir, "content"));

  const ids = Object.entries(contents).map(([key, _]) => {
    return key;
  });

  await Promise.all(ids.map(id => {
    return buildContent(id);
  }));
}

if (require.main === module) {
  build()
  .then(() => {
    console.log("Finished");
  })
  .catch(err => {
    console.error(err);
  });
}

module.exports = build;

