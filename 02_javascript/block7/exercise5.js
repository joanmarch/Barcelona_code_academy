function shuffle (myArr){
    let newArr=[];
    let ramNum;
    
    for (let i = myArr.length ; i > 0; i-- ){
        ramNum = Math.floor(Math.random() * i);
        newArr[i-1]=myArr[ramNum];
        myArr.splice(ramNum,1);
    }

    return newArr;
}

var arr = ['one','two','three','four'];

console.log(shuffle(arr));


module.exports = {
    shuffle
}