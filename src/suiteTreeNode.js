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

module.exports = SuiteNode;