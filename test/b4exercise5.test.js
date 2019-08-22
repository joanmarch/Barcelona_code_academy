var assert                  = require('chai').assert
var howManyCaps             = require('../02_javascript/block4/exercise5').howManyCaps

describe("#test0", function(){
    it ('howManyCaps should be a function', function(){
        assert.typeOf(howManyCaps, 'function')
    })
})
describe("#test1", function(){
    it ('howManyCaps should be There are 3 capitals and these are A,D,H', function(){
        assert.equal(howManyCaps('jkhdsjakhkjdshdjksahkAdsfdhjhfkDkfjklsdjflk       H'),
        "There are 3 capitals and these are A,D,H")
    })
})
describe("#test2", function(){
    it ('howManyCaps should be There are 4 capitals and these are A,S,L,G', function(){
        assert.equal(howManyCaps('Antonello Sanna Likes videoGames'),
        "There are 4 capitals and these are A,S,L,G")
    })
})
describe("#test3", function(){
    it ('howManyCaps should be There are 9 capitals and these are I,V,E,R,Y,M,U,C,H ', function(){
        assert.equal(howManyCaps('I like going to the movies VERY MUCH'),
        "There are 9 capitals and these are I,V,E,R,Y,M,U,C,H")
    })
})
