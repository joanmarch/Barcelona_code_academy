var assert                      = require('chai').assert
var sort                        = require('../02_javascript/block6/exercise15.js').sort

describe("#test1", function(){
    it ('sort should be a function', function(){
        assert.typeOf(sort, 'function')
    })
})
describe("#test2", function(){
    it ('sort should be [1,1,3,4,4,20]', function(){
        var obj = sort({a: 1, b: 20, c: 3, d: 4, e: 1, f: 4})
        assert.equal(String(Object.values(obj)), String([1,1,3,4,4,20]))
    })
})
describe("#test3", function(){
    it ("sort should be a ['a','e','c','d','f','b']", function(){
        var obj = sort({a: 1, b: 20, c: 3, d: 4, e: 1, f: 4})
        assert.equal(String(Object.values(obj)), String([1,1,3,4,4,20]))
        assert.equal(String(Object.keys(obj)), String(['a','e','c','d','f','b']))
    })
})
describe("#test4", function(){
    it ("sort should be ['b','age','a','year']", function(){
        var obj = sort({age:22, year:1999, a:99, b:3})
        assert.equal(String(Object.values(obj)), String([3,22,99,1999]))
        assert.equal(String(Object.keys(obj)), String(['b','age','a','year']))
    })
})