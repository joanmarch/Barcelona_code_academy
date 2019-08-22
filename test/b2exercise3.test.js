var assert       = require('chai').assert
var arr          = require('../02_javascript/block2/exercise3').arr
var arr2         = require('../02_javascript/block2/exercise3').arr2
var pos          = require('../02_javascript/block2/exercise3').pos
var swap         = require('../02_javascript/block2/exercise3').swap

describe("#test0", function(){
    it ('pos should be a number', function(){
        assert.typeOf(pos, 'number')
    })
})
describe("#test1", function(){
    it ('arr should be an array', function(){
        assert.typeOf(arr, 'array')
    })
})
describe("#test2", function(){
    it ('arr2 should be an array', function(){
        assert.typeOf(arr2, 'array')
    })
})
describe("#test3", function(){
    it ('swap should be a function', function(){
        assert.typeOf(swap, 'function')
    })
})
describe("#test4", function(){
    it ('swap(arr,arr2,2) should be "bread,shampoo,shower gel,butter"', function(){
        assert.equal(swap(['bread', 'butter'], ['shower gel','shampoo'], 1),"bread,shampoo,shower gel,butter")
    })
})
describe("#test5", function(){
    it ('swap(arr,arr2,2) should be "one,two,3,1,2,three"', function(){
        assert.equal(swap(['one', 'two', 'three'], [1,2,3], 2),"one,two,3,1,2,three")
    })
})
describe("#test6", function(){
    it ('swap(arr,arr2,2) should be "[],{},23,3,23,()=>{}"', function(){
        assert.equal(swap(['[]', '{}', '()=>{}'], [3,23,23], 2),"[],{},23,3,23,()=>{}")
    })
})