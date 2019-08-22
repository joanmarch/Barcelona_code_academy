var assert                  = require('chai').assert
var timesTwo                = require('../02_javascript/block3/exercise8').timesTwo

describe("#test1", function(){
    it ('timesTwo should be a function', function(){
        assert.typeOf(timesTwo, 'function')
    })
})
describe("#test2", function(){
    it ('i should be [20,20,20]', function(){
        assert.equal(timesTwo([10,10,10]), [20,20,20])
    })
})
describe("#test3", function(){
    it ('i should be [10,8,4]', function(){
        assert.equal(timesTwo([5, 4,2]), [10,8,4])
    })
})
describe("#test4", function(){
    it ('i should be  [30,8,4]', function(){
        assert.equal(timesTwo([15, 4,2]), [30,8,4])
    })
})