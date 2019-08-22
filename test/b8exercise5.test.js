var assert                      = require('chai').assert,
    sorter                      = require('../02_javascript/block8/exercise5.js').sorter;


describe("#test1", function(){
    it ('sorter should be  a function', function(){
        assert.typeOf(sorter, 'function')
    })
})
describe("#test2", function(){
    it ('sorter should return [3, 9, 10, 12, 321, 11111]', function(){
        assert.equal(sorter([11111,9,10,12,3,321]),String([3, 9, 10, 12, 321, 11111]))
    })
})
describe("#test3", function(){
    it ('sorter should return [3, 9, 10, 12, 321, 11111]', function(){
        assert.equal(sorter([11111,9,10,12,3,321],'ascending'),String([3, 9, 10, 12, 321, 11111]))
    })
})
describe("#test4", function(){
    it ('sorter should return wrong order provided whatever please provide us with ascending or descending order instructions', function(){
        assert.equal(sorter([11111,9,10,12,3,321],'descending'),String([11111, 321, 12, 10, 9, 3]))
        assert.equal(sorter([11111,9,10,12,3,321],'whatever'),'wrong order provided whatever please provide us with ascending or descending order instructions')
    })
})
