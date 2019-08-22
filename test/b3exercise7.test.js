var assert                  = require('chai').assert
var multy                   = require('../02_javascript/block3/exercise7').multy

describe("#test1", function(){
    it ('multy should be a function', function(){
        assert.typeOf(multy, 'function')
    })
})
describe("#test2", function(){
    it ('i should be 1000', function(){
        assert.equal(multy([10,10,10]), 1000)
    })
})
describe("#test3", function(){
    it ('i should be 40', function(){
        assert.equal(multy([5, 4,2]), 40)
    })
})
describe("#test4", function(){
    it ('i should be 120', function(){
        assert.equal(multy([15, 4,2]), 120)
    })
})
