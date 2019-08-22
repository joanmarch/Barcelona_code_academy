var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise5').arr
var removeFirstAndLast      = require('../02_javascript/block2/exercise5').removeFirstAndLast

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('removeFirstAndLast should be an function', function(){
        assert.typeOf(removeFirstAndLast, 'function')
    })
})

describe("#test3", function(){
    it ('removeFirstAndLast should be ["soap", "banana", "tv"]', function(){
        assert.equal(removeFirstAndLast(arr),  ["soap", "banana", "tv"])
    })
})
describe("#test4", function(){
    it ('removeFirstAndLast should be ["banana"]', function(){
        assert.equal(removeFirstAndLast(arr),  ["banana"])
    })
})
describe("#test5", function(){
    it ('removeFirstAndLast should be []', function(){
        assert.equal(removeFirstAndLast(arr),  [])
    })
})

