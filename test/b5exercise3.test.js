var assert                  = require('chai').assert
var filter                    = require('../02_javascript/block5/exercise3').filter

describe("#test0", function(){
    it ('filter should be a function', function(){
        assert.typeOf(filter, 'function')
    })
})
describe("#test1", function(){
    it ("filter should be ['sdads', 'sadsasadasddsaddsadadsasd']", function(){
        assert.equal(filter(['sdads','sadsasadasddsaddsadadsasd',44, [1,5,5,5,5,5,5,5,5,5,5,5]], 'object', 3),
        ["sdads", "sadsasadasddsaddsadadsasd"])
    })
})
describe("#test2", function(){
    it ("filter should be  ['sdads', 'sadsasadasddsaddsadadsasd']", function(){
        assert.equal(filter(['sdads','sadsasadasddsaddsadadsasd',44, [1,5,5,5,5,5,5,5,5,5,5,5]], 'object', 3),
        ["sdads", "sadsasadasddsaddsadadsasd"])
    })
})


