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
