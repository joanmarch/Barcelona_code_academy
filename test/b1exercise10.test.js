var assert          = require('chai').assert
var now             = require('../02_javascript/block1/exercise10').now
var howManyDays     = require('../02_javascript/block1/exercise10').howManyDays
var dob             = require('../02_javascript/block1/exercise10').dob


describe("#test1", function(){
    it ('now should be a number', function(){
        assert.typeOf(now, 'number')
    })
})
describe("#test1", function(){
    it ('dob should be a number', function(){
        assert.typeOf(dob, 'number')
    })
})
describe("#test2", function(){
    it ('howManyDays should be a function', function(){
        assert.typeOf(howManyDays, 'function')
    })
})
describe("#test3", function(){
    it (`howManyDays should be you have lived for 730 days already!`, function(){
        assert.equal(howManyDays(2016, 2018),`you have lived for 730 days already!`)
    })
})
describe("#test4", function(){
    it (`howManyDays should be you have lived for 13140 days already!`, function(){
        assert.equal(howManyDays(1982, 2018),`you have lived for 13140 days already!`)
    })
})