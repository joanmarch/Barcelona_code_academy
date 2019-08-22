var assert       = require('chai').assert
var check_who_is_older          = require('../02_javascript/block4/exercise1').check_who_is_older

describe("#test0", function(){
    it ('check_who_is_older should be a function', function(){
        assert.typeOf(check_who_is_older, 'function')
    })
})
describe("#test1", function(){
    it ('check_who_is_older should be antonello age 35 is older than stefano age 27', function(){
        assert.equal(check_who_is_older('stefano', 27, 'antonello', 35),
        "antonello age 35 is older than stefano age 27")
    })
})
describe("#test2", function(){
    it ('check_who_is_older should be stefano age 57 is older than antonello age 35', function(){
        assert.equal(check_who_is_older('stefano', 57, 'antonello', 35),
        "stefano age 57 is older than antonello age 35")
    })
})
describe("#test3", function(){
    it ('check_who_is_older should be Peter age 95 is older than John age 57', function(){
        assert.equal(check_who_is_older('John', 57, 'Peter', 95),
        "Peter age 95 is older than John age 57")
    })
})