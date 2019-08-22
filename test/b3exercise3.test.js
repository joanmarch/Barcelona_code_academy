var assert                  = require('chai').assert
var isEven                  = require('../02_javascript/block3/exercise3').isEven


describe("#test1", function(){
    it ('isEven should be a function', function(){
        assert.typeOf(isEven, 'function')
    })
})

describe("#test2", function(){
    it ('i should be an 3', function(){
        assert.equal(isEven([2,4,8,7]), 3)
    })
})
describe("#test3", function(){
    it ('i should be an 1', function(){
        assert.equal(isEven([1,9,66,"banana"]), 1)
    })
})
describe("#test4", function(){
    it ('i should be an 5', function(){
        assert.equal(isEven([1,9,66,"banana",44,22,12,66]), 5)
    })
})