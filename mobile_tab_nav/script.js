const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('.item')

listItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideAllContents()
    hideAllItems()

    item.classList.add('active')
    contents[i].classList.add('show')
  })
})

const hideAllContents = () => {
  contents.forEach(content => content.classList.remove('show'))
}

const hideAllItems = () => {
  listItems.forEach(item => item.classList.remove('active'))
}
