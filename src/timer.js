var Timer = function () {
    "use strict";
    var self = this;
    var _self = {};
    _self.timers = {};

    self.start = function (id) {
        _self.timers[id] = new Date();
        return self;
    };

    self.lap = function (id) {
        var timeStarted = _self.timers[id];
        var currentTime = new Date();
        return currentTime.getTime() - timeStarted.getTime();
    };

    self.lapAndForget = function (id) {
        var diff = self.lap(id);
        self.stop(id);
        return diff;
    };

    self.stop = function (id) {
        _self.timers[id] = null;
        return self;
    }
};

module.exports = Timer;