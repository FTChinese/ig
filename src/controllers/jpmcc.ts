import Router from "koa-router";
import render from "../util/render";
const debug = require("debug")("ig:jpm");
import { ShareBuilder } from "../pages/social-share";
import { contentBuilder } from "../repository/builder";
import { buildHomePage } from "../pages/jpmcc";

const router = new Router();

router.get("/", async(ctx, next) => {
    const homeData = await buildHomePage(ctx.request.href);

    ctx.body = await render("jpmcc/home.html", homeData);
});

router.get("/gallery/:year", async(ctx, next) => {
    const year = ctx.params.year;

    const gallery = contentBuilder.galleryOf(year);

    if (!gallery) {
        ctx.status = 404;
        return;
    }

    debug("Gallery for year %s: %O", year, gallery);

    Object.assign(ctx.state, gallery);
    ctx.state.socialShare = new ShareBuilder({
        title: gallery.meta.title,
        link: ctx.request.href,
        summary: gallery.meta.description,
    }).build();

    ctx.body = await render("jpmcc/annual.html", ctx.state);
});

router.get("/content/:id", async (ctx, next) => {
    const id = ctx.params.id;
  
    const article = await contentBuilder.articleOf(id);
  
    if (!article) {
        ctx.status = 404;
        return;
    }
  
    debug("Article: %O", article);
    Object.assign(ctx.state, article);
    ctx.state.socialShare = new ShareBuilder({
        title: article.meta.title,
        link: ctx.request.href,
        summary: article.meta.description,
    }).build();
  
    ctx.body = await render("jpmcc/story.html", ctx.state);
  });

  export default router.routes();
