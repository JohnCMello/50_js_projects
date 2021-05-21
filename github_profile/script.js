const API_URL = 'http://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const user = search.value;

  if (user) {
    getUser(user)

    search.value = '';
  }
})

const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);

    createUserCard(data)
    getRepos(username)
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('Something went wrong')
    }
  }
}

const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');

    addReposToCard(data)
  } catch (err) {
    createErrorCard('Something went wrong with the repos')
  }
}

const createUserCard = (user) => {
  const { avatar_url, name, bio, followers, following, public_repos } = user;

  const cardHTML = `
  <div class="card">
      <div>
        <img
          src="${avatar_url}"
          alt="" class="avatar">
      </div>
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio}</p>

        <ul>
          <li>${followers}<strong>Followers</strong></li>
          <li>${following}<strong>Following</strong></li>
          <li>${public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

const createErrorCard = (msg) => {
  const cardHTML = `
    <div class="card"> 
      <h1>${msg}</h1>
    </div>
  `
  main.innerHTML = cardHTML
}

const addReposToCard = (repos) => {
  const reposEl = document.getElementById('repos');

  repos
    .slice(0, 10)
    .forEach(repo => {
      const { html_url, name } = repo

      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = html_url
      repoEl.target = '_blank'
      repoEl.innerText = name

      reposEl.appendChild(repoEl)
    })
}