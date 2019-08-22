// extend our awesome calc function by adding some conditions...
// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

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

console.log(calc(10,"/"));  //10
calc (30,"*") //30
console.log(calc (2,"+"));  //2
calc (3,"-")  //3

module.exports = {
     calc
 }