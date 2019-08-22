var assert                    = require('chai').assert
var tellAge                   = require('../02_javascript/block5/exercise4').tellAge
var tellAgeTest             = require('../02_javascript/block5/testExercises/tellAgeTest').tellAgeTest

describe("#test0", function(){
    it ('tellAge should be a function', function(){
        assert.typeOf(tellAge, 'function')
    })
})
describe("#test1", function(){
    it (`tellAge should be ${tellAgeTest(8,2,1982)}`, function(){
        assert.equal(tellAge(8,2,1982),
        tellAgeTest(8,2,1982))
    })
})
describe("#test2", function(){
    it (`tellAge should be ${tellAgeTest(3,11,2016)}`, function(){
        assert.equal(tellAge(3,11,2016),
        tellAgeTest(3,11,2016))
    })
})
describe("#test3", function(){
    it (`tellAge should be  ${tellAgeTest(3,11,2017)}`, function(){
        assert.equal(tellAge(3,11,2017),
        tellAgeTest(3,11,2017))
    })
})
describe("#test4", function(){
    it (`tellAge should be  ${tellAgeTest(4,10,2018)}`, function(){
        assert.equal(tellAge(4,10,2018),
        tellAgeTest(4,10,2018))
    })
})
describe("#test5", function(){
    it (`tellAge should be  ${tellAgeTest(4,9,2018)}`, function(){
        assert.equal(tellAge(4,9,2018),
        tellAgeTest(4,9,2018))
    })
})


