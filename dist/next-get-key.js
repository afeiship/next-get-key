/*!
 * name: next-get-key
 * link: https://github.com/afeiship/next-get-key
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

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
