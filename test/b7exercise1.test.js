var assert                      = require('chai').assert
var moviesDB                    = require('../02_javascript/block7/exercise1.js').moviesDB
var DB                          = []
describe("#test1", function(){
    it ('moviesDB should be a function', function(){
        assert.typeOf(moviesDB, 'function')
    })
})
describe("#test2", function(){
    it ("moviesDB should be a {genre:'commedy', title:'pinapple express'}", function(){
        moviesDB(DB, 'commedy', {title:'pinapple express'})
        assert.equal(DB[0].genre, 'commedy')
        assert.equal(DB[0].movies[0].title, 'pinapple express' )
    })
})
describe("#test3", function(){
    it ("moviesDB should be a {title:'Banana'}", function(){
        moviesDB(DB, 'commedy', {title:'Banana'})
        assert.equal(DB[1], undefined)
        assert.equal(DB[0].movies[1].title, 'Banana')
    })
})
describe("#test4", function(){
    it ('moviesDB should be a {title:"the usual suspects", genre:"thriller"}', function(){
        moviesDB(DB, 'thriller', {title:'the usual suspects'})
        assert.equal(DB[1].genre, 'thriller')
        assert.equal(DB[1].movies[0].title, 'the usual suspects')
    })
})
describe("#test5", function(){
    it ('moviesDB should be a the movie the usual suspects is already in the database!', function(){
        assert.equal(moviesDB(DB, 'thriller', {title:'the usual suspects'}), 'the movie the usual suspects is already in the database!')


    })
})
describe("#test6", function(){
    it ('moviesDB should be a {title:"super thriller"}', function(){
        moviesDB(DB, 'thriller', {title:'super thriller'})
        assert.equal(DB[1].movies[1].title, 'super thriller')
    })
})
describe("#test7", function(){
    it ('moviesDB should be a {title:"mega thriller"}', function(){
        moviesDB(DB, 'thriller', {title:'mega thriller'})
        assert.equal(DB[1].movies[2].title, 'mega thriller')
        assert.equal(DB[2], undefined)
        assert.equal(DB[3], undefined)
    })
})