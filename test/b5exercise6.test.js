var assert                    = require('chai').assert
var currenciesDB              = require('../02_javascript/block5/exercise6').currenciesDB
var dinamicConverter          = require('../02_javascript/block5/exercise6').dinamicConverter


describe("#test0", function(){
    it ('currenciesDB.length should be a 0', function(){
        assert.equal(currenciesDB.length, 0)
    })
})
describe("#test1", function(){
    it ('dinamicConverter should be a function', function(){
        assert.typeOf(dinamicConverter, 'function')
    })
})
describe("#test2", function(){
    it (`dinamicConverter should be 1`, function(){
        assert.equal(dinamicConverter('add', ['euro',1.2]),1)
    })
})
describe("#test3", function(){
    it (`dinamicConverter should be "invalid data provided!"`, function(){
        assert.equal(dinamicConverter('add', ['euro',1.2]),'invalid data provided!')
    })
})
describe("#test4", function(){
    it (`dinamicConverter should be "invalid data provided!" `, function(){
        assert.equal(dinamicConverter('convert', ['euro',100]),"invalid data provided!")
    })
})
describe("#test5", function(){
    it (`dinamicConverter should be 1`, function(){
        assert.equal(dinamicConverter('add', ['gbp',1.5]),1)
    })
})
describe("#test6", function(){
    it (`dinamicConverter should be invalid data provided!`, function(){
        assert.equal(dinamicConverter('add', ['gbp',1.5]),"invalid data provided!")
    })
})
describe("#test7", function(){
    it (`dinamicConverter should be 80`, function(){
        assert.equal(dinamicConverter('convert', ['euro',100], 'gbp'),80)
    })
})
describe("#test8", function(){
    it (`dinamicConverter should be 1`, function(){
        assert.equal(dinamicConverter('add', ['yen',0.3]), 1)
    })
})
describe("#test9", function(){
    it (`dinamicConverter should be 400`, function(){
        assert.equal(dinamicConverter('convert', ['euro',100], 'yen'), 400)
    })
})
describe("#test10", function(){
    it (`dinamicConverter should be 1`, function(){
        assert.equal(dinamicConverter('add', ['thb',0.032]), 1)
    })
})
describe("#test11", function(){
    it (`dinamicConverter should be 3750`, function(){
        assert.equal(dinamicConverter('convert', ['euro',100], 'thb'), 3750)
    })
})
describe("#test12", function(){
    it (`dinamicConverter should be "invalid data provided!"`, function(){
        assert.equal(dinamicConverter('convert', ['euro',100], 'hmmm'), "invalid data provided!")
    })
})

