var JasmineReportCollector  = require('./reportCollector');

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