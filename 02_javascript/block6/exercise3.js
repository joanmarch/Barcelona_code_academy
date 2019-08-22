function modifyObject (obj, keyObj, valueObj) {
obj[keyObj] = valueObj;
return obj;
}

var obj = {a: 1, b: 2} //original object

console.log(modifyObject(obj, 'c', 3) ); 

module.exports ={
    obj, modifyObject
}