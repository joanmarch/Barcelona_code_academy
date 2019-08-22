var assert                   = require('chai').assert
var shortener                = require('../02_javascript/block3/exercise13').shortener

describe("#test1", function(){
    it ('shortener should be a function', function(){
        assert.typeOf(shortener, 'function')
    })
})
describe("#test2", function(){
    it ('shortener should be Ada L. ', function(){
        assert.equal(shortener("Ada lovelace"), "Ada L.")
    })
})
describe("#test3", function(){
    it ('shortener should be Antonello S. ', function(){
        assert.equal(shortener("Antonello sanna"), "Antonello S.")
    })
})

describe("#test4", function(){
    it ('shortener should be Peter A. ', function(){
        assert.equal(shortener("peter allen"), "Peter A.")
    })
})
describe("#test4", function(){
    it ('shortener should be Ottaviano M. ', function(){
        assert.equal(shortener("ottaviano Marzullo"), "Ottaviano M.")
    })
})


