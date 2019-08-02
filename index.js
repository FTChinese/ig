const {
  viper,
} = require("./lib/config");
const config = viper.setConfigPath(process.env.HOME)
  .setConfigName("config/api.toml")
  .readInConfig()
  .getConfig();
const debug = require("debug")('user:index');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const session = require('koa-session');

const boot = require('./util/boot-app');

const {
  env,
  handleErrors,
} = require("./server/middleware");

const version = require('./server/version');

const isProduction = process.env.NODE_ENV === 'production';
const app = new Koa();
const router = new Router();

app.proxy = true;

app.keys = [config.koa_session.ig];

app.use(logger());

if (!isProduction) {
  const static = require('koa-static');
  app.use(static(path.resolve(process.cwd(), 'node_modules')));
  app.use(static(path.resolve(process.cwd(), 'build/dev')));
}

// Configurations passed around
app.use(env());
app.use(session({
  renew: true,
  key: "_ftc:next"
}, app));
app.use(handleErrors());


router.use('/__version', version);

app.use(router.routes());

debug(router.stack.map(layer => layer.path));

boot(app)
  .catch(err => {
    debug.error('Bootup error: %O', err);
  });
