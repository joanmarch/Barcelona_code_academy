var assert               = require('chai').assert
var age                  = require('../02_javascript/block1/exercise4').age
var end_age              = require('../02_javascript/block1/exercise4').end_age
var teas_day             = require('../02_javascript/block1/exercise4').teas_day
var howManyTeas          = require('../02_javascript/block1/exercise4').howManyTeas


describe("#test1", function(){
    it ('age should be a number', function(){
        assert.typeOf(age, 'number')
    })
})
describe("#test2", function(){
    it ('end_age should be a number', function(){
        assert.typeOf(end_age, 'number')
    })
})
describe("#test4", function(){
    it ('howManyTeas should be 25550', function(){
        assert.equal(howManyTeas(35,70, 2),25550)
    })
})
describe("#test5", function(){
    it ('howManyTeas should be 730', function(){
        assert.equal(howManyTeas(35,36, 2),730)
    })
})
describe("#test5", function(){
    it ('howManyTeas should be 18250', function(){
        assert.equal(howManyTeas(35,45, 5),18250)
    })
})