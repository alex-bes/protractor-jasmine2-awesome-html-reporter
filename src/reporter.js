var fs = require('fs');
var swig = require('swig');

var JasmineReportCollector = require('./reportCollector');

var AwesomeHtmlReporter = function (opts) {
    "use strict";
    var self = this;
    var _self = {};

    _self.reportCollector = new JasmineReportCollector();

    _self.generateScreenshotFileName = function (specResult) {
        return specResult.fullName.replace(/\W+/g, "_") + "_" + specResult.id;
    };

    self.specStarted = function (result) {
        _self.reportCollector.specStarted(result)
    };

    self.specDone = function (result) {
        result.screenshotFileName = _self.generateScreenshotFileName(result) + '.png';
        result.screenshotUrl = 'screenshots/' + result.screenshotFileName;
        browser.takeScreenshot().then(function (png) {

            //fs.mkdir('screenshots', function (err) {
            //if (err) {
            //    throw new Error('Could not create directory for screenshots');
            //}
            var stream = fs.createWriteStream(result.screenshotUrl);
            stream.write(new Buffer(png, 'base64'));
            stream.end();
            //});
        });

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

        var data = {
            pageTitle: 'Awesome Jasmine2 Report',
            rootSuite: _self.reportCollector.getTree()
        };

        console.log(JSON.stringify(_self.reportCollector.getTree(), null, 4));

        var template = swig.compileFile(__dirname + '/templates/index.html');
        var report = template(data);

        fs.writeFile("index.html", report, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
};


module.exports = AwesomeHtmlReporter;