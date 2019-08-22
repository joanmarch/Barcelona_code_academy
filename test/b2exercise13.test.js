var assert                  = require('chai').assert
var characterRemover        = require('../02_javascript/block2/exercise13').characterRemover
var str                     = require('../02_javascript/block2/exercise13').str


describe("#test1", function(){
    it ('str should be an string', function(){
        assert.typeOf(str, 'string')
    })
})
describe("#test2", function(){
    it ('characterRemover should be an function', function(){
        assert.typeOf(characterRemover, 'function')
    })
})
describe("#test3", function(){
    it ("characterRemover should be I Really Like Pizza", function(){
        assert.equal(characterRemover(str, ","), "I Really Like Pizza")
    })
})
describe("#test4", function(){
    it ("characterRemover should be I really like tomatoes in my pizza", function(){
        assert.equal(characterRemover("I_really_like_tomatoes_in_my_pizza", "_"), "I really like tomatoes in my pizza")
    })
})
describe("#test5", function(){
    it ("characterRemover should be the house", function(){
        assert.equal(characterRemover("the_*!*_house", "_*!*_"), "the house")
    })
})