var swig = require('swig');

var HtmlReportBuilder = function (opts) {
    "use strict";
    var self = this;
    var _self = {};
    _self.data = null;

    self.setData = function (data) {
        _self.data = data;
        return self;
    };

    self.build = function () {
        var template = swig.compileFile(__dirname + '/templates/index.html');
        return template(_self.data);
    }
};

module.exports = HtmlReportBuilder;
