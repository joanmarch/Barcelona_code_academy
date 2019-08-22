var assert       = require('chai').assert
var arr          = require('../02_javascript/block2/exercise2').arr
var takeAll      = require('../02_javascript/block2/exercise2').takeAll


describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('takeAll should be a function', function(){
        assert.typeOf(takeAll, 'function')
    })
})
describe("#test3", function(){
    it ('takeAll output should be an string', function(){
        assert.typeOf(takeAll(['milk','cheese','car','lime']), 'string')
    })
})
describe("#test4", function(){
    it ('arr2 should be ["lime", "car", "cheese", "milk"]', function(){
        assert.equal(takeAll(['milk','cheese','car','lime']),["lime", "car", "cheese", "milk"])
    })
})
describe("#test4", function(){
    it ('arr2 should be ["three", "two", "one", "zero"]', function(){
        assert.equal(takeAll(['zero','one','two','three']),["three", "two", "one", "zero"])
    })
})

