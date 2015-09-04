var tasks = {};

// example
tasks.example = require("./tasks/example/index.js").start;

// automatically add tasks here
tasks.getStringFromFile = require("./tasks/getStringFromFile/index.js").start;
tasks.getJsonFromFile = require("./tasks/getJsonFromFile/index.js").start;

module.exports = tasks;
