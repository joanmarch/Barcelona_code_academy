function sorter(myArr, order='ascending'){
    let result;
   
    if (order === "ascending"){
        result = ascending(myArr);
    }else if (order === 'descending'){
        result = descending(myArr);
    }else{
        return console.log("wrong order provided " + order + " please provide us with ascending or descending order instructions");
    }
    return result;
}

function ascending (myArr){
    myArr.sort(function(a,b){
        return a-b;
    })
    return myArr;
}

function descending (myArr){
    myArr.sort(function(a,b){
        return b-a;
    })
    return myArr;
}

console.log(sorter([11111,9,10,12,3,321],'ascending'));
console.log(sorter([11111,9,10,12,3,321]));
console.log(sorter([11111,9,10,12,3,321],'descending'));
console.log(sorter([11111,9,10,12,3,321],'holaa'));

module.exports ={
    sorter
}