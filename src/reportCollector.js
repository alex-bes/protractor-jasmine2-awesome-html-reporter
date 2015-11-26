var Timer = require('./timer');
var SuiteNode = require('./suiteTreeNode');

var JasmineReportCollector = function () {
    "use strict";
    var self = this;
    var _self = {};

    _self.timer = new Timer();

    _self.root = null;
    _self.current = null;

    self.specStarted = function (data) {
        _self.timer.start(data.id);
    };

    self.specDone = function (data) {
        data.time = _self.timer.lapAndForget(data.id);
        _self.current.addSpecResult(data);
    };

    self.suiteStarted = function (data) {
        _self.timer.start(data.id);
        _self.current = _self.current.addSuite(data);
    };

    self.suiteDone = function (data) {
        data.time = _self.timer.lapAndForget(data.id);
        _self.current.setData(data);
        _self.current = _self.current.getParent();
    };

    self.jasmineStarted = function (data) {
        _self.timer.start('jasmine');
        var node = new SuiteNode();
        node.setData(data);
        _self.current = _self.root = node;
    };

    self.jasmineDone = function () {
        var data = {};
        data.time = _self.timer.lapAndForget('jasmine');
        _self.root.setData(data);
    };

    self.getTree = function(){
        return _self.root;
    };

};

module.exports = JasmineReportCollector;