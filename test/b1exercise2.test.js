var assert       = require('chai').assert
var a            = require('../02_javascript/block1/exercise2').a
var b            = require('../02_javascript/block1/exercise2').b
var multy        = require('../02_javascript/block1/exercise2').multy

describe("#test1", function(){
    it ('a should be a number', function(){
        assert.typeOf(a, 'number')
    })
})
describe("#test2", function(){
    it ('b should be b number', function(){
        assert.typeOf(b, 'number')
    })
})
describe("#test4", function(){
    it ('multy should be 50', function(){
        assert.equal(multy(10,5),50)
    })
})
describe("#test5", function(){
    it ('multy should be 400', function(){
        assert.equal(multy(20,20),400)
    })
})