EXERCISE 1:
//write a funtion called assigner which takes 2 arguments, an array and an index.
// it then takes one element from the provided array at the given index and place it in a new array then returns it.
//Then return arr2.
var arr   = ['milk','cheese','car','lime'];
var index = 2; 
// assigner (arr, 2)  should return ['car']







// !! Exercises 2-9 should return stringified output, i.e:
return String(your_code_goes_here)

EXERCISE 2:
//write a function called takeAll which takes an array as argument, it then returns a new array which has all values of the original array but in reverse order.
//Please convert your array to a string before returning it.
//=========================Example=========================
//BAD:  return myNewArray
//GOOD: return String(myNewArray)
var arr = ['milk','cheese','car','lime']
//example takeAll(arr) returns ["lime", "car", "cheese", "milk"]







EXERCISE 3:
//create a function called swap which takes two arrays as the first two arguments and a position as the third
//It then returns the two arrays swapping the value at the position passed as argument.
// return both arrays inside another array (as a string) see example below:
//EXAMPLE
//========GOOD=========
//function swap(arr, arr2, pos){
// ...your code goes here
//return String([arr, arr2])
//}
//=========BAD=========
//function swap(arr, arr2,pos){
// ...your code goes here
//return arr, arr2
//}
var arr  =  ['banana','apple','orange'], 
arr2 =  ['tv','dvd-player','playstation'], 
pos  =  2;

//EXAMPLE
swap(arr, arr2, pos)
// returns (2) [Array(3), Array(3)]
//["banana", "apple", "playstation"]
//["tv", "dvd-player", "orange"]









EXERCISE 4:
// define two variables: an array(you can use the example) and another one called position(a number)
//create a function called splicer which removes an element from an array and returns the array with the element removed.
//this function takes two arguments:
//the array
//the position of the element in the array to be removed.
//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)

var arr = ['cheese','salame','bread','water','pizza']

//expected output:arr = ['cheese','salame','water','pizza']








EXERCISE 5:
//declare a variable called arr =(use example array)
//write a function called removeFirstAndLast
//it takes an array as an argument and returns an array of which the first and last elements have been removed.

var arr = ['car','soap','banana','tv','toothbrush']
//expected output array = ['soap','banana','tv']

//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)








EXERCISE 6:
//declare a variable called arr (use example array)
//write a function called removeAll 
//it takes an array as an argument and returns an array of which the all elements have be removed.
var arr =[1,2,3,4,5,6,7,8,9,0,3,4,523,44,3454]
//expected output arr =[]
//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)








EXERCISE 7:
// write a function called pusher.
// it takes one argument - an array.
//using push take all elements from the array  and push them to a new variable called arr2
//then return  arr2

var arr = ["one","two","three","four"]
//expected output  ["one","two","three","four"]
//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)








EXERCISE 8:
// create a function called take_and_push which takes 3 arguments, an array and two numbers.
// the second and third arguments are indexes
// you need to take the elements in the array that are at the given index and push them to a new array.
//then return the new array.

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//expected output is the new array with items from the original array with provided indexes
//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)







EXERCISE 9:
//create a function called concatenator which takes an array as argument
// and then using Array.concat it returns a new array which is a clone of the original array.

var arr = ['Breaking bad','WestWorld','Psych','Games of Thrones','Gotham','Spartacus','Dexter','Office']

//Once again please stringify the array before returning it.
//===================example===================
// return String(arr)









EXERCISE 10:
//create a function called findPosition which takes two arguments, an array and an element and it return the index of the given element.
var arr = ['glass','car','watch','sofa','macbook']








EXERCISE 11:
//create a function called isThere which takes an array as first argument and a string as second, it needs to check if the string is inside the array and returns true if it is and false if it's not.



//green, red, pink,

var arr = ['green','red','black','blue','brown','yellow','purple']
//expected output

[true, true, false]








EXERCISE 12:

//now do the same exercise using the method includes only this time you should return false if the color is there and true if it's not!
var arr = ['green','red','black','blue','brown','yellow','purple']
//green, red, pink,

//expected output
//false
//false
//true








EXERCISE 13:
//write a function called characterRemover which takes two arguments, a string and a character to be removed and returns the string free of the unwanted character.
// please note: in order for the string to make sense you should replace the unwanted characters with a space so that your string will look like this:
// I really Like Pizza

var str = 'I,Really,Like,Pizza'








EXERCISE 14
// write a function called isArrayFunc which takes an argument and returns true if it's an array and false if it's anything else.
var one   = {name:'antonello'}
var two   = ['name', 'antonello']
var three = [[],[],{},"antonello",3,function(){}]

//expected output 
false
true
true







