// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(filePath, key) {
    try {
        var filePath = filePath || process.argv[3] || undefined;
        var key = key || process.argv[4] || undefined;
        var j = require("./../getJsonFromFile/index.js").start(filePath);
        if (j[key]) {
            return j[key];
        } else {
            return undefined;
        }
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
