(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myUtils = {}));
})(this, (function (exports) { 'use strict';

  function sum(a, b) {
    return a + b;
  }

  function mul(a, b) {
    return a * b;
  }

  function foo () {
      console.log('foo');
      console.log(sum(1,2));
  }

  exports.foo = foo;
  exports.mul = mul;
  exports.sum = sum;

}));
