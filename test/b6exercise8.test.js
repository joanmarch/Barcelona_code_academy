var assert                    = require('chai').assert
var last                      = require('../02_javascript/block6/exercise8.js').last

describe("#test1", function(){
    it ('last should be a function', function(){
        assert.typeOf(last, 'function')
    })
})
describe("#test2", function(){
    it ('last should be a {c:0}', function(){
        assert.equal(last({a: 20, b: 26, c: 0}).c , 0)
    })
})
describe("#test3", function(){
    it ('last should have a  length of  1, key name and a value of Gennaro ', function(){
        assert.equal(last({a: 20, b: 26, c: 0, name:"Gennaro"}).name , "Gennaro")
        assert.equal(Object.keys(last({a: 20, b: 26, c: 0, name:"Gennaro"})).length , 1)
        assert.equal(Object.keys(last({a: 20, b: 26, c: 0, name:"Gennaro"}))[0] , "name")
    })
})