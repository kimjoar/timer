(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.timer = factory();
  }
}(this, function () {
    'use strict';

    return function() {
        var start;
        var time = function () {
            return Date.now() - start;
        };
        time.start = function() {
            start = Date.now();
        };
        return time;
    };

}));
