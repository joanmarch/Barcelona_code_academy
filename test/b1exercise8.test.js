var assert       = require('chai').assert
var checkAge     = require('../02_javascript/block1/exercise8').checkAge
var age          = require('../02_javascript/block1/exercise8').age
var minAge       = require('../02_javascript/block1/exercise8').minAge


describe("#test1", function(){
    it ('age should be a number', function(){
        assert.typeOf(age, 'number')
    })
})
describe("#test1", function(){
    it ('minAge should be a number', function(){
        assert.typeOf(minAge, 'number')
    })
})
describe("#test2", function(){
    it ('checkAge should be a function', function(){
        assert.typeOf(checkAge, 'function')
    })
})
describe("#test3", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(21, 15),true)
    })
})
describe("#test4", function(){
    it ('checkAge should be false', function(){
        assert.equal(checkAge(12,15),false)
    })
})
describe("#test5", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(100, 60),true)
    })
})
describe("#test6", function(){
    it ('checkAge should be true', function(){
        assert.equal(checkAge(15,11),true)
    })
})