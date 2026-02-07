import TMDB_Token from "./config.js";

class MoviesDatabase{
    options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: TMDB_Token
      }
    };

    getRandomPage(){
        return Math.floor(Math.random()*9)
    }

    getUrl(){
        return `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en&page=${this.getRandomPage()}&region=GB&sort_by=vote_count.desc`;
    }
    getUrlRecentMovies(){
        return `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en&page=${this.getRandomPage()}&region=GB&primary_release_year=2025&sort_by=vote_count.desc`;

    }

    async fetchMovie(){
        try {
            const response = await fetch(this.getUrl(), this.options)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            let movies = data.results
            return movies
        } catch (error) {
            console.error("Failed to fetch movie:", error)
            return []
        }
    }

    async fetchRecentMovies(){
        try {
            const response = await fetch(this.getUrlRecentMovies(), this.options)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            let movies = data.results
            return movies
        } catch (error) {
            console.error("Failed to fetch movie:", error)
        }
    }
}



export default MoviesDatabase;