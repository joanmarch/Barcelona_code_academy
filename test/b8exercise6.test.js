var assert                      = require('chai').assert,
    Server                      = require('../02_javascript/block8/exercise6.js').Server;
    var server = new Server ()
    


describe("#test1", function(){
    it ('Server should be  a function', function(){
        assert.typeOf(Server, 'function')
    })
})
describe("#test1", function(){
    it ('name should be {name:jason, id:0,amount:400}', function(){
        server.app.post('accounts/new/jason/400')
        assert.equal(server.app.get ('accounts/find/')[0].amount, 400)
        assert.equal(server.app.get ('accounts/find/')[0].id, 0)
        assert.equal(server.app.get ('accounts/find/0').name, 'jason')
        
    })
})
describe("#test2", function(){
    it ('name should be {name:roger, id:1,amount:200}', function(){
        server.app.post('accounts/new/roger/200')
        assert.equal(server.app.get ('accounts/find/')[1].name, 'roger')
        assert.equal(server.app.get ('accounts/find/1').amount, 200)
        assert.equal(server.app.get ('accounts/find/1').id, 1)
        
    })
})
describe("#test3", function(){
    it ('name should be george, amout 1200, id 2, amount should be 800 after withdraw', function(){
        server.app.post('accounts/new/george/1200')
        assert.equal(server.app.get ('accounts/find/2').name, 'george')
        assert.equal(server.app.get ('accounts/find/2').amount, 1200)
        assert.equal(server.app.get ('accounts/find/2').id, 2)
        server.app.post('accounts/withdraw/2/400')
        assert.equal(server.app.get ('accounts/find/2').amount, 800)

        
    })
})
describe("#test4", function(){
    it ('name should sortable', function(){
        assert.equal(server.app.get ('accounts/sort/name/desc')[0].name,'roger' )
        assert.equal(server.app.get ('accounts/sort/name/desc')[1].name,'jason' )
        assert.equal(server.app.get ('accounts/sort/name/desc')[2].name,'george' )
        assert.equal(server.app.get ('accounts/sort/name/asc')[0].name,'george' )
        assert.equal(server.app.get ('accounts/sort/name/asc')[1].name,'jason' )
        assert.equal(server.app.get ('accounts/sort/name/asc')[2].name,'roger' )
    })
})
describe("#test5", function(){
    it ('deleting should delete but not change the index', function(){
        assert.equal(server.app.post('accounts/delete/0'))
        assert.equal(server.app.get ('accounts/find/2').id, 2)
        assert.equal(server.app.get ('accounts/find/2').name, 'george')
        assert.equal(server.app.get ('accounts/find/0'), undefined)

    })
})
describe("#test6", function(){
    it ('should be able to update', function(){
        assert.equal(server.app.post('accounts/update/1/1976/new user'))
        assert.equal(server.app.get ('accounts/find/1').id, 1)
        assert.equal(server.app.get ('accounts/find/1').name, 'new user')
        assert.equal(server.app.get ('accounts/find/1').amount, 1976)

    })
})
describe("#test7", function(){
    it ('should be able to update', function(){
        assert.equal(server.app.post('accounts/update/2/666/ottaviano'))
        assert.equal(server.app.get ('accounts/find/2').id, 2)
        assert.equal(server.app.get ('accounts/find/2').name, 'ottaviano')
        assert.equal(server.app.get ('accounts/find/2').amount, 666)


    })
})
describe("#test8", function(){
    it ('should get 404 if the route does not exist', function(){
        assert.equal(server.app.get ('accounts/banana/2'), '404 page not found')
    })
})
describe("#test9", function(){
    it ('should not be able to add an account if it exists already', function(){
        server.app.post('accounts/new/ottaviano/1300')
        assert.equal(server.app.post('accounts/new/ottaviano/1300'),'Account ottaviano already present in db')
    })
})