const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const nameUser = document.getElementById('name')
const dateUser = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2000)

function getData() {
  header.innerHTML =
    '<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.W9tH7KLRo8gfWfW2MYYRKQHaDL%26pid%3DApi&f=1" alt="" />'
  title.innerHTML = 'Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis.'
  excerpt.innerHTML =
    'Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.'
  profile_img.innerHTML =
    '<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-9I-lywYyBr4%2FT57dXm7JqAI%2FAAAAAAAANd0%2FhlaAVTdkPlA%2Fs1600%2FMussum%2B1.jpg&f=1&nofb=1" alt="" />'
  nameUser.innerHTML = 'Mussum'
  dateUser.innerHTML = 'April 7, 1941'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

