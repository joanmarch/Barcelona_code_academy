
//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations
// should the operator be missing, the function should 
// return 'wrong data provided'
function calc (number1, number2, operator){
if ( typeof(number2) !== "number") {
    return number1;
}else if(operator === "+"){
    return number1 + number2;
}else if (operator === "-"){
    return number1 - number2;
}else if (operator === "*"){
    return number1*number2;
}else if ( operator = "/"){
    return number1/number2;
}   
}
//Example:

console.log(calc(10,2,'/'));
//5

calc(10,2,'+')
//12

calc(10,2,'-')
//8

calc(10,2,'*')
//20



module.exports = {
    calc
}