var assert                      = require('chai').assert
var is_an_even_number           = require('../02_javascript/block4/exercise2').is_an_even_number

describe("#test0", function(){
    it ('is_an_even_number should be a function', function(){
        assert.typeOf(is_an_even_number, 'function')
    })
})
describe("#test1", function(){
    it ('is_an_even_number should be 2', function(){
        assert.equal(is_an_even_number([1,5,9,33,65,122,66,['banana']]),2)
    })
})
describe("#test2", function(){
    it ('is_an_even_number should be 1', function(){
        assert.equal(is_an_even_number(["100", 33, "Hello"]),1)
    })
})
describe("#test3", function(){
    it ('is_an_even_number should be 2', function(){
        assert.equal(is_an_even_number([{},"hello", 55,22,333, "66"]),2)
    })
})
