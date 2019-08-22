var assert                    = require('chai').assert
var strCut                = require('../02_javascript/block5/exercise8.js').strCut

describe("#test1", function(){
    it ('strCut should be a function', function(){
        assert.typeOf(strCut, 'function')
    })
})
describe("#test2", function(){
    it (`strCut should be rcelonaCodeSchool `, function(){
        assert.equal(strCut('BarcelonaCodeSchool',0, 1), "rcelonaCodeSchool")
    })
})
describe("#test3", function(){
    it (`strCut should be arceonaCodeSchool `, function(){
        assert.equal(strCut('BarcelonaCodeSchool',0, 5), "arceonaCodeSchool")
    })
})
describe("#test4", function(){
    it (`strCut should be BarceoaCodeSchool `, function(){
        assert.equal(strCut('BarcelonaCodeSchool',5, 7), "BarceoaCodeSchool")
    })
})
describe("#test5", function(){
    it (`strCut should be Genro `, function(){
        assert.equal(strCut('Gennaro',2, 4), "Genro")
    })
})
describe("#test6", function(){
    it (`strCut should be Gennaro `, function(){
        assert.equal(strCut('Gennaro'), "Gennaro")
    })
})