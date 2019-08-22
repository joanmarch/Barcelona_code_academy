var assert                      = require('chai').assert,
    howManyGifts                = require('../02_javascript/Map/exercise4');

    


describe("#test1", function(){
    it ('howManyGifts should be  a function', function(){
        assert.typeOf(howManyGifts, 'function')
    })
})
describe("#test2", function(){
    it ('howManyGifts should return[["xbox", 200], ["tshirt", 90], ["total", 290]]', function(){
        assert.deepEqual([...howManyGifts(300, new Map([['ps4', 300],['game', 50],['razor', 190],['speaker', 58]]))], [['ps4', 300], ['total', 300]])
    })
})
describe("#test3", function(){
    it ('howManyGifts should return [["ps4", 300], ["total", 300]]', function(){
        assert.deepEqual([...howManyGifts(300, new Map([['xbox', 200],['watch', 150],['tshirt', 90],['earphnes', 48]]))], [["xbox", 200], ["tshirt", 90], ["total", 290]])
    })
})