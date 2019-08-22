var assert                      = require('chai').assert,
find_expensive_items            = require('../02_javascript/Map/exercise2');

    


describe("#test1", function(){
    it ('find_expensive_items should be  a function', function(){
        assert.typeOf(find_expensive_items, 'function')
    })
})
describe("#test2", function(){
    it ('find_expensive_items should return [["total_expensive", 54],["total_affordable", 22]]', function(){
        assert.deepEqual(Array.from(find_expensive_items(new Map([['bread', 10],['shampoo', 20], ['banana', 34], ['cheese', 12]]), 15)),[["total_expensive", 54], ["total_affordable", 22]])
    })
})
describe("#test3", function(){
    it ('find_expensive_items should return [["total_expensive", 664],["total_affordable", 60] ]', function(){
        assert.deepEqual(Array.from(find_expensive_items(new Map([['salame', 210],['steak', 60], ['ps4', 334], ['cheese', 120]]), 100)), [["total_expensive", 664],["total_affordable", 60] ])
    })
})