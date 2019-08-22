var assert                      = require('chai').assert,
    addCurrency                 = require('../02_javascript/block7/exercise2.js').addCurrency,
    converter                   = require('../02_javascript/block7/exercise2.js').converter,
    findcurrency                = require('../02_javascript/block7/exercise2.js').findcurrency,
    tellConversion              = require('../02_javascript/block7/exercise2.js').tellConversion;
var crypt                       = [];

describe("#test1", function(){
    it ('You should have declared all required functions', function(){
        assert.typeOf(addCurrency,    'function')
        assert.typeOf(converter,      'function')
        assert.typeOf(findcurrency,   'function')
        assert.typeOf(tellConversion, 'function')
    })
})
describe("#test2", function(){
    it ('should return "New coin bitcoin added to Database"', function(){
        assert.equal(crypt[0], undefined)
        assert.equal(addCurrency({coin:'bitcoin', rate:8000}, 2, crypt),"New coin Bitcoin added to Database")
        assert.equal(crypt[0].coin, 'bitcoin')
    })
})
describe("#test3", function(){
    it ('should return You will receive  1600 usd for your 2 bitcoins"', function(){
        assert.equal(crypt[1], undefined)
        assert.equal(addCurrency({coin:'bitcoin', rate:8000}, 2, crypt),"You will receive 16000 usd for your 2 bitcoins")
        assert.equal(crypt[0].coin, 'bitcoin')
    })
})
describe("#test4", function(){
    it ('should return New coin Eth added to Database', function(){
        assert.equal(crypt[1], undefined)
        assert.equal(addCurrency({coin:'eth', rate:800}, 2, crypt),"New coin Eth added to Database")
        assert.equal(crypt[0].coin, 'bitcoin')
    })
})
describe("#test5", function(){
    it ('should return You will receive  1600 usd for your 2 bitcoins"', function(){
        assert.equal(crypt[1].rate, 800)
        assert.equal(addCurrency({coin:'eth', rate:800}, 2, crypt),"You will receive 1600 usd for your 2 eths")
        assert.equal(crypt[0].coin, 'bitcoin')
    })
})
describe("#test5", function(){
    it ('should return "New coin Omg added to Database"', function(){
        assert.equal(crypt[1].rate, 800)
        assert.equal(addCurrency({coin:'omg', rate:16}, 100, crypt),"New coin Omg added to Database")
        assert.equal(crypt[0].coin, 'bitcoin')
    })
})