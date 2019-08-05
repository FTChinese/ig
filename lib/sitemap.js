const {
  isProduction,
} = require("./config");

const ccBase = "/corporate-challenge";

exports.jpm = {
  base: ccBase,
  gallery: `${ccBase}/gallery`,
  content: `${ccBase}/content`,
  imgPrefix: isProduction ? "http://interactive.ftchinese.com/corporate-challenge" : "",
}
