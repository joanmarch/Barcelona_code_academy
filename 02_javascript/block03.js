EXERCISE 1
// create a function called firstLoop
// outside the function declare a variable called i and give it a value of 1
// inside the function create a for loop that prints out the numbers from 1 to 10.
// then return i




EXERCISE 2
// create a function called firstLoopReverse
// outside the function declare a variable called i and give it a value of 11
// inside the function create a for loop that prints out the numbers from 11 to 1.
// them return i





EXERCISE 3

//write a function called isEven which takes an array as argument and check if each element is even or odd.
// inside the function declare a variable called count which keeps track of how many even numbers there are.
// once done return count
// see example below for how to use a basic if statement here.

function isEven(){
    //declare your count
    // loop and inside it...
      if ("_your_condition_here"){
            count++
    }
    return count
}








EXERCISE 4
// declare the following array
var arr = ['one','two','three','four']
// create a function called looper which takes the array as argument
// inside it write a forEach loop which console.log each element and each index for every iteration.
//inside the function declare a variable called count, and increment it by one for each iteration then return count.









EXERCISE 5
// write a function called isString which takes an array as argument.
// inside it write a forEach loop that loops through this example array and checks if the type of each element is a string, 
// every time it finds a string it pushes it into an array.
// return that array

// you can refer to the example in EXERCISE 3 for the simple if statement if you wish.





EXERCISE 6
//write a function called sum which takes an array as argument and then return the sum of all its elements.
// example
// sum([10,10])
// returns 20








EXERCISE 7

//write a function called multy which takes an array as argument and multiply each number and then returns the result.
// example
//multy([10,10])
//returns 100





EXERCISE 8
// write a function called timesTwo which takes an array as an argument.
// inside it use the forEach loop and push the numbers of the array to a new array and multiply them by two on the way!
// then return the new array (stringified)
// ex return String(arr)

// example
timesTwo([2,3,65,22])

// returns  [4, 6, 130, 44]





EXERCISE 9

// write function called twoArrays which takes two arrays as arguments, 
// these arrays are of the same length
// inside it declare a variable called count
// it then loops and compare each element of one array with that of the other, in pairs with same indexes
// and every time it finds a match it increases the number of count by one
// then return count









EXERCISE 10

//now do the same exercise only this time ignore the type.










EXERCISE 11
// write a function called lowerCaseLetters which takes a string as argument.
// the string will contain some upper case letters and some numbers, 
// then create a new variable which needs to contain all the lowercase letters of the original string
// once done return the resulted string 

// original sentence = An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345

// expected output           antonello likes playing games








EXERCISE 12
// write a function called reverser which takes one sting as an argument and returns the same string in reverse.
// you must use
// a loop
// push
// join
var str = 'reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I'

// expected output
// I love deep fried potatoes with mayo and with a nice pint of cold beer








EXERCISE 13
// create a function called shortener which takes a string as argument.
// this string will be a full name like "Antonello sanna"
// you need to convert the name into an abbreviated form (initials), meaning that you take the first letter of the surname, also make sure it is capitalized, and add a dot at the end.
// Examples

// Ada lovelace 
// expected output => "Ada L." 

// Antonello Sanna
// expected output => Antonello S.








EXERCISE 14
// write a function called budgetTracker which helps you keep track of your expenses while on vacation...
// you went on vacation to Japan and now you came back and you need to check your finance a bit and in order to do that you need to find out:

// the average expense per day in dollars, 

// each element of the array will be the daily expense in Japanese yens

// the conversion rate for yen to dollars is 0.0089
// return the daily average
var arr = [
        //monday
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //satuy
        '45334',
        //sunday
        '34856'
        
]


//expected output
//310









