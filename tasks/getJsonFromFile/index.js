// =========== [ REQUIRE ] ===========
var co = require("co");
var fs = require("fs");
require("shelljs/global");

// =========== [ MODULE DEFINE ] ===========
var task = {};
var result = {
    "taskname": "getJsonFromFile"
};

// =========== [ task.start() ] ===========
task.start = co.wrap(function*(filePath) {
    try {
        var filePath = filePath || process.argv[3] || undefined;
        run(filePath);
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        result.success = false;
        result.error = e;
    }
    return yield Promise.resolve(result);
}); // task.start()

// =========== [ run ] ===========
var run = co.wrap(function*(filePath) {
    if (!test("-f", filePath)) {
        result.success = false;
        result.error = {
            message: "The File with path " + filePath + " doesn't exists!"
        }
    } else {
        try {
            result.data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            result.success = true;
        } catch (e) {
            /* handle error */
            result.success = false;
            result.error = e;
        }
    }
}); // run

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
