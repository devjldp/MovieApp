// import { Autoplay } from "swiper/modules";
import MoviesDatabase from "./api.js";

const mDb = new MoviesDatabase();

// function to fetch images and posters
const carouselData = async () => {
    let movies = await mDb.fetchMovie();
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

const displayCarousel = async () => {
  let movies = await carouselData()
  console.log(movies)
  let parentContainer = document.getElementById('carousel-container');
  
  for(let movie of movies){
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    const img = document.createElement('img');
    img.src = movie.poster
    slide.appendChild(img)
    // Set slide size
    // slide.style.width = "250px";
    // slide.style.height = "750px";
    // slide.style.borderRadius = "10px";
    // slide.style.backgroundColor = "#f0f0f0";
    // slide.style.backgroundImage = `url(${movie.poster})`;
    // slide.style.backgroundSize = "cover";
    // slide.style.backgroundPosition = "center";
    // slide.style.display = "flex";
    // slide.style.alignItems = "flex-end";
    // slide.style.justifyContent = "center";
    // slide.style.color = "white";
    // slide.style.fontWeight = "bold";
    // slide.style.textShadow = "1px 1px 4px rgba(0,0,0,0.7)";
    // slide.style.padding = "10px";
    // slide.textContent = movie.title;

    parentContainer.appendChild(slide);
  }

} 



// Esperar a que todo esté listo
window.addEventListener('DOMContentLoaded', async () => {
  await displayCarousel();

  // Inicializar Swiper global
  new window.Swiper('.swiper', {
    // modules: [Navigation, Pagination],
    speed: 500,
    spaceBetween: 30,
    direction: 'horizontal',
    slidesPerView:3,
    loop: true,
    autoplay: {delay: 2000},
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    scrollbar: { el: '.swiper-scrollbar', draggable: true },
      effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      slideShadows: true,
    },
  });
});