//EXERCISE 6
//Let's make a currency converter!
// it should be a flexible function which reacts differently to different inputs.
// Outside the function declare an array called currenciesDB which will hold your currencies.
// write a function called dinamicConverter which takes three arguments.
    //if the first argument is "add" then the second is:
        // an array which contains a currency and an exchange rate (to the dollar)
        // if the item is successfully added it should return the number of added items.

    //if the first argument is "convert" then the second is:
        // an array which contains the currency and the amount that you wish to convert.
        // the third argument will be the currency that you want to convert your money to.
        // if the currency is not present or any of the arguments is missing it should return an error message:
        //"invalid data provided!"

// PLease make sure that currency is added only once not to overload your DB!
// Should the currency already present you should return "invalid data provided!"
// It should return the result of the conversion.
currenciesDB = [];   
function dinamicConverter (action, Currency, wantedCurrency){
    if (action === "add" && !checkExistingCurrency(Currency) ){
        currenciesDB.push (Currency);
        return 1;
    }else if(action === "convert"){
      let result = convertCurrency(Currency, wantedCurrency);
      if (result === 0){
          return "invalid data provided!"
      }else{
          return result;
      }
    }else{
        return "invalid data provided!";
    }
}

function checkExistingCurrency (newCurrency){
    for ( let i = 0; i < currenciesDB.length; i++){
        if (currenciesDB[i][0] === newCurrency[0]){
            return true;
        }
    }

    return false;
}

function convertCurrency (myCurrency, wantedCurrency){
    let dolars;
    let exchangeRatio;
    for ( let i = 0; i < currenciesDB.length; i++){
        if (currenciesDB[i][0] === myCurrency[0]){
            dolars = myCurrency[1]*currenciesDB[i][1];
        }
        if (currenciesDB[i][0] === wantedCurrency){
            exchangeRatio = currenciesDB[i][1];
        }
    }
    if (exchangeRatio===undefined){
        return 0
    }else{
        return dolars/exchangeRatio;
    }

}

//examples:
console.log(dinamicConverter('add', ['euro',1.2]));
    //1
  
console.log(dinamicConverter('add', ['euro',1.2]));
    //'invalid data provided!' (because the item is already present)
console.log(dinamicConverter('add', ['gbp',1.5]));
    //1
console.log(dinamicConverter('add', ['gbp',1.5]));
 //debugger   //"invalid data provided!"
console.log(dinamicConverter('convert', ['euro',100], 'gbp'));
    //80
console.log(dinamicConverter('convert', ['euro',100], 'hmmm')),
    //"invalid data provided!"
console.log(currenciesDB);
dinamicConverter('add',['hmmm', 0.8]);
console.log(dinamicConverter('convert', ['euro',100], 'hmmm')),

module.exports ={
    currenciesDB, dinamicConverter
}