var should = require('chai').should();
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe.only('getStringFromFile sync'.red, function() {

    // =========== [ start ] ===========
    it('constants.ng.js: should ...', function* success() {
        var result = require('./../index.js').start("constants.ng.js");
        result.should.equal("getStringFromFile");
    });

    // =========== [ start ] ===========
    //it('error: should ...', function* error() {
        //var result = require('./../index.js').start();
        //result.should.equal("falsegetStringFromFile");
    //});

});

// =========== [ dm-file TESTS ] ===========
describe('getStringFromFile asyn'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function* success() {
        var result =
            yield require('./../index.js').startAsync();
        result.should.equal("getStringFromFile");
    });

    // =========== [ start ] ===========
    it('error: should ...', function* error() {
        var result =
            yield require('./../index.js').startAsync();
        result.should.equal("falsegetStringFromFile");
    });

});
