const crypto = require('crypto');
const util = require('util');

const randomBytes = util.promisify(crypto.randomBytes);

class Base64Encoding {
  unescape (str) {
    return (str + '==='.slice((str.length + 3) % 4))
      .replace(/-/g, '+')
      .replace(/_/g, '/')
  }

  escape (str) {
    return str.replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '')
  }
}

class Base64URLEncoding extends Base64Encoding {
  /**
   * @description base64url encode a buffer
   * @param {Buffer} buf
   * @return {string}
   */
  encode(buf) {
    return this.escape(buf.toString("base64"));
  }

  /**
   * @description Turn base64url encoded string back or original buffer
   * @param {string} str - base64url encoded string
   * @return {Buffer}
   */
  decode(str) {
    return Buffer.from(this.unescape(str), 'base64');
  }
}

class Base64StdEncoding {
  /**
   * @description base64url encode a buffer
   * @param {Buffer} buf
   * @return {string}
   */
  encode(buf) {
    return buf.toString("base64");
  }

  /**
   * @description Turn base64url encoded string back or original buffer
   * @param {string} str - base64url encoded string
   * @return {Buffer}
   */
  decode(str) {
    return Buffer.from(str, 'base64');
  }
}

class Random {
  #promisedBuffer;

  constructor(bytes) {
    this.#promisedBuffer = randomBytes(bytes);
  }

  async raw() {
    return await this.#promisedBuffer;
  }

  async hex() {
    const buf = await this.#promisedBuffer;
    return buf.toString("hex")
  }
}

exports.Random = Random;
exports.base64URLEncoding = new Base64URLEncoding();
exports.base64StdEncoding = new Base64StdEncoding();
