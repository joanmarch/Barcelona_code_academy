var assert                  = require('chai').assert
var twoArrays                = require('../02_javascript/block3/exercise9').twoArrays

describe("#test1", function(){
    it ('twoArrays should be a function', function(){
        assert.typeOf(twoArrays, 'function')
    })
})
describe("#test2", function(){
    it ('count should be 2', function(){
        assert.equal(twoArrays([10,10,10], [10,10,5]), 2)
    })
})
describe("#test3", function(){
    it ('count should be 2', function(){
        assert.equal(twoArrays([1,5,80], [10,5,80]), 2)
    })
})
describe("#test2", function(){
    it ('count should be 0', function(){
        assert.equal(twoArrays([3,5], [1, 4,5]), 0)
    })
})
describe("#test2", function(){
    it ('count should be 0', function(){
        assert.equal(twoArrays([3,5], ['3','5']), 0)
    })
})
