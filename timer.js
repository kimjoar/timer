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

    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.oRequestAnimationFrame;

    return function() {
        var start = Date.now();
        var stopped = null;

        var time = function () {
            var now = stopped || Date.now();
            return now - start;
        };

        time.start = function() {
            start = Date.now();
            stopped = null;
        };

        var step = function(cb) {
            return function next() {
                if (stopped) return;
                cb(time());
                requestAnimationFrame(next);
            }
        }

        time.onAnimationFrame = function(cb) {
            requestAnimationFrame(step(cb));
        }

        time.stop = function() {
            stopped = Date.now();
        }

        return time;
    };

}));
