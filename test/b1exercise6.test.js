var assert = require('chai').assert
var compare = require('../02_javascript/block1/exercise6').compare


describe("#test2", function() {
    it('a should be a function', function() {
        assert.typeOf(compare, 'function')
    })
})
describe("#test3", function() {
    it('compare should be true', function() {
        assert.equal(compare(10, 10), true)
    })
})