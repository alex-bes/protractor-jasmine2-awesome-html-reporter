var JasmineReportCollector  = require('./reportCollector');
var HtmlReportBuilder  = require('./htmlReportBuilder');
var FileWriter  = require('./fileWriter');

var AwesomeHtmlReporter = function (opts) {
    "use strict";

    var self = this;
    var _self = {};

    _self.reportCollector = new JasmineReportCollector();
    _self.htmlReportBuilder = new HtmlReportBuilder();
    _self.fileWriter = new FileWriter();

    self.specStarted = function (result) {
        _self.reportCollector.specStarted(result)
    };

    self.specDone = function (result) {
        _self.reportCollector.specDone(result)
    };

    self.suiteStarted = function (result) {
        _self.reportCollector.suiteStarted(result)
    };

    self.suiteDone = function (result) {
        _self.reportCollector.suiteDone(result)
    };

    self.jasmineStarted = function (result) {
        _self.reportCollector.jasmineStarted(result)
    };

    self.jasmineDone = function (result) {
        _self.reportCollector.jasmineDone(result);

        _self.htmlReportBuilder.setData({
            pageTitle: 'Awesome Jasmine2 Report',
            rootSuite: _self.reportCollector.getTree()
        });

        var report = _self.htmlReportBuilder.build();

        _self.fileWriter.writeReport(report)
    }
};


module.exports = AwesomeHtmlReporter;