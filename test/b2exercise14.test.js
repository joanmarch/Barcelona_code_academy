var assert                  = require('chai').assert
var isArrayFunc             = require('../02_javascript/block2/exercise14').isArrayFunc



describe("#test1", function(){
    it ('isArrayFunc should be an function', function(){
        assert.typeOf(isArrayFunc, 'function')
    })
})
describe("#test2", function(){
    it ("isArrayFunc should be false", function(){
        assert.equal(isArrayFunc({name:'antonello'}), false)
    })
})
describe("#test3", function(){
    it ("isArrayFunc should be true", function(){
        assert.equal(isArrayFunc(['name', 'antonello']), true)
    })
})
describe("#test4", function(){
    it ("isArrayFunc should be true", function(){
        assert.equal(isArrayFunc([[],[],{},"antonello",3,function(){}]), true)
    })
})
