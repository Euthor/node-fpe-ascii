/*
 * Wraps `node-fpe`, https://www.npmjs.com/package/node-fpe.
 *
 * Authors:
 *
 * - Nicholas Kyriakides, @nicholaswmin
 */

'use strict';

const fpe = require('node-fpe');

class Encryptor {
  constructor(opts = {password: null}) {
    if (!opts.password) {
      throw new Error('You need to pass a valid password to use for encrypting/decrypting');
    }

    this._encryptor = fpe({
      password: opts.password,
      domain: this._getAllASCIICharacters()
    });
  }

  encrypt(plaintext) {
    return this._encryptor.encrypt(plaintext);
  }

  decrypt(ciphertext) {
    return this._encryptor.decrypt(ciphertext);
  }

  _getAllASCIICharacters() {
    const chars = [];

    for (let i = 32; i < 127; ++i) {
      chars.push(String.fromCharCode(i));
    }

    return chars;
  }
}

module.exports = Encryptor;
