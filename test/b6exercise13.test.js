var assert                    = require('chai').assert
var bankAccount               = require('../02_javascript/block6/exercise13.js').bankAccount

describe("#test1", function(){
    it ('bankAccount should be a function', function(){
        assert.typeOf(bankAccount.balance, 'function')
    })
})
describe("#test2", function(){
    it ('bankAccount.deposit should be a function', function(){
        assert.typeOf(bankAccount.deposit, 'function')
    })
})
describe("#test3", function(){
    it ('bankAccount.total should be a number', function(){
        assert.typeOf(bankAccount.total, 'number')
    })
})
describe("#test4", function(){
    it ('bankAccount.withdraw should be a function', function(){
        assert.typeOf(bankAccount.withdraw, 'function')
    })
})
describe("#test5", function(){
    it ('should be 0', function(){
        assert.equal(bankAccount.total, 0)
    })
})
describe("#test6", function(){
    it ('should be 100', function(){
       bankAccount.deposit(100)
       assert.equal(bankAccount.total,100)
    })
})
describe("#test7", function(){
    it ('should be 90', function(){
       bankAccount.withdraw(10)
       assert.equal(bankAccount.balance(),90)
    })
})