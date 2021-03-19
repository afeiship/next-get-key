/*!
 * name: @jswork/next-get-key
 * description: Get key by value.
 * homepage: https://github.com/afeiship/next-get-key
 * version: 1.0.0
 * date: 2021-03-19 09:43:26
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.getKey = function(inObject, inValue) {
    var result = null;
    nx.forIn(inObject, function(key, value) {
      if (inValue === value) {
        result = key;
        return nx.BREAKER;
      }
    });
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.getKey;
  }
})();
