(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.myUtils = {}));
})(this, (function (exports) { 'use strict';

    function foo () {
        console.log('foo');
    }

    exports.foo = foo;

}));
