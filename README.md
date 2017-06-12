[![Build Status](https://travis-ci.org/Euthor/node-fpe-ascii.svg?branch=master)](https://travis-ci.org/Euthor/node-fpe-ascii)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

# node-fpe-ascii
Format-Preserving symmetric encryption in Node.js.

Simply wraps [node-fpe][1] adding default support for all [ASCII][2] characters.

## Usage

```javascript
const Encryptor = require('fpe');
const encryptor = new Encryptor({ password: 'veronica' });

// Note: The ciphertext has the same length as the plaintext.
cipher.encrypt('The quick brown fox number 3, jumps over the lazy dog')
// '/(26:*Gu`6OpRDx6>R,6x* O2p6oF6w* \b6Rt2p6C(26l7E56gR!'

cipher.decrypt('/(26:*Gu`6OpRDx6>R,6x* O2p6oF6w* \b6Rt2p6C(26l7E56gR!')
// 'The quick brown fox number 3, jumps over the lazy dog'
```

## Run the tests

```bash
$ npm test
```

## Authors

- Nicholas Kyriakides, [@nicholaswmin][3]

## Owners

- [Euthor][4]

## License

> The MIT License

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[1]: https://www.npmjs.com/package/node-fpe
[2]: http://ee.hawaii.edu/~tep/EE160/Book/chap4/subsection2.1.1.1.html
[3]: https://github.com/nicholaswmin
[4]: https://github.com/Euthor
