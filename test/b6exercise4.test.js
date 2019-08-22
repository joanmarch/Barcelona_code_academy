var assert                    = require('chai').assert
var addToList                 = require('../02_javascript/block6/exercise4.js').addToList

describe("#test1", function(){
    it ('addToList should be a function', function(){
        assert.typeOf(addToList, 'function')
    })
})
describe("#test2", function(){
    it (`addToList should be true} `, function(){
        var arr = ['matrix','the dark knight','a beautiful mind','american pie']
        var moviesDB = addToList(['matrix','the dark knight','a beautiful mind','american pie'])
        var check = (moviesDB => {
            let bool;
            moviesDB.length > 1 ? bool = true : bool = false;
            moviesDB.map((ele, i) => {
                ele.title != arr[i] || !ele.title || ele.id != i ? bool = false : null;
                
            })
            return bool  
        }) 
        assert.equal(check(moviesDB), true)
    })
})
describe("#test3", function(){
    it (`addToList should be true} `, function(){
        var arr = ['banana','the dark apple','a beautiful mind','american psycho']
        var moviesDB = addToList(['banana','the dark apple','a beautiful mind','american psycho'])
        var check = (moviesDB => {
            let bool;
            moviesDB.length > 1 ? bool = true : bool = false;
            moviesDB.map((ele, i) => {
                ele.title != arr[i] || !ele.title || ele.id != i ? bool = false : null;
                
            })
            return bool  
        }) 
        assert.equal(check(moviesDB), true)
    })
})