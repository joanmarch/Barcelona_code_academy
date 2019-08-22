var assert                      = require('chai').assert,
    BankAccount                 = require('../02_javascript/block7/exercise3.js').BankAccount;


describe("#test1", function(){
    it ('BankAccount should be a function', function(){
        assert.typeOf(BankAccount,  'function')
    })
})
describe("#test2", function(){
    it ('balance should be 50', function(){
        var account = new BankAccount(100)
        assert.equal(account.balance(), 100)
        account.deposit(350)
        account.withdraw(400)
        assert.equal(account.balance(), 50)
    })
})
describe("#test3", function(){
    it ('balance should be 130', function(){
        var account = new BankAccount(0)
        assert.equal(account.balance(), 0)
        account.deposit(150)
        account.withdraw(20)
        assert.equal(account.balance(), 130)
    })
})