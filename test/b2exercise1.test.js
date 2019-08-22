var assert       = require('chai').assert
var arr          = require('../02_javascript/block2/exercise1').arr
var assigner     = require('../02_javascript/block2/exercise1').assigner
var index        = require('../02_javascript/block2/exercise1').index

describe("#test0", function(){
    it ('index should be a number', function(){
        assert.typeOf(index, 'number')
    })
})
describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('assigner should be a function', function(){
        assert.typeOf(assigner, 'function')
    })
})
describe("#test3", function(){
    it ('arr2 should be car', function(){
        assert.equal(assigner(['milk','cheese','car','lime'],2),"car")
    })
})
describe("#test4", function(){
    it ('arr2 should be cheese', function(){
        assert.equal(assigner(['milk','cheese','car','lime'],1),"cheese")
    })
})
describe("#test5", function(){
    it ('arr2 should be one', function(){
        assert.equal(assigner(['one','two','three','four'], 0),"one")
    })
})
