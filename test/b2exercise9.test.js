var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise9').arr
var concatenator            = require('../02_javascript/block2/exercise9').concatenator

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('concatenator should be an function', function(){
        assert.typeOf(concatenator, 'function')
    })
})
describe("#test3", function(){
    it ("concatenator should be ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']", function(){
        assert.equal(concatenator(arr),   ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office'])
    })
})
describe("#test4", function(){
    it ('concatenator should be ["one","two","three"]', function(){
        assert.equal(concatenator(["one","two","three"]),   ["one","two","three"])
    })
})

