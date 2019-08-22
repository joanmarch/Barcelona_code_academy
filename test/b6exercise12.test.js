var assert                    = require('chai').assert
var model                     = require('../02_javascript/block6/exercise12.js').model
schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false},
    id:{type:'number'}
}

describe("#test1", function(){
    it ('model should be a function', function(){
        assert.typeOf(model, 'function')
    })
})
describe("#test2", function(){
    it ('model should be  {id: 1, name: "NoBody", married:true}', function(){
        var arrDB = model("add", {lastname:'mike', married:true}, schema)
        assert.equal( arrDB[0].name ,'NoBody')
        assert.equal( arrDB[0].lastname , undefined)
        assert.equal( arrDB[0].married , true)
    })
})
describe("#test3", function(){
    it ('model should be  {id: 1, name: "antonello", married:false}', function(){
        var arrDB = model("add", {id: 1, name: "antonello", age: "32", address: "Muntaner 262, Barcelona, Spain"}, schema)
        assert.equal( arrDB[0].name ,'antonello')
        assert.equal( arrDB[0].id , 1)
        assert.equal( arrDB[0].married , false)
    })
})
describe("#test3", function(){
    it ('model should be  {id: 1, name: "pedro", married:false}', function(){
        var arrDB = model("add", {id: 1, name: "pedro", age: "32", address: "Muntaner 262, Barcelona, Spain"}, schema)
        assert.equal( arrDB[0].name ,'pedro')
        assert.equal( arrDB[0].id , 1)
        assert.equal( arrDB[0].married , false)
    })
})
