const resultEl = document.getElementById('result');
const filterEl = document.getElementById('filter');
const listItems = [];


filterEl.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50')
  const { results } = await res.json()

  resultEl.innerHTML = ''

  results.forEach(user => {
    const liEl = document.createElement('li')

    listItems.push(liEl)

    liEl.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city} </p>
        <p><strong>${user.location.country}</strong></p>
      </div>
    `

    resultEl.appendChild(liEl)
  })
}

function filterData(searchTerm) {
  listItems.forEach(item => item.innerText.toLowerCase().includes(searchTerm.toLowerCase())
    ? item.classList.remove('hide')
    : item.classList.add('hide'))
}

getData()






//   <div class="user-info">
//   <h4>Mussum</h4>
//   <p>Cacilds</p>
//   </div>
//   </li>
//   <li>
//   <img src="http://1.bp.blogspot.com/-_GuanmHPqYk/T57caPyXCzI/AAAAAAAANdk/hUVCoQt0Avs/s1600/Mussum+4.jpg" alt="">

//   <div class="user-info">
//   <h4>Mussum</h4>
//   <p>Cacilds</p>
//   </div>
//   </li>
//   <li>
//   <img src="http://1.bp.blogspot.com/-_GuanmHPqYk/T57caPyXCzI/AAAAAAAANdk/hUVCoQt0Avs/s1600/Mussum+4.jpg" alt="">

//   <div class="user-info">
//   <h4>Mussum</h4>
//   <p>Cacilds</p>
//   </div>
//   </li>
// `
