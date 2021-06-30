const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navList = document.querySelectorAll('.nav')


openBtn.addEventListener('click', () => {
  navList.forEach(navEl => {
    navEl.classList.add('visible')
  })
})

closeBtn.addEventListener('click', () => {
  navList.forEach(navEl => {
    navEl.classList.remove('visible')
  })
})