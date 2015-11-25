var HtmlReportBuilder = function (opts) {
    "use strict";
    var self = this;

    var rawData;
    self.setData = function (data) {
        rawData = data;
        return self;
    };

    self.build = function () {

    }
};

var FileWriter = function (opts) {
    "use strict";

    var self = this;

};

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
        return timeStarted.getTime() - currentTime.getTime()
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

var SuiteNode = function(data){
    "use strict";
    var self = this;
    var _self = {};

    _self.parent = null;

    self.setStartedInfo = function(){

    };

    self.setParent = function(parentNode){
        _self.parent = parentNode
    };

    self.getParent = function(){
        return _self.parent
    }

};

var JasmineReportCollector = function () {
    "use strict";
    var self = this;
    var _self = {};
    _self.timers = {};

    _self.specs = [];
    _self.suites = [];
    _self.suitesStack = [];
    _self.recursionLevel = 0;

    _self.root = null;
    _self.current = null;

    self.specStarted = function (result) {

    };

    self.specDone = function (result) {

    };

    self.suiteStarted = function (result) {
    };

    self.suiteDone = function (result) {
        result.suites = _self.suites;
    };

    self.jasmineStarted = function (suiteInfo) {
    };

    self.jasmineDone = function () {
    }

};


var AwesomeHtmlReporter = function (opts) {
    "use strict";

    var self = this;
    var reportCollector = new JasmineReportCollector();

    self.specStarted = function (result) {
        reportCollector.specStarted(result)
    };

    self.specDone = function (result) {
        reportCollector.specDone(result)
    };

    self.suiteStarted = function (result) {
        reportCollector.suiteStarted(result)
    };

    self.suiteDone = function (result) {
        reportCollector.suiteDone(result)
    };

    self.jasmineStarted = function (result) {
        reportCollector.jasmineStarted(result)
    };

    self.jasmineDone = function (result) {
        reportCollector.jasmineStarted(result)
    }
};


module.exports = AwesomeHtmlReporter;