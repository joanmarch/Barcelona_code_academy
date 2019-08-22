//EXERCISE 5

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
function checkAge(day, month, year){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    if (day > 31 || month > 12){
        return "Error invalid data provided";
    }else if (day === currentDay && month == currentMonth){
        return "Happy birthday";
    }else if (month < currentMonth){
        return "Sorry your birthday is passed out";
    }else if(month === currentMonth){
        if (day < currentDay){
            return "Sorry your birthday is passed out";
        }else {
            return "there are " +(day - currentDay) +" days until your birthday";
        }
    }else if (day <  currentDay) {
        return "there are " +(month - currentMonth -1)+ " months and "+ (30 - currentDay + day) + " days until your birthday";
    }else{
        return "there are " +(month - currentMonth)+ " months and "+ (day - currentDay) + " days until your birthday";
    }
}



console.log(checkAge(2,14,1982));
// There are 6 days until your birthday
 
console.log(checkAge(23,6,1982));
// There is 1 month and 6 days until your birthday

console.log(checkAge(28,10,1982));
// Sorry your birthday is passed for this year

module.exports = {
    checkAge
}