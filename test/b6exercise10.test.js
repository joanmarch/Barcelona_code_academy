var assert                    = require('chai').assert
var model                     = require('../02_javascript/block6/exercise10.js').model
var schema = ["id", "name", "age"]

describe("# bloclk 6 exercise 10 test1", function(){
    it ('model should be a function', function(){
        assert.typeOf(model, 'function')
    })
})
describe("# block 6 exercise 10 test2", function(){
    it ('model should be  { name:"Joe", age:32  }', function(){
        var arrDB = model("add", {id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona"}, schema)
        assert.equal( arrDB[0].name ,'Joe')
        assert.equal( arrDB[0].address ,undefined)
        assert.equal( arrDB[0].age ,32)


    })
})
describe("# block 6 exercise 10 test3", function(){
    it ('model should be  {name:"Mike", age:32,}', function(){
        var arrDB = model("add", {id: 1, name: 'Mike', age: 32, address: "Muntaner 262, Barcelona"}, schema)
        assert.equal( arrDB[0].name ,'Mike')
        assert.equal( arrDB[0].address ,undefined)
        assert.equal( arrDB[0].age ,32)


    })
})
describe("# block 6 exercise 10 test4", function(){
    it ('model should be {firstname:"Robert", email:"test@test.com}', function(){
        var arrDB = model("add", {id: 1, firstname: "Robert", email: 'test@test.com', address: "Muntaner 262, Barcelona"}, ["email", "surname", "firstname"])
        assert.equal( arrDB[0].firstname ,'Robert')
        assert.equal( arrDB[0].address ,undefined)
        assert.equal( arrDB[0].email ,'test@test.com')

    })
})
