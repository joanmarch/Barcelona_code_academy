EXERCISE 1 matchThemUp

    // create a function called matchThemUp, this function will take two arguments, 
    // the name of a male and that of a female.
    // it will ask both the below questions and if they have at least 50% of answers in 
    // common it will alert "we have a match" otherwise it will alert "no match found!"
    
    // - all questions must be answered with yes or no.
    // - you should use prompt to ask questions unless you feel like building a UI.
    // - you should end every question with the name of the person you are asking 
    // the question to.
    // example:
    // "do you like going to the movies Mike?"
    // questions:
    // 1) do you like pets ? 
    // 2) do you like beer ? 
    // 3) do you like reading books ?
    // 4) do you enjoy riding a bike ? 
    // 5) do you like mainstream music the most ? 







    
    
    


EXERCISE 2

    // Write a function called recursive that loops (using recursion) through an array of objects(name : age).
    // it should take each pair and push them to an empty array as nested arrays. 

    // Example:

    var arr =[{name:'mike', age:22},{name:'robert', age:12},{name:'roger', age:44},{name:'peter', age:28},{name:'Ralph', age:67}] 
    var arr2 = []
    recursive(...your arguments)
    returns 
    [
        [ mike, 22]
        [ robert, 12]
        [ roger, 44]
        [ peter, 28]
        [ ralph, 67]
    ]










EXERCISE 3

    // Write a function called tally to select all the unique elements of an array and count how many times the element has been repeated.
    // Then you create an object with 2 elements for each number the first is the number and the second is how many time it was repeated.

    // Example:

    tally([2,3,4,5,5,5,5,5,5,5,6,7,,6,7,6,7,5,4,3,4,5,5,6])
    //{2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}








EXERCISE 4

    // extend tally so that now it can take two arguments, if the second argument is missing it will default 
    //to obj, if the second item is anything but arr it will default to obj.
    // if the second argument is arr then instead of returning an object with the number as key and how many 
    //times it was in the array as values you should return arrays where the first elements is the number and the second is how many times it was in the array.
    
    // Example:

    tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'arr')
    //[2, 1]
    //[3, 2]
    //[4, 3]
    //[5, 10]
    //[6, 4]
    //[7, 3]
    //====================//
    tally([2,3,4,5,5,5,5,5,5,5,6,7,6,7,6,7,5,4,3,4,5,5,6], 'obj')
    //{2: 1, 3: 2, 4: 3, 5: 10, 6: 4, 7: 3}








EXERCISE 5

    // write your own sorting function to sort an array of numbers.
    // this function can take up to 2 arguments
    // the first is the array that you wish to sort
    // the second is the order of sorting
    // if the second argument is not passed it should default to 'ascending'
    // if the second argument is passed and is 'descending then it should sort the array in descending order'
    // if the second argument is passed but is not ascending nor descending it should return an error message alerting the user that he/she passed the wrong data.
    
    // You can't use any built-in methods apart from console.log, alert and document.write
    // try splitting this task into smaller inner functions to avoid repetition and a 
    // gigantic unreadable if statements.
    // 
    // Example:

    sorter([11111,9,10,12,3,321])
    //(6) [3, 9, 10, 12, 321, 11111]
    sorter([11111,9,10,12,3,321],'ascending')
    //(6) [3, 9, 10, 12, 321, 11111]
    sorter([11111,9,10,12,3,321],'descending')
    //(6) [11111, 321, 12, 10, 9, 3]
    sorter([11111,9,10,12,3,321],'whatever')
    //wrong order provided whatever please provide us with ascending or descending order instructions
 






   







EXERCISE 6
    //Create a server function called Server which allows us to create bank accounts at will, we should be able to add them, deleting them,
    // updating them (name and amount), withdraw and deposit, as well as sorting them by name and amount.
    // it should also make sure that an account with the same name cannot be added more than once.
    //all operation to delete, update, withdraw and deposit should be done using a numeric id which you are in charge to generate and make sure is unique.
    //Also make sure delete that the id doesn't shift if one item is removed.
    //ONLY the Server constructor function should be defined, I will call a new instance if it as below

    //var server = new Server ()


    //==============================================API to follow:==============================================
    // server.app.post('accounts/new/:name/:amount')
    // server.app.get('accounts/sort/:by/:order')
    // server.app.get ('accounts/find')
    // server.app.get ('accounts/find/:id')
    // server.app.post('accounts/withdraw/:id/:amount')
    // server.app.post('accounts/deposit/:id/:amount')
    // server.app.post('accounts/delete/:id')
    // server.app.post('accounts/update/:id/:amount/:name')

    // for the sorting the expected values are :
    // for order : 'asc' and 'desc' which you can hopefully guess what they mean...
    // for by    :  'amount' and 'name'


    //if the page is not found it should return the following message: '404 page not found'
    //if I try adding the same account twice it should return 'Account {ACCOUNT NAME} already present in db'








Challenge

// Create a calculator with a graphical interface similar to that shown on the picture 
// below,(or better...).
// This calculator needs to work with the basic operations (add, subtract, multiply and divide). Also add a clear button to clear the display on click. For the layout you may consider using the bootstrap grid system
    
// https://d2mxuefqeaa7sj.cloudfront.net/s_2DBAB7755F46B144CA2C8E6AE35D3FCDF36D0DB9BBEEEBF1654201DF0011FFDB_1509884234526_image.png

***Your solution goes to UI_Calculator folder***





