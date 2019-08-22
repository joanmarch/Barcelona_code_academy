var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise7').arr
var pusher                  = require('../02_javascript/block2/exercise7').pusher

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('pusher should be an function', function(){
        assert.typeOf(pusher, 'function')
    })
})
describe("#test3", function(){
    it ('pusher should be ["Antonello", "George","Ting"]', function(){
        assert.equal(pusher(["Antonello", "George","Ting"]),  ["Antonello", "George","Ting"])
    })
})
describe("#test4", function(){
    it ('pusher should be ["one", "two","three"]', function(){
        assert.equal(pusher(["one", "two","three"]),  ["one", "two","three"])
    })
})
