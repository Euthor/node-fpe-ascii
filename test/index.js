/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */

'use strict';

const chai = require('chai');
const Encryptor = require('../index.js');

const should = chai.should();
const encryptor = new Encryptor({password: 'veronica'});

describe('Format-Preserving Encryption', () => {
  it(`Should encrypt an alphanumeric String and then decrypt back to the plaintext`, () => {
    const plaintext = 'The quick brown fox number 3 jumps over the lazy dog';
    const ciphertext = encryptor.encrypt(plaintext);
    const decryptedCiphertext = encryptor.decrypt(ciphertext);

    ciphertext.should.be.a('String');
    decryptedCiphertext.should.be.a('String');

    ciphertext.should.not.equal(plaintext);
    ciphertext.length.should.equal(plaintext.length);

    decryptedCiphertext.should.equal(plaintext);
  });

  it(`Should encrypt a complex String (alphanumeric plus symbols) and decrypt it back to the plaintext`, () => {
    const plaintext = `"Lorem village, Lorem, Lorem, Lorem","Title: a) Lorem b) Ipsum; Ipsum: a) Ipsum Ipsum, Ipsum of Ipsum under the Ipsum Ipsum b) Ipsum Ipsum before Ipsum Ipsum Ipsum under the Ipsum Ipsum c) Ipsum of Ipsum under the Ipsum regime d) Ipsum Ipsum of Ipsum Ipsum Ipsum. A Ipsum Ipsum Ipsum Mullah Ipsum Ipsum (T1I.O.4.01) Ipsum of Ipsum Ipsum Ipsum as at Ipsum. 2010. Belongs to Ipsum Ipsum. Ipsum Ipsum to Ipsum Ipsum Ipsum 1822 (2001) was lorem on 31 Sep. 2001; Ipsum: Ipsum; Listing Information: Ipsum by Ipsum Ipsum on 12 February 2009 (amended on 12 September 1965, 12 February 2012 and 23 July 2017, 31 March. 2020); Committees: 1944 (Ipsum); Control Date: 11.11.2015","Ipsum","","","Control Lorem Ipsum","Lorem List","12.01.1900","Ipsum Lorem Ipsum of Ipsum Ipsum and Ipsum","Foo"`;
    const ciphertext = encryptor.encrypt(plaintext);
    const decryptedCiphertext = encryptor.decrypt(ciphertext);

    ciphertext.should.be.a('String');
    decryptedCiphertext.should.be.a('String');

    ciphertext.should.not.equal(plaintext);
    ciphertext.length.should.equal(plaintext.length);

    decryptedCiphertext.should.equal(plaintext);
  });

  it(`Should encrypt a stringified Object and decrypt it back to the plaintext`, () => {
    const plainObject = {
      foo: 'bar',
      age: 65
    };
    const plaintext = JSON.stringify(plainObject);
    const ciphertext = encryptor.encrypt(plaintext);
    const decryptedCiphertext = encryptor.decrypt(ciphertext);

    ciphertext.should.be.a('String');
    decryptedCiphertext.should.be.a('String');

    ciphertext.should.not.equal(plaintext);
    ciphertext.length.should.equal(plaintext.length);

    decryptedCiphertext.should.equal(plaintext);
    JSON.parse(decryptedCiphertext).should.deep.equal(plainObject);
  });
});
