const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup()

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups(i))
})

function highlightCups(i) {
  if (smallCups[i].classList.contains('full')
    && !smallCups[i].nextElementSibling.classList.contains('full'))
    i--

  smallCups.forEach((cup, ind) => ind <= i
    ? cup.classList.add('full')
    : cup.classList.remove('full')
  )

  updateBigCup()

}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  hasNoFullCups(fullCups, totalCups)

  isBigCupFull(fullCups, totalCups)

  areSevenCupsFull(fullCups, totalCups)
}

function hasNoFullCups(fullCups, totalCups) {

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }
}

function isBigCupFull(fullCups, totalCups) {
  if (fullCups === totalCups) {
    remained.style.visibility = 0
    remained.style.height = 0
  } else {
    liters.innerText = `${(2 - (250 * fullCups / 1000))} L`
  }
}

function areSevenCupsFull(fullCups, totalCups) {
  if (fullCups === totalCups - 1) {
    liters.style.fontSize = '14px';
    remained.style.fontSize = '12px'
  } else {
    liters.style.fontSize = '16px';
    remained.style.fontSize = '14px'
  }
}