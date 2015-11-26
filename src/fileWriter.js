var fs = require('fs');



var FileWriter = function (opts) {
    "use strict";
    var self = this;
    var _self = {};

    self.writeReport = function(html){
        fs.writeFile("index.html", html, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
};

module.exports = FileWriter;

