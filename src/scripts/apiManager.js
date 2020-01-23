const getMovies = () => {
    fetch(url)
    .then(resp => resp.json())
    .then(moviesFromAPI => {
        renderMovies(moviesFromAPI)
    })
}