import Router from "koa-router";
import render from "../util/render";
import { buildGalleryPage, buildHomePage, buildStoryPage } from "../pages/jpmcc";

const router = new Router();

router.get("/", async (ctx, next) => {
  const homeData = buildHomePage(ctx.request.href);

  ctx.body = await render("jpmcc/home.html", homeData);
});

router.get("/gallery/:year", async (ctx, next) => {
  const year = ctx.params.year;

  const data = buildGalleryPage(year);

  if (!data) {
    ctx.status = 404;
    return;
  }

  ctx.body = await render("jpmcc/annual.html", data);
});

router.get("/content/:id", async (ctx, next) => {
  const id = ctx.params.id;

  const data = buildStoryPage(id);

  if (!data) {
    ctx.status = 404;
    return;
  }

  ctx.body = await render("jpmcc/story.html", data);
});

export default router.routes();
