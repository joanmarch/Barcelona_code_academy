function tally (myArr){
    let result={};
    debugger;
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] in result){
            result[myArr[i]]++;
        }else if (myArr[i]===undefined){
            
        }
        else{
            result[myArr[i]] = 1;
        }
    }
    return result;
}

console.log(tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6]));

module.exports = {
    tally
}