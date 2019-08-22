var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise10').arr
var findPosition            = require('../02_javascript/block2/exercise10').findPosition

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('findPosition should be an function', function(){
        assert.typeOf(findPosition, 'function')
    })
})
describe("#test3", function(){
    it ("findPosition should be 1", function(){
        assert.equal(findPosition(arr, 'car'),  1)
    })
})
describe("#test4", function(){
    it ("findPosition should be 1", function(){
        assert.equal(findPosition(["one","two","three"], 'two'),  1)
    })
})
describe("#test5", function(){
    it ("findPosition should be 0", function(){
        assert.equal(findPosition([1,2,3], 1),  0)
    })
})