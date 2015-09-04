var co = require("co");
var jobs = {};

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ test ] ===========
        if (["example"].indexOf(argv2) > -1) {
            var task = require("./tasks/example/index.js");
            yield task.start();
        }

        // automatically add tasks here

        // =========== [ jsonKey ] ===========
        else if (['jsonKey','jk'].indexOf(argv2) > -1) {
            var task = require("./tasks/jsonKey/index.js");
            task.start();
        }
        // =========== [ getStringFromFile ] ===========
        else if (['getStringFromFile'].indexOf(argv2) > -1) {
            var task = require("./tasks/getStringFromFile/index.js");
            task.start();
        }
        // =========== [ getJsonFromFile ] ===========
        else if (['getJsonFromFile','gj'].indexOf(argv2) > -1) {
            var task = require("./tasks/getJsonFromFile/index.js");
            yield task.start();
        }

        // =========== [ getCommonTasks (dm-npm) ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
