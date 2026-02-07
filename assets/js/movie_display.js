import MoviesDatabase from "./api.js";

const mDb = new MoviesDatabase();

const GENRES = {
  action: 28,
  adventure: 12,
  animation: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  family: 10751,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scifi: 878,
  tvmovie: 10770,
  thriller: 53,
  war: 10752,
  western: 37
};


let filterOption = document.getElementById("select-filter")
filterOption.addEventListener("change", () => {
  console.log(filterOption.value);
    if(filterOption.value == "genre" || filterOption.value == "title"){
        document.getElementById("input-type").setAttribute("type","text")
    }
    if(filterOption.value == "year"){
        document.getElementById("input-type").setAttribute("type","number")
        document.getElementById("input-type").setAttribute("min","1900")
        document.getElementById("input-type").setAttribute("max","2026")
    }
});
// function to fetch images and posters
const carouselData = async () => {
    let movies = await mDb.fetchMovie();
    console.log(movies)
    let cleanMovieData = []
    for(let movie of movies){
        let objectMovie = {
            "title": movie.title,
            "poster": `http://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        cleanMovieData.push(objectMovie)  
    }
    return cleanMovieData
  }

  carouselData()
window.addEventListener('DOMContentLoaded', () => {

    let moviesContainer = document.getElementById("movies-details")
    for(let i = 0; i<3; i++){

        let movieRow = document.createElement("div")
        movieRow.classList.add("movies-details")
        // movie details -> each card
        for(let z = 0; z< 3; z++){
            let movieDetail = document.createElement("div")
            movieDetail.classList.add("movie")
            let title = document.createElement("h3")
            title.textContent = `Test ${z}`
            let year = document.createElement("p")
            year.textContent = `Test 2025-${z}`
            let genre = document.createElement("h3")
            genre.textContent = `Test comedy-${z}`
            movieDetail.appendChild(title) 
            movieDetail.appendChild(year) 
            movieDetail.appendChild(genre) 
            movieRow.appendChild(movieDetail)
        }
        moviesContainer.appendChild(movieRow)
    }
})