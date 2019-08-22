var assert                      = require('chai').assert,
objToMap                        = require('../02_javascript/Map/exercise1');

    


describe("#test1", function(){
    it ('objToMap should be  a function', function(){
        assert.typeOf(objToMap, 'function')
    })
})
describe("#test2", function(){
    it ('objToMap size should be  1, it should be [["sibilings", "3"]]', function(){
        assert.equal(objToMap({name:'Mike', age:22, height:'170cm', sibilings:'3'}, {name:undefined, height:undefined, sibilings:undefined}).size, 1)
        assert.deepEqual(Array.from(objToMap({name:'Mike', age:22, height:'170cm', sibilings:'3'}, {name:undefined, height:undefined, sibilings:undefined})),[["sibilings", "3"]])
    })
})
describe("#test3", function(){
    it ('objToMap should return [ ["age", 22],["sibilings", "3"]]', function(){
        assert.deepEqual(Array.from(objToMap({name:'Mike', age:22, height:'170cm', sibilings:'3'}, {name:undefined, age:undefined, sibilings:undefined})), [["age", 22],["sibilings", "3"]])
    })
})