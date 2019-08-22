var assert                      = require('chai').assert,
    mostTimes                   = require('../02_javascript/Map/exercise3');

    


describe("#test1", function(){
    it ('mostTimes should be  a function', function(){
        assert.typeOf(mostTimes, 'function')
    })
})
describe("#test2", function(){
    it ('mostTimes should return [[2, 1],[90,2],[4,1],[8,1],[23,2],[21,1]]', function(){
        assert.deepEqual([...mostTimes([2, 90,90, 4,8,23,21,23])], [[2, 1],[90,2],[4,1],[8,1],[23,2],[21,1]])
    })
})