const debug = require("debug")("user:middleware");
const isProduction = process.env.NODE_ENV === "production"
const pkg = require("../package.json");
const sitemap = require("../lib/sitemap");

const {
  matrix,
} = require("../model/footer");

const render = require("../util/render");

exports.env = function () {
  return async (ctx, next) => {

    ctx.state.env = {
      isProduction,
      year: new Date().getFullYear(),
      footer: matrix,
      version: pkg.version,
      
    };

    ctx.state.sitemap = sitemap;

    await next();
  }
};

exports.handleErrors = function() {
  return async function handleErrors (ctx, next) {
    try {
  // Catch all errors from downstream
      await next();
    } catch (e) {
      
      debug("%O", e);
      
      ctx.state.error = {
        status: e.status || 500,
        stack: e.stack,
        message: e.message || 'Internal Server Error'
      }

      ctx.status = ctx.state.error.status;
      ctx.body = await render('error.html', ctx.state);
    }
  }
};
