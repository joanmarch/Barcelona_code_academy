var checkAgeTest = (m, d) =>{
	if(m > 12 || d > 31 || m < 1 || d < 1) return "Error invalid data provided"
    if (new Date(`${m}/${d}/${2019}`).toDateString() == new Date().toDateString())return "Happy birhtday!"
    

	var diff =  new Date(`${m}/${d}/${new Date().getFullYear()}`) - new Date() 
	if(diff < 1)return "Sorry your birthday is passed for this year"
    var days = Math.floor(diff / (1000 * 60 * 60 * 24))
    if(days <= 30){
        return `There are ${days} days until your birthday`
    }
    var months = days >= 30 ? days/30 : null
    for (var i = 0; i < Math.floor(months); i ++){
        days -= 30
    }
    var isPlural = (arg, strOne, strTwo) =>{
        var sentence;
        arg > 1 ? sentence = strOne : sentence = strTwo
        return sentence
    }
    months = Math.floor(months)
    days   = Math.floor(days)
    if(months < 1) return `${isPlural(days, 'there are', 'there is')} ${isPlural(days, 'days','day')} until your next birthday`
    if(days < 1  ) return `${isPlural(months,'There are ','There is')} ${isPlural(months, 'months','month')} until your next birthday`
    else{
        return `${isPlural(months,'There are ','There is')} ${months} ${isPlural(months, 'months','month')} and ${days} ${isPlural(days, 'days','day')} until your birthday`
    }
    

}

module.exports = {
    checkAgeTest
}