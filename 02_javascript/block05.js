EXERCISE 1

//write a function called calc that takes 3 arguments the first 2 are numbers and the third is an arithmetic operator, 
// so it is either + , -, *, /
// and it executes the appropriate operation according to the provided arithmetic operator.
// make sure you test your function with all 4 arithmetic operations
// should the operator be missing, the function should 
// return 'wrong data provided'


//Example:

calc(10,2,'/')
//5

calc(10,2,'+')
//12

calc(10,2,'-')
//8

calc(10,2,'*')
//20








EXERCISE 2

// extend our awesome calc function by adding some conditions...
// in case the third arguments is  / or * and the second argument is not provided, the second argument should default to one.
// in case the third arguments is +  or  - and the second argument is not provided, the second argument should default to zero.

//Example:

calc(10,"/")  //10
calc (30,"*") //30
calc (2,"+")  //2
calc (3,"-")  //3








EXERCISE 3
// write a function called Filter that takes 3 arguments, an array, a data type and a minLength.
// it will loop through the array and return a new array where the elements are NOT of the type of passed data type and they have a length equal to or bigger than minLength
// Stringify the return to pass the test!








EXERCISE 4

// write a function called tellAge that tells you how old you are based on the date of birth passed.
// this function will take 3 arguments month, day and year
// You should use the Date object to set the value of today.
// if the birth date is less than one year from the current date it should return : "you are NUMBER_DAYS old"
// if its more than one year it should return you are NUMBER_YEARS old"
// Info on Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


//========================EXAMPLES========================
// assuming today is April 11, 2018
tellAge(8,2,1982)
//you are 35 years old

tellAge(4,3,1982)
//you are 36 years old

tellAge(4,9,2018)
//you are 2 days old





EXERCISE 5

// Write a function called  checkAge that checks how many days there are between now and the next birthday.
    // if the date of birth is today it should return 
        // Happy birthday! 
    // if the date of birth is passed it should return
        // Sorry your birthday is passed for this year
    // if the day provided is out of range (31) or the month is out of the 12 it should return:
        // "Error invalid data provided"
// otherwise it should console.log how many months and days there are between now and the next birthday.
// in case there is less than 1 month between now and the next birthday it should ignore the month.
// for the sake of simplicity let's assume that all months have 30 days.
// Examples:
// Please bare in mind that these examples are not up to date (literally)...
// The output should be "There is / there are ## month / months and ## day / days until your birthday"

checkAge(2,8,1982)
// There are 6 days until your birthday

checkAge(2,9,1982)
// There is 1 month and 6 days until your birthday

checkAge(25,2,1982)
// Sorry your birthday is passed for this year








EXERCISE 6
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
   

//examples:
dinamicConverter('add', ['euro',1.2])
    //1
dinamicConverter('add', ['euro',1.2])
    //'invalid data provided!' (because the item is already present)
dinamicConverter('add', ['gbp',1.5])
    //1
dinamicConverter('add', ['gbp',1.5])
    //"invalid data provided!"
dinamicConverter('convert', ['euro',100], 'gbp')
    //80
dinamicConverter('convert', ['euro',100], 'hmmm'),
    //"invalid data provided!"



EXERCISE 7

// Write a function called stringChop that chops a string into chunks of a given length. The function takes 2 arguments, the first one being the string to chop, and the second one a number that will be the size of you chunks.

// Example:

stringChop('BarcelonaCodeSchool'); //#=> ["BarcelonaCodeSchool"]
stringChop('BarcelonaCodeSchool',0); //#=> ["BarcelonaCodeSchool"]
stringChop('BarcelonaCodeSchool',2); //#=> ["Ba", "rc", "el", "on", "aC", "od", "eS", "ch", "oo", "l"] 
stringChop('BarcelonaCodeSchool',3); //#=> ["Bar", "cel", "ona", "Cod", "eSc", "hoo", "l"]







EXERCISE 8

// Write a function called strCut that takes 3 arguments, the string and 2 indexes, it will then return a string after removing the letters of the 2 given indexes.

// Example:

strCut('Antonello', 0,8)
//"ntonell"
strCut('Antonello', 3,5)
//"Antnllo"
strCut('Antonello', 2,8)
//"Anonell"










EXTRA CHALLENGE:

// Rock-paper-scissors

// Requirements:
// - The computer should choose randomly every turn
// - The player can click on a picture representing the option and choose it.
// - You should see if you won or lost at every turn
// - in order to win the match the player or the computer needs to win twice.
// - there need to be a score keeper to  show the current score of the player and the computer.
// - In case both select the same option then is a draw and no points should be given out.

// ----------

// ***Your solution goes to Rock_paper_scissors folder
// if you are going to add UI ***






