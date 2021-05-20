const nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
  // navbar is 69 tall
  window.scrollY > nav.offsetHeight + 151
    ? nav.classList.add('active')
    : nav.classList.remove('active')
}