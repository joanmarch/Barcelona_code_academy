var assert                   = require('chai').assert
var reverser         = require('../02_javascript/block3/exercise12').reverser

describe("#test1", function(){
    it ('reverser should be a function', function(){
        assert.typeOf(reverser, 'function')
    })
})
describe("#test2", function(){
    it ('reverser should be I love deep fried potatoes with mayo and with a nice pint of cold beer', function(){
        assert.equal(reverser("reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I"), "I love deep fried potatoes with mayo and with a nice pint of cold beer")
    })
})
describe("#test3", function(){
    it ('reverser should be how are you today?', function(){
        assert.equal(reverser("?yadot uoy era woh"), "how are you today?")
    })
})
describe("#test4", function(){
    it ('reverser should be Hey there do you know what the time is now?', function(){
        assert.equal(reverser("?won si emit eht tahw wonk uoy od ereht yeH"), "Hey there do you know what the time is now?")
    })
})


