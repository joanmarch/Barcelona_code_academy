var tellAgeTest = (m, d, y) =>{
    var timeDiff = new Date() - new Date(`${m}/${d}/${y}`);
   if ( timeDiff < 1) return "You can't be born in the future!"
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    days > 365 ? days = `You are ${parseInt(days/365)} ${parseInt(days/365) > 1 ? 'years' :'year'} old` : days = `You are ${days} ${days > 1 ? 'days' :'day'} old`;
    return days
}

module.exports = {
    tellAgeTest
}