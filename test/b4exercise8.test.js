var assert                  = require('chai').assert
var uniqueElements           = require('../02_javascript/block4/exercise8').uniqueElements

describe("#test0", function(){
    it ('uniqueElements should be a function', function(){
        assert.typeOf(uniqueElements, 'function')
    })
})
describe("#test1", function(){
    it ("uniqueElements should be old array mike,jason,peter,robert,mike,jason,jenny,jane new array mike,jason,peter,robert,jenny,jane", function(){
        assert.equal(uniqueElements(['mike','jason','peter','robert','mike','jason','jenny','jane']),
        "old array mike,jason,peter,robert,mike,jason,jenny,jane, new array mike,jason,peter,robert,jenny,jane")
    })
})
describe("#test2", function(){
    it ("uniqueElements should be old array mike,jason,peter,robert,mike,jason,jenny,jane new array mike,jason,peter,robert,jenny,jane", function(){
        assert.equal(uniqueElements([3,5,5,5,56]),
        "old array 3,5,5,5,56, new array 3,5,56")
    })
})
describe("#test3", function(){
    it ("uniqueElements should be old array a,b,b,44,55,4,4, new array a,b,44,55,4", function(){
        assert.equal(uniqueElements(["a","b","b",44,55,4,4]),
        "old array a,b,b,44,55,4,4, new array a,b,44,55,4")
    })
})