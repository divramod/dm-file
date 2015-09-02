var should = require('chai').should();
var start = require('./../index.js').start;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('getJsonFromFile'.red, function() {

    // =========== [ success ] ===========
    it('should return valid json', function* testStart() {
        var result =
            yield start(__dirname + "/valid.json");
        result.taskname.should.equal("getJsonFromFile");
        result.success.should.equal(true);
    });

    // =========== [ error ] ===========
    it('should return error on invalid json', function* testStart() {
        var result =
            yield start(__dirname + "/invalid.json");
        result.taskname.should.equal("getJsonFromFile");
        result.success.should.equal(false);
        result.error.message.should.equal("Unexpected string");
    });

});
