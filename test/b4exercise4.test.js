var assert                      = require('chai').assert
var checker                 = require('../02_javascript/block4/exercise4').checker

describe("#test0", function(){
    it ('checker should be a number', function(){
        assert.typeOf(checker, 'function')
    })
})
describe("#test1", function(){
    it ('checker should be 1 comma 2 question marks', function(){
        assert.equal(checker("hello, how are you today? I am not bad and you?"),
        "1 comma, 2 question marks")
    })
})
describe("#test2", function(){
    it ('checker should be 2 commas 2 question marks', function(){
        assert.equal(checker("hello, how are you today? I am not bad and you?, i feel great"),
        "2 commas, 2 question marks")
    })
})
describe("#test3", function(){
    it ('checker should be 0 comma 1 question mark', function(){
        assert.equal(checker("do you line banana?"),
        "0 comma, 1 question mark")
    })
})
