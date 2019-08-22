class BankAccount {
    constructor(inicialMoney){
        this.money = inicialMoney;
    }

    withdraw(quantity){
        this.money = this.money - quantity;
    }

    deposit(quantity){
        this.money = (this.money + quantity);
    }

    balance(){
        console.log(this.money);
    }
}

    var account = new BankAccount(10)
    debugger;
    account.withdraw(2)
    account.withdraw(5)
    account.deposit(4)
    account.deposit(1)
    account.balance() // 8 

module.exports = {
    BankAccount
}
