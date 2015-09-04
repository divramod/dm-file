// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(filePath, searchPattern) {
    try {
        process.env.debug = false; // for debugging purposes
        var filePath = filePath || process.argv[3] || undefined;
        return run(filePath, searchPattern);
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()

// =========== [ SYNC run ] ===========
var run = function() {
    try {
        console.log("start getStringFromFile");

        command = "ls";
        var pattern = spawn(command);
        console.log(pattern.output);


        return "getStringFromFile";
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // run

// =========== [ ASYNC task.start() ] ===========
task.startAsync = co.wrap(function*(filePath) {
    try {
        process.env.debug = false; // for debugging purposes
        var filePath = filePath || process.argv[3] || undefined;
        var result =
            yield runAsync();
        return yield Promise.resolve(result);
    } catch (e) {
        result.success = false;
        result.error = e;
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return yield Promise.resolve(e);
    }
}); // task.start()


// =========== [ ASYNC runAsync ] ===========
var runAsync = co.wrap(function*() {
    try {
        console.log("start getStringFromFile");
        return yield Promise.resolve("getStringFromFile");
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return yield Promise.resolve(e);
    }
}); // runAsync

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
