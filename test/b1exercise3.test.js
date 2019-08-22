var assert               = require('chai').assert
var date_of_birth        = require('../02_javascript/block1/exercise3').date_of_birth
var future_year          = require('../02_javascript/block1/exercise3').future_year
var ageCalc              = require('../02_javascript/block1/exercise3').ageCalc


describe("#test1", function(){
    it ('date_of_birth should be a number', function(){
        assert.typeOf(date_of_birth, 'number')
    })
})
describe("#test2", function(){
    it ('future_year should be a number', function(){
        assert.typeOf(future_year, 'number')
    })
})
describe("#test4", function(){
    it ('ageCalc should be 36', function(){
        assert.equal(ageCalc(1982,2018),36)
    })
})
describe("#test5", function(){
    it ('ageCalc should be 18', function(){
        assert.equal(ageCalc(2000,2018),18)
    })
})