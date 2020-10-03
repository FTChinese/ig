import { isProduction } from "./models/viper";
import { resolve } from "path";
import Koa from "koa";
import Router from "koa-router";
import logger from "koa-logger";
import serve from "koa-static";
const pkg = require("../package.json");

import {
  env,
  handleErrors,
} from "./controllers/middleware";
import { jpmMap } from "./models/sitemap";
import jpmcc from "./controllers/jpmcc";

const app = new Koa();
const router = new Router();

app.proxy = true;

if (!isProduction) {
  app.use(
    serve(
      resolve(__dirname, "../node_modules")
    )
  );
  app.use(
    serve(
      resolve(__dirname, "../build/dev")
    )
  );
}
app.use(logger());

app.use(env());
app.use(handleErrors());

router.use(jpmMap.base, jpmcc);

app.use(router.routes());

console.log(router.stack.map(layer => layer.path));

async function bootUp(app: Koa, port: number = 3000, appName: string = pkg.name) {
  console.log(`Booting ${appName}`);

  const server = app.listen(port);

  server.on("error", err => {
    console.error("Server error: %O", err);
  });

  server.on("listening", () => {
    console.log("%s running on port %s", appName, server.address());
  });
}

bootUp(app, Number.parseInt(process.env.PORT))
  .catch(err => {
    console.error("Boot error: %O", err);
  });

