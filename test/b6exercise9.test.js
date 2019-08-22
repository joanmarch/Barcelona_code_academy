var assert                    = require('chai').assert
var sumAll                    = require('../02_javascript/block6/exercise9.js').sumAll

describe("#test1", function(){
    it ('sumAll should be a function', function(){
        assert.typeOf(sumAll, 'function')
    })
})
describe("#test2", function(){
    it ('sumAll should be  46', function(){
        assert.equal(sumAll({a: 20, b: 26, c: 0}), 46)
    })
})
describe("#test3", function(){
    it ('sumAll should be  -10', function(){
        assert.equal(sumAll({a: 20, b: 26, c: -56}), -10)
    })
})
describe("#test4", function(){
    it ('sumAll should b 0', function(){
        assert.equal(sumAll({}), 0)
    })
})
describe("#test4", function(){
    it ('sumAll should be 0', function(){
        assert.equal(sumAll(), 0)
    })
})