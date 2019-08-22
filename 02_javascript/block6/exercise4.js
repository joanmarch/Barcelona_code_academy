var moviesList = [];

function addToList(movies){
   
    for (let i = 0; i<movies.length;i++){
        let obj = {
            tittle : movies[i],
            id : i
        }
        moviesList.push(obj);
    }
}
    var movies = ['matrix','the dark knight','a beautiful mind','american pie'];
addToList(movies);
console.log(moviesList);


module.exports = {
    addToList
}

