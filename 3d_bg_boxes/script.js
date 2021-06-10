const boxesContainer = document.getElementById('boxes');
const button = document.getElementById('btn');


button.addEventListener('click', () => {
  boxesContainer.classList.toggle('big');
})

function createBoxesEl() {
  const sizeWHBox = 125;

  for (i = 0; i <= 3; i++) {
    for (j = 0; j <= 3; j++) {

      const boxEl = document.createElement('div');
      boxEl.classList.add('box');

      boxEl.style.backgroundPosition = `${-j * sizeWHBox}px ${-i * sizeWHBox}px`

      boxesContainer.appendChild(boxEl);
    }
  }
}

createBoxesEl();