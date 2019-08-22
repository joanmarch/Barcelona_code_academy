var assert                    = require('chai').assert
var runOnRange                = require('../02_javascript/block6/exercise7.js').runOnRange

describe("#test1", function(){
    it ('runOnRange should be a function', function(){
        assert.typeOf(runOnRange, 'function')
    })
})
describe("#test2", function(){
    it ('runOnRange should be a []', function(){
        assert.equal(runOnRange({start: 20, end: 26, step: 0}),String([]))
    })
})
describe("#test3", function(){
    it ('runOnRange should be a [ 20, 23, 26 ]', function(){
        assert.equal(runOnRange({start: 20, end: 26, step: 3}),String([ 20, 23, 26 ]))
    })
})
describe("#test4", function(){
    it ('runOnRange should be a [ 26, 25, 24 ]', function(){
        assert.equal(runOnRange({start: 26, end: 24, step: -1}),String([ 26, 25, 24 ]))
    })
})
describe("#test5", function(){
    it ('runOnRange should be a [ 0, 4, 8 ]', function(){
        assert.equal(runOnRange({start:0, end: 10, step: 4}),String([ 0, 4, 8 ]))
    })
})
describe("#test6", function(){
    it ('runOnRange should be a []', function(){
        assert.equal(runOnRange({start:12, end: 10, step: 1}),String([]))
    })
})