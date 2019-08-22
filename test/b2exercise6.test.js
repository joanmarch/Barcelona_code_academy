var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise6').arr
var removeAll               = require('../02_javascript/block2/exercise6').removeAll

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('removeAll should be an function', function(){
        assert.typeOf(removeAll, 'function')
    })
})

describe("#test3", function(){
    it ('removeAll should be []', function(){
        assert.equal(removeAll(arr),  [])
    })
})


