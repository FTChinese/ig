import { resolve } from "path";
import { configure, render } from "nunjucks"
import makrdown from "nunjucks-markdown";
import marked from "marked";

const env = configure(
    [
        resolve(__dirname, "../../view"),
        resolve(__dirname, "../../client"),
    ],
    {
        noCache: process.env.NODE_ENV == "development",
        watch: process.env.NODE_ENV == "development",
    },
);

marked.setOptions({
    headerIds: false,
    gfm: true,
    breaks: true,
});

makrdown.register(env, marked);

function promisifiedRender(name: string, context?: object): Promise<string> {
    return new Promise((resolve, reject) => {
        render(name, context, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

export default promisifiedRender;

