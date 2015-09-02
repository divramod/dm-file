var tasks = {};

// example
tasks.example = require("./tasks/example/index.js").start;

// automatically add tasks here
tasks.getJsonFromFile = require("./tasks/getJsonFromFile/index.js").start;

module.exports = tasks;
