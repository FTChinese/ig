import { isProduction } from "../models/viper";

const ccBase = "/corporate-challenge";

export const jpmMap = {
    suffix: "",
    base: ccBase,
    gallery: `${ccBase}/gallery`,
    content: `${ccBase}/content`,
    imgPrefix: isProduction ? "http://interactive.ftchinese.com/corporate-challenge" : "",
};
