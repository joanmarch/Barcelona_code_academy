var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise11').arr
var isThere                 = require('../02_javascript/block2/exercise11').isThere

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('isThere should be an function', function(){
        assert.typeOf(isThere, 'function')
    })
})
describe("#test3", function(){
    it ("isThere should be true", function(){
        assert.equal(isThere(['green','red','black','blue','brown','yellow','purple'], 'green'),  true)
    })
})
describe("#test4", function(){
    it ("isThere should be false", function(){
        assert.equal(isThere(arr, 'two'),  false)
    })
})
describe("#test5", function(){
    it ("isThere should be false", function(){
        assert.equal(isThere(arr,'banana'), false)
    })
})
describe("#test6", function(){
    it ("isThere should be true", function(){
        assert.equal(isThere(arr,'red'), true)
    })
})
describe("#test7", function(){
    it ("isThere should be true", function(){
        assert.equal(isThere(arr,'yellow'), true)
    })
})
