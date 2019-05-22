# next-get-key
> Get key by value.

## installation
```bash
npm install -S afeiship/next-get-key --registry=https://registry.npm.taobao.org
```

## usage
```js
import nxGetKey from 'next-get-key';

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
