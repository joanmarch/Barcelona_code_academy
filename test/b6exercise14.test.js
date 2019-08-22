var assert                      = require('chai').assert
var splice                      = require('../02_javascript/block6/exercise14.js').splice

describe("#test1", function(){
    it ('splice should be a function', function(){
        assert.typeOf(splice, 'function')
    })
})
describe("#test2", function(){
    it ('splice should be a {a:1,b:2}', function(){
        var obj = splice({a: 1, b: 2, c: 2}, 0,2)
        assert.equal(obj.b, 2)
        assert.equal(obj.a, 1)
    })
})
describe("#test2", function(){
    it ('splice should be a {c:2}', function(){
        var obj = splice({a: 1, b: 2, c: 2}, 2,2)
        assert.equal(obj.a, undefined)
        assert.equal(obj.b, undefined)
        assert.equal(obj.c, 2)
    })
})
describe("#test3", function(){
    it ('splice should be a {b:2, c:2}', function(){
        var obj = splice({a: 1, b: 2, c: 2}, 1,2)
        assert.equal(obj.a, undefined)
        assert.equal(obj.b, 2)
        assert.equal(obj.c, 2)
    })
})