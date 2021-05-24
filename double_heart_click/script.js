const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = new Date().getTime();
let timesClicked = 0


//custom double-click 
loveMe.addEventListener('click', (e) => {
  (new Date().getTime() - clickTime) < 800
    ? creatHeart(e)
    : clickTime = new Date().getTime()
})

const creatHeart = (event) => {
  const heart = document.createElement('i');
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const xPos = event.clientX;
  const yPos = event.clientY;

  const leftOffSet = event.target.offsetLeft;
  const topOffSet = event.target.offsetTop;

  const xInside = xPos - leftOffSet;
  const yInside = yPos - topOffSet;

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)
  times.innerHTML = ++timesClicked

  setTimeout(() => heart.remove(), 1000)

}