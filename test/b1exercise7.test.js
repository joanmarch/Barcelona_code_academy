var assert = require('chai').assert
var isEven = require('../02_javascript/block1/exercise7').isEven

describe("#test2", function() {
    it('isEven should be a function', function() {
        assert.typeOf(isEven, 'function')
    })
})
describe("#test3", function() {
    it('isEven 3 should be false', function() {
        assert.equal(isEven(3), false)
    })
})
describe("#test4", function() {
    it('isEven 10 should be true', function() {
        assert.equal(isEven(10), true)
    })
})