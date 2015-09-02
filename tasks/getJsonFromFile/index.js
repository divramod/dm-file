// =========== [ REQUIRE ] ===========
var co = require("co");
var fs = require("fs");
var print = require("pretty-print");
var prettyjson = require('prettyjson');
var dmPath = require("dm-path");
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var task = {};

task.start = function start(filePath) {
    process.env.debug = true; // for debugging purposes
    try {
        var filePath = filePath || process.argv[3] || undefined;
        filePath = dmPath.replace(filePath);

        var result = run(filePath); // call the run method
        if (process.argv.indexOf("print") > -1) {
            console.log(prettyjson.render(result, {
                keysColor: 'green',
                dashColor: 'white',
                stringColor: 'yellow',
                numberColor: 'red'
            }, 2));
        }
        return result;
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}

// =========== [ run ] ===========
var run = function(filePath) {
    if (!test("-f", filePath)) {
        var e = {
            message: "DmError: File not existent"
        }
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.message);
        }
        return e;
    } else {
        try {
            var object = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            return object;
        } catch (e) {
            if (process.env.debug === "true") {
                console.log("Filename: ", __filename, "\n", e.stack);
            }
            return e;
        }
    }
}; // run

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
