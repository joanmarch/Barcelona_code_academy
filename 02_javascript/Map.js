// ===== EXERCISE 1 ====

// Create a function called objToMap that takes 2 objects as arguments: one object to take propreties from and a schema object,  and returns a new map with all propreties from one the objects which meet our conditions.
        //conditions
//The key of the object we our trying to clone must be present in our schema object.
// all values of the object must be numbers or convertible to numbers.


//example:

objToMap({name:'Mike', age:22, height:'170cm', sibilings:'3'}, {name:undefined, height:undefined, sibilings:undefined});
//only sibilings meets our condition because is the only element which is a number or convertible to one which is also presetn in our schema.
//Map(1) {"sibilings" => "3"}

// ========= EXERCISE 2 ===========

// Create a function called find_expensive_items which takes 2 arguments a Map and a treshold price, the Map is a shopping list.
// the purpose of this function is to return a new Map with 2 total, the sum of all items above or equal to the treshhold and the sum of these below it,

    // example:

    find_expensive_items(new Map([['bread', 10],['shampoo', 20], ['banana', 34], ['cheese', 12]]), 15);
    // Map(2) {"expensive" => 54, "cheap" => 22}


// =========== EXERCISE 3 =============
// Create a function called mostTimes which takes an array as argument and returns an new Map,
// where the key is the element of the map and the value is how many times it was found.
// for this exercise you are not allowed to use objects.

    // Example:
mostTimes([2, 90,90, 4,8,23,23])
//Map(5) {2 => 1, 90 => 2, 4 => 1, 8 => 1, 23 => 2}

// =========== EXERCISE 4 =============

// Create a function called howManyGifts, this function  will take  a Map as first parameter and a budget as second.//#endregion
// Your task is to but the max numbers of gifts withing the budget, and then retunr a new Map with the total spent and the gifts purchased.//#endregion

gifts
// Map(4) {"ps4" => 300, "game" => 50, "razor" => 190, "speaker" => 58}

howManyGifts(100, gifts);
//Map(1) {"game" => 50}

howManyGifts(400, gifts);
//Map(2) {"ps4" => 300, "game" => 50}