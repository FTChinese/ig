import { Middleware } from "koa";
import render from "../util/render";

export function handleErrors(): Middleware {
    return async (ctx, next) => {
        try {
            await next();
        } catch (e) {
            ctx.state.error = {
                status: e.status || 500,
                stack: e.stack,
                message: e.message || "Internal Server Error"
            };

            ctx.status = ctx.state.error.status;
            ctx.body = await render("error.html", ctx.state);
        }
    }
}
