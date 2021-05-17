const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

setTime()


toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if (html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark')
    e.innerHTML = 'Light Mode';
  }
})

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursOnClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(hoursOnClock, 0, 11, 0, 360)}deg)
  `
  minuteEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)
  `
  secondEl.style.transform = `
    translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)
  `

  timeEl.innerHTML = `
    ${hoursOnClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm} 
  `

  dateEl.innerHTML = `
    ${daysOfWeek[day]},
    ${monthsOfYear[month]} 
    <span class="circle">${date}</span>
  `
}


function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setInterval(setTime, 1000)

