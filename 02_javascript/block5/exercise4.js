//EXERCISE 4

// write a function called tellAge that tells you how old you are based on the date of birth passed.
// this function will take 3 arguments month, day and year
// You should use the Date object to set the value of today.
// if the birth date is less than one year from the current date it should return : "you are NUMBER_DAYS old"
// if its more than one year it should return you are NUMBER_YEARS old"
// Info on Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function tellAge (month, day, year){
    var currentDate = new Date();
    var yearsOld = (currentDate.getFullYear() - year);
    var daysOld = month*30 + day;
    if (yearsOld < 1){
        return "you are " + daysOld + " days old"; 
    }else{
        return "you are " + yearsOld +" years old";
    }
}

//========================EXAMPLES========================
// assuming today is April 11, 2018
console.log(tellAge(8,2,1982));
//you are 35 years old

tellAge(4,3,1982)
//you are 36 years old

console.log(tellAge(4,9,2019));
//you are 2 days old

module.exports = {
    tellAge
}