var assert                  = require('chai').assert
var calc                    = require('../02_javascript/block5/exercise2').calc

describe("#test0", function(){
    it ('calc should be a function', function(){
        assert.typeOf(calc, 'function')
    })
})
describe("#test1", function(){
    it ("calc should be 20", function(){
        assert.equal(calc(5,15,'+'),20)
    })
})
describe("#test2", function(){
    it ("calc should be 50", function(){
        assert.equal(calc(50,'-'),50)
    })
})
describe("#test3", function(){
    it ("calc should be 100", function(){
        assert.equal(calc(50,2,'*'),100)
    })
})
describe("#test4", function(){
    it ("calc should be 250", function(){
        assert.equal(calc(500,2,'/'),250)
    })
})
describe("#test5", function(){
    it ("calc should be 500", function(){
        assert.equal(calc(500,'+'), 500)
    })
})
describe("#test6", function(){
    it ("calc should be 10", function(){
        assert.equal(calc(10,'/'), 10)
    })
})
