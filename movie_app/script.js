const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=471412949367a97f820776cdfbca801a&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=471412949367a97f820776cdfbca801a&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const {
      title,
      poster_path,
      overview,
      vote_average
    } = movie;

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      >
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  return vote >= 8 ? 'high-rate' : vote >= 5 ? 'average-rate' : 'low-rate'
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm)

    search.value = '';
  } else {
    window.location.reload()
  }
})