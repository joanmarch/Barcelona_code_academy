var assert          = require('chai').assert
var c               = require('../02_javascript/block1/exercise11').c
var f               = require('../02_javascript/block1/exercise11').f
var celsius         = require('../02_javascript/block1/exercise11').celsius
var fahrenheit      = require('../02_javascript/block1/exercise11').fahrenheit
var toCelsius       = require('../02_javascript/block1/exercise11').toCelsius
var toFahr          = require('../02_javascript/block1/exercise11').toFahr


describe("#test1", function(){
    it ('fahrenheit should be a number', function(){
        assert.typeOf(fahrenheit, 'number')
    })
})
describe("#test2", function(){
    it ('celsius should be a number', function(){
        assert.typeOf(celsius, 'number')
    })
})
// describe("#test3", function(){
//     it ('f should be a string', function(){
//         assert.typeOf(f, 'string')
//     })
// })
// describe("#test4", function(){
//     it ('c should be a string', function(){
//         assert.typeOf(c, 'string')
//     })
// })
describe("#test3", function(){
    it ('toCelsius should be a function', function(){
        assert.typeOf(toCelsius, 'function')
    })
})
describe("#test4", function(){
    it ('toFahr should be a function', function(){
        assert.typeOf(toFahr, 'function')
    })
})
describe("#test5", function(){
    it (`toCelsius should be 39`, function(){
        assert.equal(toCelsius(102),39)
    })
})
describe("#test6", function(){
    it (`toFahr should be 102`, function(){
        assert.equal(toFahr(39),102)
    })
})
describe("#test7", function(){
    it (`toCelsius should be 20`, function(){
        assert.equal(toCelsius(68),20)
    })
})
describe("#test8", function(){
    it (`toFahr should be 135`, function(){
        assert.equal(toFahr(57),135)
    })
})
