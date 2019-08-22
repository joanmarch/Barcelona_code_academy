function getIndex(myArr, keyObj, valueObj){
    
for (let i = 0; i < myArr.length; i++){
    for(var key in myArr[i]){
        if (key===keyObj && myArr[i][key]===valueObj){
            return i;
        }
        }
        
}
}
console.log(getIndex([{name:'Antonello', location:'Barcelona'}, {email: 'george@barcelonacodeschool.com', name:'George'}, {name:'Golda', coder: true}], 'coder', true));
module.exports ={
    getIndex
}