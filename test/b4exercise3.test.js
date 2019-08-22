var assert                      = require('chai').assert
var check_types                 = require('../02_javascript/block4/exercise3').check_types

describe("#test0", function(){
    it ('check_types should be a function', function(){
        assert.typeOf(check_types, 'function')
    })
})
describe("#test1", function(){
    it ('check_types should be 2', function(){
        assert.equal(check_types([1,5,9,33,65,122,66,['banana']]),2)
    })
})
describe("#test2", function(){
    it ('check_types should be 2', function(){
        assert.equal(check_types(["100", 33, "Hello"]),2)
    })
})
describe("#test3", function(){
    it ('check_types should be 3', function(){
        assert.equal(check_types([{},"hello", 55,22,333, "66"]),3)
    })
})
