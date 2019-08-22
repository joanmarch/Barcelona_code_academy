var assert                    = require('chai').assert
var obj                       = require('../02_javascript/block6/exercise1.js').obj

describe("#test1", function(){
    it ('obj should be a object', function(){
        assert.typeOf(obj, 'object')
    })
})
describe("#test2", function(){
    it (`obj should be antonello `, function(){
        assert.equal(obj['name'], "antonello")
    })
})
describe("#test3", function(){
    it (`obj should be sanna `, function(){
        assert.equal(obj['lastname'], "sanna")
    })
})