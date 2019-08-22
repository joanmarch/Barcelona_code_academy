function recursive (myArr){
    let result = [];
    debugger;
    for (let i = 0; i < myArr.length; i++){
        var array = [];
        for (let key in myArr[i]){  
                if (key === "name"){
                    array[0] = myArr[i][key];
                }else{
                    array[1] = myArr[i][key];
                }
        }
        result.push(array);
    }
    return result;
}
var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}] 
console.log(recursive(arr));
module.exports = {
    recursive
}