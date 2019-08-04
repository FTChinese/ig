const Router = require('koa-router');
const render = require("../util/render");
const debug = require("debug")("ig:jpm");
const SocialShare = require("../lib/social-share");

const {
  jpmStore,
} = require("../model/jpm/store");

const router = new Router();

router.get("/", async (ctx, next) => {
  
  const homeData = jpmStore.buildHome();

  debug("Home page data: %O", homeData);

  Object.assign(ctx.state, homeData);
  ctx.state.socialShare = new SocialShare({
    title: homeData.meta.title,
    link: ctx.request.href,
    summary: homeData.meta.description,
  }).build();

  ctx.body = await render("jpmorgan/home.html", ctx.state);
});

router.get("/gallery/:year", async (ctx, next) => {
  const year = ctx.params.year;

  const gallery = jpmStore.buildGallery(year);

  if (!gallery) {
    ctx.status = 404;
    return;
  }

  debug("Gallery for year %s: %O", year, gallery);

  Object.assign(ctx.state, gallery);

  ctx.body = await render("jpmorgan/annual.html", ctx.state);
});

router.get("/content/:id", async (ctx, next) => {
  const id = ctx.params.id;

  const article = await jpmStore.buildArticle(id);

  if (!article) {
    ctx.status = 404;
    return;
  }

  debug("Article: %O", article);
  Object.assign(ctx.state, article);

  ctx.body = await render("jpmorgan/story.html", ctx.state);
})

module.exports = router.routes();
