var assert                    = require('chai').assert
var model                     = require('../02_javascript/block6/exercise11.js').model
var schema                    = {id: "number", name: "string", age: "number", married: "boolean"}
describe("#test1", function(){
    it ('model should be a function', function(){
        assert.typeOf(model, 'function')
    })
})
describe("#test2", function(){
    it ('model should be  { name:"jason", id:1  }', function(){
        var arrDB = model("add", {id: 1, name: "jason", age: "32", address: "Muntaner 262, Barcelona", married: "to Mary"},schema)
        assert.equal( arrDB[0].name ,'jason')
        assert.equal( arrDB[0].address ,undefined)
        assert.equal( arrDB[0].age ,undefined)
        assert.equal( arrDB[0].id , 1)
    })
})
describe("#test3", function(){
    it ('model should be  {name:"Mike", age:32}', function(){
        var arrDB = model("add", {id: '1', name: 'Mike', age: 32, address: "Muntaner 262, Barcelona"},schema)
        assert.equal( arrDB[0].name ,'Mike')
        assert.equal( arrDB[0].address ,undefined)
        assert.equal( arrDB[0].age ,32)
        assert.equal( arrDB[0].id , undefined)

    })
})
describe("#test4", function(){
    it ('model should be  {name:"john", address: "Muntaner 262, Barcelona" }', function(){
        var schema2 = {id: "number", name: "string", age: "number", married: "boolean", address:'string'} 
        var arrDB = model("add", {id: '1', name: 'john', age: '32', address: "Muntaner 262, Barcelona"},schema2)
        assert.equal( arrDB[0].name ,'john')
        assert.equal( arrDB[0].address, "Muntaner 262, Barcelona")
        assert.equal( arrDB[0].age ,undefined)
        assert.equal( arrDB[0].id , undefined)

    })
})
describe("#test5", function(){
    it ('model should be  {name:"Mike", }', function(){
        var schema2 = {id: "number", name: "string", age: "number", married: "boolean", address:'string'} 
        var arrDB = model("add", {id: '1', name: 'Mike', age: '32', address: "Muntaner 262, Barcelona"},schema2)
        assert.equal( arrDB[0].name ,'Mike')
        assert.equal( arrDB[0].address, "Muntaner 262, Barcelona")
        assert.equal( arrDB[0].age ,undefined)
        assert.equal( arrDB[0].id , undefined)

    })
})
describe("#test6", function(){
    it ('model should be  {name:"Mike", age:32, address: "Muntaner 262, Barcelona" }', function(){
        var schema2 = {id: "number", name: "string", age: "number", married: "boolean", address:'string', nickname:'string'} 
        var arrDB = model("add", {nickname:'user', name: 'Mike', age: 32, address: "Muntaner 262, Barcelona"},schema2)
        assert.equal( arrDB[0].name ,'Mike')
        assert.equal( arrDB[0].address, "Muntaner 262, Barcelona")
        assert.equal( arrDB[0].nickname ,'user')
        assert.equal( arrDB[0].id , undefined)

    })
})
