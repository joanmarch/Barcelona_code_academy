var assert                    = require('chai').assert
var addToObj                  = require('../02_javascript/block6/exercise2.js').addToObj

describe("#test1", function(){
    it ('addToObj should be a function', function(){
        assert.typeOf(addToObj, 'function')
    })
})
describe("#test2", function(){
    it (`addToObj should be 22 `, function(){
        assert.equal(addToObj('age',22)['age'], 22 )
    })
})
describe("#test3", function(){
    it (`addToObj should be Jason `, function(){
        assert.equal(addToObj('name','Jason')['name'], 'Jason')
    })
})
