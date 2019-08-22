function addToObj (keyObj, valueObj){
    let obj = {};
    obj[keyObj] = valueObj;
    return (obj);
}

console.log(addToObj('jason', 'bourne'));

module.exports = {
    addToObj
}