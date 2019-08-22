var assert                     = require('chai').assert
var checkAge                   = require('../02_javascript/block5/exercise5').checkAge
var checkAgeTest               = require('../02_javascript/block5/testExercises/checkAgeTest').checkAgeTest

describe("#test0", function(){
    it ('checkAge should be a function', function(){
        assert.typeOf(checkAge, 'function')
    })
})
describe("#test1", function(){
    it ("checheckAge should be ${checkAgeTest(8,2)}", function(){
        assert.equal(checkAge(8,2),
        checkAgeTest(8,2))
    })
})
describe("#test2", function(){
    it ("checkAge should be ${ checkAgeTest(3,11)}", function(){
        assert.equal(checkAge(3,11),
        checkAgeTest(3,11))
    })
})
describe("#test3", function(){
    it ("checkAge should be ${checkAgeTest(3,11)}", function(){
        assert.equal(checkAge(3,11),
        checkAgeTest(3,11))
    })
})
describe("#test4", function(){
    it ("checkAge should be ${checkAgeTest(4,10)}", function(){
        assert.equal(checkAge(4,10),
        checkAgeTest(4,10))
    })
})
describe("#test5", function(){
    it ("checkAge should be ${checkAgeTest(4,9)}", function(){
        assert.equal(checkAge(4,9),
        checkAgeTest(4,9))
    })
})
describe("#test6", function(){
    it ("ccheckAge should be ${checkAgeTest(13,29)}", function(){
        assert.equal(checkAge(13, 29),
        checkAgeTest(13,29))
    })
})
describe("#test6", function(){
    it ("checkAge should be ${checkAgeTest(12,29)}", function(){
        assert.equal(checkAge(12, 29),
        checkAgeTest(12,29))
    })
})


