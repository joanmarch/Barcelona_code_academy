var assert                   = require('chai').assert
var lowerCaseLetters                = require('../02_javascript/block3/exercise11').lowerCaseLetters

describe("#test1", function(){
    it ('lowerCaseLetters should be a function', function(){
        assert.typeOf(lowerCaseLetters, 'function')
    })
})
describe("#test2", function(){
    it ('lowerCaseLetters should be antonello likes playing games', function(){
        assert.equal(lowerCaseLetters("An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345"), "antonello likes playing games")
    })
})
describe("#test3", function(){
    it ('lowerCaseLetters should be george likes reading books', function(){
        assert.equal(lowerCaseLetters("G4e5o6r7g8e L432ike4543s Re453ad543ing Bo4535ok4355s"), "george likes reading books")
    })
})

