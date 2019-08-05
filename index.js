const debug = require("debug")('user:index');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');

const boot = require('./util/boot-app');

const {
  jpm
} = require("./lib/sitemap");
const jpmorgan = require("./server/jpmorgan");

const {
  env,
  handleErrors,
} = require("./server/middleware");

const version = require('./server/version');

const isProduction = process.env.NODE_ENV === 'production';

const app = new Koa();
const router = new Router();

app.proxy = true;

app.use(logger());

if (!isProduction) {
  const static = require('koa-static');
  app.use(static(path.resolve(process.cwd(), 'node_modules')));
  app.use(static(path.resolve(process.cwd(), 'build/dev')));
  app.use(static(path.resolve(process.cwd(), "public")));
}

// Configurations passed around
app.use(env());
app.use(handleErrors());

router.use(jpm.base, jpmorgan);
router.use('/__version', version);

app.use(router.routes());

debug(router.stack.map(layer => layer.path));

boot(app)
  .catch(err => {
    debug.error('Bootup error: %O', err);
  });
