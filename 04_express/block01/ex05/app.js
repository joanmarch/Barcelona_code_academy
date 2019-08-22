var express = require ('express');
var app = express ();
var port = 3001;

app.listen(port,()=>{
    console.log('server running on port '+ port)
})

app.get('/account/new/:accountID/:amount',(req, res)=>{
    var {accountID, amount } = req.params;
    if  (accountID in accountDatabase){
        res.send(`<h1>Account ID already exist</h1>`);
    }else{
        let newAccount = new bankAccount (accountID, amount);
        accountDatabase[accountID] = newAccount;
        res.send(`<h1>account ${accountID} with ${amount} euros</h1>`);
}})

app.get('/:accountID/withdraw/:amount',(req, res)=>{
    var {accountID, amount } = req.params;
    accountDatabase[accountID].withdraw(amount);
    res.send(`<h1>${amount} euros taken from ${accountID}`);
})

app.get('/:accountID/deposit/:amount',(req, res)=>{
    var {accountID, amount } = req.params;
    accountDatabase[accountID].deposit(amount);
    res.send(`<h1>${amount} euros added from ${accountID}`); 
})

app.get('/:accountID/balance',(req, res)=>{
    var accountID = req.params.accountID;
    res.send(`<h1>The balance of account ${accountDatabase[accountID].accountID} is ${accountDatabase[accountID].amount} euros`);
    console.log(accountDatabase[accountID]);
})

app.get('/:accountID/delete',(req, res)=>{
    var accountID = req.params.accountID;
    console.log(accountDatabase[accountID])
    res.send(`<h1>Account ${accountDatabase[accountID].accountID} deleted`);
    delete accountDatabase[accountID];
    
})


class bankAccount  {
	constructor(accountID, amount){
        this.accountID = accountID;
        this.amount = Number(amount);
        
	}
	withdraw(quantity){
        this.amount -= Number(quantity);
	}
	deposit(quantity) {
        this.amount += Number(quantity);
    }
}

accountDatabase ={
    
}
