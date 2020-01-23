const url = "http://localhost:8088/movies"
//container to put movies in from HTML 
const movieContainer = document.querySelector("#movie-container")
//function that fetches our data and calls on rendermovies to console.log each movie


//function that loops through each movie and console logs the movie
const renderMovies = (movies) => {
    movies.forEach(movie => {
        
        //movieHTML holds value that makes HTML of each movie
        const movieHTML = movieFactory(movie);
        movieContainer.innerHTML += movieHTML;
        
    })
}
//HTML representation of each movie in movies array
const movieFactory = (movie) => {
    return `
    <section class="movie">
    <div>
    Title: ${movie.title}
    </div>
   <p>
    Date: ${movie.yearReleased} 
    </p>
    </section>
   `;
};