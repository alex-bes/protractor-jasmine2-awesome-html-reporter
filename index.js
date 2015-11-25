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

var SuiteNode = function () {
    "use strict";
    var self = this;
    var _self = {};

    _self.parent = null;
    self.specs = [];
    self.suites = [];


    self.setData = function (data) {
        for (var key in data) {
            if (data.hasOwnProperty(key) && ['parent', 'specs', 'suites'].indexOf(key) < 0) {
                self[key] = data[key];
            }
        }
        return self;
    };

    self.addSuite = function (data) {
        var suiteNode = new SuiteNode();
        suiteNode.setData(data);
        suiteNode.setParent(self);
        self.suites.push(suiteNode);
        return suiteNode;
    };

    self.addSpecResult = function (data) {
        self.specs.push(data);
    };

    self.setParent = function (parentNode) {
        _self.parent = parentNode
    };

    self.getParent = function () {
        return _self.parent
    };
};

var JasmineReportCollector = function () {
    "use strict";
    var self = this;
    var _self = {};

    _self.root = null;
    _self.current = null;

    self.specStarted = function (result) {
        //noop
    };

    self.specDone = function (data) {
        _self.current.addSpecResult(data);
    };

    self.suiteStarted = function (data) {
        _self.current = _self.current.addSuite(data);
    };

    self.suiteDone = function (data) {
        _self.current.setData(data);
        _self.current = _self.current.getParent();
    };

    self.jasmineStarted = function (data) {
        var node = new SuiteNode();
        node.setData(data);
        _self.current = _self.root = node;
    };

    self.jasmineDone = function (data) {
        _self.root.setData(data);
        console.log(JSON.stringify(_self.root, null, 4))
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
        reportCollector.jasmineDone(result)
    }
};


module.exports = AwesomeHtmlReporter;