[![Build Status](https://travis-ci.org/Euthor/node-fpe-ascii.svg?branch=master)](https://travis-ci.org/Euthor/node-fpe-ascii)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

# node-fpe-ascii
Format-Preserving symmetric encryption in Node.js.

Simply wraps [node-fpe][1], adding default support for all [ASCII][2] characters.

## Usage

```javascript
const Encryptor = require('node-fpe-ascii');
const encryptor = new Encryptor({ password: 'veronica' });

// Note: The ciphertext has the same length as the plaintext.
encryptor.encrypt('The quick brown fox number 3, jumps over the lazy dog')
// '/(26:*Gu`6OpRDx6>R,6x* O2p6oF6w* \b6Rt2p6C(26l7E56gR!'

encryptor.decrypt('/(26:*Gu`6OpRDx6>R,6x* O2p6oF6w* \b6Rt2p6C(26l7E56gR!')
// 'The quick brown fox number 3, jumps over the lazy dog'
```

## Run the tests

```bash
$ npm test
```

## Contributing?

```bash
# Always run the linter & fix code style before pushing
$ npm run lint
```

## Authors

- Nicholas Kyriakides, [@nicholaswmin][3]

## Owners

- [Euthor][4]

## License

> The MIT License

[1]: https://www.npmjs.com/package/node-fpe
[2]: http://ee.hawaii.edu/~tep/EE160/Book/chap4/subsection2.1.1.1.html
[3]: https://github.com/nicholaswmin
[4]: https://github.com/Euthor
