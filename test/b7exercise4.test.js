var assert                      = require('chai').assert,
    Universe                    = require('../02_javascript/block7/exercise4.js').Universe;


describe("#test1", function(){
    it ('Universe should be a function', function(){
        assert.typeOf(Universe,  'function')
    })
})
describe("#test2", function(){
    it ('matter and universe total should be 0 if no initial value is added', function(){
        var universe = new Universe()
        assert.equal(universe.matter.total, 0)
        assert.equal(universe.energy.total, 0)
    })
})
describe("#test3", function(){
    it ('matter total should be -150, energy total should be 250', function(){
        var universe = new Universe(100, 'energy')
        assert.equal(universe.matter.total, 0)
        assert.equal(universe.energy.total, 100)
        universe.matter.destroy(150)
        assert.equal(universe.energy.total, 250)
        assert.equal(universe.matter.total, -150)
    })
})
describe("#test4", function(){
    it ('matter total should be -125, energy total should be 170', function(){
        var universe = new Universe(45, 'matter')
        universe.energy.create(150)
        universe.matter.destroy(20)
        assert.equal(universe.energy.total, 170)
        assert.equal(universe.matter.total, -125)
    })
})
describe("#test5", function(){
    it ('matter total should be -170, energy total should be 170', function(){
        var universe = new Universe()
        universe.energy.create(150)
        universe.matter.destroy(20)
        assert.equal(universe.energy.total, 170)
        assert.equal(universe.matter.total, -170)
    })
})