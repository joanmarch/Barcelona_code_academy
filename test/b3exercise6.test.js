var assert                  = require('chai').assert
var sum                     = require('../02_javascript/block3/exercise6').sum

describe("#test1", function(){
    it ('sum should be a function', function(){
        assert.typeOf(sum, 'function')
    })
})
describe("#test2", function(){
    it ('i should be 30', function(){
        assert.equal(sum([10,10,10]), 30)
    })
})
describe("#test3", function(){
    it ('i should be 35', function(){
        assert.equal(sum([5,20,10]), 35)
    })
})
describe("#test4", function(){
    it ('i should be 65', function(){
        assert.equal(sum([35,20,10]), 65)
    })
})