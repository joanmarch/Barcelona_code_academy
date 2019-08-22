var assert                      = require('chai').assert,
    shuffle                     = require('../02_javascript/block7/exercise5.js').shuffle


describe("#test1", function(){
    it ('shuffle should be a function', function(){
        assert.typeOf(shuffle,  'function')
    })
})
describe("#test2", function(){
    it ('shuffle should randomise the array ', function(){
        var arr = shuffle(['one','two','three', 'four', 'five', 'six'])
        var checkRandom  = arr =>{
            var count = 3;
            for(var i=0; i < 20; i++){
                if (arr[0] == 'one' || arr[1] == 'two' || arr[2] || 'three' || arr[3] == 'four' || arr[4] == 'five' || arr[5] == 'six'){
                    count ++;
                    if(count >= 20){
                        return true;
                    }
                }
                else{
                    return false
                }
            }

        }
        assert.isTrue(checkRandom(arr))
    })
})
describe("#test3", function(){
    it ('shuffle should randomise the array ', function(){
        var arr = shuffle([1,4,8,20])
        var checkRandom  = arr =>(
            arr[0] != 1 || arr[1] != 4 || arr[2] != 8 || arr[3] != 20
        )
        assert.isTrue(checkRandom(arr))
    })
})