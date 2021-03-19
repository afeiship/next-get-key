# next-get-key
> Get key by value.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-get-key
```

## usage
```js
import '@jswork/next-get-key';

const status = {
  error: -1,
  init: 0,
  play: 1,
  pause: 2,
  loaded: 3,
  ended: 4,
};

nxGetKey(status, -1);   // 'error'
nxGetKey(status, 0);    // 'init'
nxGetKey(status, 1);    // 'play'
nxGetKey(status, 2);    // 'pause'
nxGetKey(status, 3);    // 'loaded'
nxGetKey(status, 4);    // 'ended'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-get-key/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-get-key
[version-url]: https://npmjs.org/package/@jswork/next-get-key

[license-image]: https://img.shields.io/npm/l/@jswork/next-get-key
[license-url]: https://github.com/afeiship/next-get-key/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-get-key
[size-url]: https://github.com/afeiship/next-get-key/blob/master/dist/next-get-key.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-get-key
[download-url]: https://www.npmjs.com/package/@jswork/next-get-key
