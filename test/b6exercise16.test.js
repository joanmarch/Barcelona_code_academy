var assert                      = require('chai').assert
var sort                        = require('../02_javascript/block6/exercise16.js').sort

describe("#test1", function(){
    it ('sort should be a function', function(){
        assert.typeOf(sort, 'function')
    })
})
describe("#test2", function(){
    it ("sort should be ['a','c','b']", function(){
        var obj = sort({a: 1, b: 20, c: 3} ,'values', 'ascending')
        assert.equal(String(Object.values(obj)), String([1,3,20]))
        assert.equal(String(Object.keys(obj)), String(['a','c','b']))
    })
})
describe("#test3", function(){
    it ("sort should be ['b','c','a']", function(){
        var obj = sort({a: 1, b: 20, c: 3} ,'values', 'descending')
        assert.equal(String(Object.values(obj)), String([20, 3,1]))
        assert.equal(String(Object.keys(obj)), String(['b','c','a']))
    })
})
describe("#test4", function(){
    it ('sort should be {age:22, beers:182, cars:5}', function(){
        var obj = sort({age:22,  cars:5, beers:182,} ,'keys', 'ascending')
        assert.equal(String(Object.values(obj)), String([22,182,5]))
        assert.equal(String(Object.keys(obj)), String(['age,beers,cars']))
    })
})
describe("#test5", function(){
    it ('sort should be { z:10, d:3, c:55, b:3, a:11 } ', function(){
        var obj = sort({d:3, z:10,a:11,c:55,b:3} ,'keys', 'descending')
        assert.equal(String(Object.values(obj)), String([10,3,55,3,11]))
        assert.equal(String(Object.keys(obj)), String(['z','d','c','b','a']))
    })
})