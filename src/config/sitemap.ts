import { viper } from "./viper";

const ccBase = "/corporate-challenge";

export const jpmMap = {
    assetsBaseUrl: viper.isProduction
      ? `http://interactive.ftchinese.com/${ccBase}`
      : "",
    base: ccBase,
    gallery: `${ccBase}/gallery`,
    content: `${ccBase}/content`,
    imgPrefix: viper.isProduction ? "http://interactive.ftchinese.com/corporate-challenge" : "",
};
