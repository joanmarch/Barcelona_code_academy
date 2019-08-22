var assert                  = require('chai').assert
var firstLoop               = require('../02_javascript/block3/exercise1').firstLoop
var i                       = require('../02_javascript/block3/exercise1').i

describe("#test1", function(){
    it ('firstLoop should be a function', function(){
        assert.typeOf(firstLoop, 'function')
    })
})
describe("#test1", function(){
    it ('i should be a number', function(){
        assert.typeOf(i, 'number')
    })
})
describe("#test1", function(){
    it ('i should be 1', function(){
        assert.equal(i, 1)
    })
})
describe("#test1", function(){
    it ('i should be an 11', function(){
        assert.equal(firstLoop(), 11)
    })
})