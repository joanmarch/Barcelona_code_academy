var assert                    = require('chai').assert
var stringChop                = require('../02_javascript/block5/exercise7.js').stringChop

describe("#test1", function(){
    it ('stringChop should be a function', function(){
        assert.typeOf(stringChop, 'function')
    })
})
describe("#test2", function(){
    it (`stringChop should be ['BarcelonaCodeSchool']`, function(){
        assert.equal(stringChop('BarcelonaCodeSchool'),String(['BarcelonaCodeSchool']))
    })
})
describe("#test3", function(){
    it (`stringChop should be ["Ba", "rc", "el", "on", "aC", "od", "eS", "ch", "oo", "l"]`, function(){
        assert.equal(stringChop('BarcelonaCodeSchool',2), String(["Ba", "rc", "el", "on", "aC", "od", "eS", "ch", "oo", "l"]))
    })
})
describe("#test4", function(){
    it (`stringChop should be ["Bar", "cel", "ona", "Cod", "eSc", "hoo", "l"]`, function(){
        assert.equal(stringChop('BarcelonaCodeSchool',3), String(["Bar", "cel", "ona", "Cod", "eSc", "hoo", "l"]))
    })
})
describe("#test5", function(){
    it (`stringChop should be ['BarcelonaCodeSchool']`, function(){
        assert.equal(stringChop('BarcelonaCodeSchool',0), String(String(['BarcelonaCodeSchool'])))
    })
})