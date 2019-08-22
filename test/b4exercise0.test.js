var assert       = require('chai').assert
var isTrue       = require('../02_javascript/block4/exercise0').isTrue

describe("#test0", function(){
    it ('isTrue should be a function', function(){
        assert.typeOf(isTrue, 'function')
    })
})
describe("#test1", function(){
    it ('isTrue should be true', function(){
        assert.equal(isTrue("I exist!"),true)
    })
})
describe("#test2", function(){
    it ('isTrue should be false', function(){
        assert.equal(isTrue(""),false)
    })
})
describe("#test3", function(){
    it ('isTrue should be false', function(){
        assert.equal(isTrue(false),false)
    })
})
describe("#test4", function(){
    it ('isTrue should be false', function(){
        assert.equal(isTrue(null),false)
    })
})
describe("#test5", function(){
    it ('isTrue should be false', function(){
        assert.equal(isTrue(undefined),false)
    })
})
describe("#test6", function(){
    it ('isTrue should be false', function(){
        assert.equal(isTrue(0),false)
    })
})
describe("#test7", function(){
    it ('isTrue should be true', function(){
        assert.equal(isTrue(10),true)
    })
})
