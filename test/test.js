var nx = require('next-js-core2');
require('../src/next-get-key');

test('nx.getKey', function() {
  var status = {
    init: 0,
    play: 1,
    loaded: 3,
    pause: 2,
    ended: 4,
    error: -1
  };

  expect(nx.getKey(status, 0)).toBe('init');
  expect(nx.getKey(status, 1)).toBe('play');
  expect(nx.getKey(status, 2)).toBe('pause');
  expect(nx.getKey(status, 3)).toBe('loaded');
  expect(nx.getKey(status, 4)).toBe('ended');
  expect(nx.getKey(status, -1)).toBe('error');

  // expect(result.name, obj1.name).toBe(null);
});
