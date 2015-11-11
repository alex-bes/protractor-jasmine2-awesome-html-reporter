AwesomeHtmlReporter = function (opts) {
    "use strict";

    var self = this;

    var opts =

    self.jasmineStarted = function (suiteInfo) {
        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);
    };

    self.suiteStarted = function (result) {
        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
    };


    self.specStarted = function (result) {
        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    };


    self.specDone = function (result) {
        console.log('Spec: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    };

    self.suiteDone = function (result) {
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('AfterAll ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    };

    self.jasmineDone = function() {
        console.log('Finished suite');
    }
};


module.exports = AwesomeHtmlReporter;