var assert                      = require('chai').assert,
    recursive                   = require('../02_javascript/block8/exercise2.js').recursive;


describe("#test1", function(){
    it ('recursive should be  a function', function(){
        assert.typeOf(recursive, 'function')
    })
})
describe("#test2", function(){
    it ('recursive should be robert, 22,roger,44', function(){
       assert.deepEqual(recursive([{name:'robert', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:98},{name:'Ralph', age:67}]),[
        ['robert', 22],['robert', 12],['roger', 44],['peter', 98],['Ralph', 67] 
       ])
    })
})