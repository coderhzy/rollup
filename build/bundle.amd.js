define(['exports'], (function (exports) { 'use strict';

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
