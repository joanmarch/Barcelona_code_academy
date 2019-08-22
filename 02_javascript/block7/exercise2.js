function addCurrency (objCoin, numCoins, crypt){
  
    if (existCurrency(objCoin,crypt)){
        let conversion;
        let rate;
        rate = findcurrency(objCoin, crypt);
        conversion = converter(rate, numCoins);
        tellConversion(conversion, numCoins, objCoin);
    }else{
        crypt.push(objCoin);
        console.log("New coin " + objCoin.coin + " added to Database");
    }
}

function existCurrency (objCoin, crypt){
    let exist = false;
    crypt.forEach ( function (coins){
        if (coins.coin === objCoin.coin) {
            exist = true;
        }
    })
    return exist;
}

function findcurrency (objCoin, crypt){
    let rate;
    crypt.forEach ( function (coins){
        if (coins.coin === objCoin.coin) {
            rate = coins.rate;
        }
})
    return rate;
}

function converter (rate, numCoins){
    return rate*numCoins;
}

function tellConversion (conversion, numCoins, objCoin){
console.log("You will receive " + conversion + " usd for your " + numCoins + " " + objCoin.coin);
}

crypt = [];
addCurrency({coin:'bitcoin', rate:8000}, 2, crypt);
addCurrency({coin:'euro', rate:1.2}, 4, crypt);
addCurrency({coin:'yuang', rate:7.5}, 3, crypt);
addCurrency({coin:'euro', rate:1.2}, 5, crypt);

module.exports = {
    addCurrency, findcurrency, converter, tellConversion
}