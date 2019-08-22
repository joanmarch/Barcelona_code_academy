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


module.exports = {
    tally
}