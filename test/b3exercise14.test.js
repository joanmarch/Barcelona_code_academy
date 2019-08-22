var assert                   = require('chai').assert
var budgetTracker                = require('../02_javascript/block3/exercise14').budgetTracker

describe("#test1", function(){
    it ('budgetTracker should be a function', function(){
        assert.typeOf(budgetTracker, 'function')
    })
})
describe("#test2", function(){
    it ('budgetTracker should be 310 ', function(){
        assert.equal(budgetTracker(['10003', '46733', '45833', '3534', '57354','45334','34856']), 310)
    })
})
describe("#test3", function(){
    it ('budgetTracker should be 10 ', function(){
        assert.equal(budgetTracker(['1200', '1400', '1299', '3400', '233', '333', '344']), 10)
    })
})
describe("#test4", function(){
    it ('budgetTracker should be 881 ', function(){
        assert.equal(budgetTracker(['12400', '14400', '14299', '344300', '243433', '33433', '30944']), 881)
    })
})




