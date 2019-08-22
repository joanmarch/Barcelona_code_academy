Exercise1

// write a function called moviesDB which we use to create a movie database.
// this function should take 3 arguments an array(the actual db), a genre, and an object (the movie)
// it should check if the genre exists and if it doesn't it should add it on.
// it should also check if the movie exists and add it on if it doesn't.
// see the example of the data structure you MUST follow.
// if the movie is already present it should not add it again and it should instead return the following message:
// 'the movie the < YOUR_MOVIE_GOES_HERE > is already in the database!'

DB = [
    {
        genre:'thriller', 
        movies:[
            {
                title:'the usual suspects', release_date:1999
            }
        ]},
        {
        genre:'commedy', 
        movies:[
            {
                title:'pinapple express', release_date:2008
            }
        ]}
]

EXERCISE 2
// To practice passing data between functions let's create a crypto converter…
// You need to create several functions, each will be responsible for its own tasks and to call the next function.
// addCurrency
// findcurrency
// converter
// tellConversion
// You should exclusively call addCurrency and it will call the others
// add currency takes three arguments 
// a coin, its value (amount of coins) and an array of coins (our coins database)
// the coin should be an object with the following structure:

// {
//      coin:'coin_here', 
//      rate:CONVERSION_RATE_TO_USD_TYPE_NUMBER
// }


// Example:
addCurrency({coin:'bitcoin', rate:8000}, 2, crypt)
// Here {coin:'bitcoin', rate:8000} is your coin, 2 is a value/amount, crypt is the name of your DB
// First time you run it should return "New coin Bitcoin added to Database"
// Second time you run it the return should be "You will receive 16000 usd for your 2 bitcoins"

// addCurrency should first check if the coin already exists in the DB and if it doesn't it should add it on and return the following:
// "New coin {YOUR_NEW_ADDED_COIN_GOES_HERE} added to Database"
// If the coin does exist in the DB it should call findcurrency which should retrieve the conversion rate of the given currency and then passing that should call convert 
// which is in charge of doing the actual conversion.
// However it is TellConversion which is in charge to return the final message to the user.
// "You will receive {AMOUNT} usd for your 2 {COINS_NAME}"
// Please make sure that when adding the new currency the output message capitalize the coin name.






EXERCISE 3

    // Create a constructor function called bankAccount, which has 3 methods:
    // withdraw which takes away from the account balance, 
    // deposit which adds to it,
    // and balance which returns the balance.
    // all of these three are functions, using amount to increase/decrease or display the balance
    // all of them are inside your BankAccount class
    // the function should work with or without an initial amount.

    // Example

    var account = new bankAccount(10)
    account.withdraw(2)
    account.withdraw(5)
    account.deposit(4)
    account.deposit(1)
    account.balance() // 8 








EXERCISE 4


    // Implement a representation of the universe where matter and energy is conserved. To do so implement one object called Universe
    // that contains two objects within: matter and energy. If matter is destroyed; that is say we call Universe.matter.destroy(5), then 
    //the amount of energy in the universe needs to be increased so that if we call Universe.energy.total() we should obtain a total
    // value of energy that has increased +5 compared to the energy value previous to calling Universe.matter.destroy(5). Of course the 
    //total amount of matter obtained by calling Universe.matter.total()has been reduced by 5 compared to the initial value.
    //     - Implement this objects using context
    //     - The matter and energy objects are defined within an object called Universe
    //     - No other variable should be defined out of the Universe object
    //     - Also implement the create methods for both matter an energy which are opposite to their counterparts
    //     - You should be able to give an initial amount to either the energy or the matter, otherwise should default to 0.
    
    // Example:

    var universe = new Universe(10, 'matter')
    Universe.matter.total // 10 
    Universe.energy.total // 0 

    // or with no initial amount 
    var universe = new Universe()
    Universe.matter.total // 0 
    Universe.energy.total // 0 
    Universe.matter.destroy(5) // 0 
    Universe.eatter.total // -5 
    Universe.energy.total // 5 
    Universe.energy.destroy(-5) // 0 
    Universe.matter.total // -10 
    Universe.energy.total // 10 
    Universe.energy.create(5) // 0 
    Universe.matter.total // -15 
    Universe.energy.total // 15 

    // Notes: Initially make your universe contain 0 matter and energy. Destroying a negative amount of energy of matter is equal to creating a positive amount of each and vice versa for creating matter or energy.







EXERCISE 5

// Without Googling how to shuffle elements inside an array in javascript create a function called shuffle and implement in it your own algorithm to shuffle the elements inside of the given array.

// Example: 

var arr = ['one','two','three','four']
shuffle(arr)
(4) ["three", "one", "four", "two"]
shuffle(arr)
(4) ["two", "one", "three", "four"]
shuffle(arr)
(4) ["one", "two", "three", "four"]
shuffle(arr)
(4) ["three", "two", "four", "one"]