var assert                  = require('chai').assert
var arr                     = require('../02_javascript/block2/exercise8').arr
var take_and_push           = require('../02_javascript/block2/exercise8').take_and_push

describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('take_and_push should be an function', function(){
        assert.typeOf(take_and_push, 'function')
    })
})
describe("#test3", function(){
    it ('take_and_push should be ["WestWorld", "Games of Thrones"]', function(){
        assert.equal(take_and_push(arr,1,3),   ["WestWorld", "Games of Thrones"])
    })
})
describe("#test3", function(){
    it ('take_and_push should be ["WestWorld", "Psych"]', function(){
        assert.equal(take_and_push(arr,1,2),   ["WestWorld", "Psych"])
    })
})
describe("#test3", function(){
    it ('take_and_push should be ["Spartacus", "Psych"]', function(){
        assert.equal(take_and_push(arr,5,2),   ["Spartacus", "Psych"])
    })
})



