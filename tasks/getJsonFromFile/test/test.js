var should = require('chai').should();
var start = require('./../index.js').start;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('getJsonFromFile'.red, function() {

    // =========== [ success ] ===========
    it('should return valid json', function* testStart() {
        var result =
            yield start(__dirname + "/valid.json");
        result.should.be.an("object");
    });

    // =========== [ error ] ===========
    it('should return error on invalid json', function* testStart() {
        var error =
            yield start(__dirname + "/invalid.json");
        error.should.be.an("object");
        error.message.should.equal("Unexpected string");
    });

    // =========== [ error ] ===========
    it('should return error on File not existent', function* testStart() {
        var error =
            yield start(__dirname + "/nofile");
        error.should.be.an("object");
        error.message.should.equal("DmError: File not existent");
    });

});
