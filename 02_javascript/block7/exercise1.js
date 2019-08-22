function moviesDB (myArr, genre, movieObj){
   
    let genreExist = false;
    let movieExist = false;
myArr.forEach( function(obj){
    if (obj.genre === genre){
        genreExist = true;
        obj.movies.forEach(function (movie){
            if (movie.title === movieObj.title){    
                movieExist = true;   
            }
        })
        movieExist ? console.log("the movie the " + movieObj.title + " is already in the database!") : obj.movies.push(movieObj)
    }
})
if (!genreExist){
    myArr.push({genre : genre ,
                 movieObj});
}
}

DB = [
    {
        genre:'thriller', 
        movies:[
            {
                title:'the usual suspects', release_date:1999
            }
        ]},
        {
        genre:'commedy', 
        movies:[
            {
                title:'pinapple express', release_date:2008
            }
        ]}
];



moviesDB(DB, "commedy", { title:'american pie', release_date:1996} );
moviesDB(DB, "thriller", { title:'the usual suspects', release_date:1999} );
moviesDB(DB, "drama", { title:'Gladiator', release_date:1999} );


module.exports ={
    moviesDB
}