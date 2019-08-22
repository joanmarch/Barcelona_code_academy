var assert                  = require('chai').assert
var firstLoopReverse        = require('../02_javascript/block3/exercise2').firstLoopReverse
var i                       = require('../02_javascript/block3/exercise2').i

describe("#test1", function(){
    it ('firstLoopReverse should be a function', function(){
        assert.typeOf(firstLoopReverse, 'function')
    })
})
describe("#test2", function(){
    it ('i should be a number', function(){
        assert.typeOf(i, 'number')
    })
})
describe("#test3", function(){
    it ('i should be 11', function(){
        assert.equal(i, 11)
    })
})
describe("#test4", function(){
    it ('i should be an 0', function(){
        assert.equal(firstLoopReverse(), 0)
    })
})