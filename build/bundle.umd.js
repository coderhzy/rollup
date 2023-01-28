(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', 'lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myUtils = {}, global._));
})(this, (function (exports, _) { 'use strict';

  function sum(a, b) {
    return a + b;
  }

  function mul(a, b) {
    return a * b;
  }

  function formatPrice() {
      return 'R$ 1.000,00'
  }

  var format = {
      formatPrice
  };

  function foo () {
      console.log('foo');
      console.log(sum(1,2));
      console.log(format.formatPrice());
      console.log(_.join(['a', 'b', 'c'], '~'));
  }

  exports.foo = foo;
  exports.mul = mul;
  exports.sum = sum;

}));
