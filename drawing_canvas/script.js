const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const increaseBtn = document.getElementById('increase');
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear');

let size = 10;
let color = colorEl.value;

let isPressed = false;
let xCanvasPos;
let yCanvasPos;

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  xCanvasPos = e.offsetX;
  yCanvasPos = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  xCanvasPos = undefined;
  yCanvasPos = undefined;
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    //defines the x and y Pos when pressed    
    const xCanvasPosPressed = e.offsetX
    const yCanvasPosPressed = e.offsetY
    //draws a circle in that position
    drawCircle(xCanvasPosPressed, yCanvasPosPressed)
    //draws a line from x and y (moveTo) to the pressed X and Y Pos
    drawLine(xCanvasPos, yCanvasPos, xCanvasPosPressed, yCanvasPosPressed)
    // updates the X and Y Pos on the canvas to the X and Y Pos when pressed and mouse moves
    xCanvasPos = xCanvasPosPressed;
    yCanvasPos = yCanvasPosPressed;

  }
})

increaseBtn.addEventListener('click', () => {
  size += 5

  if (size > 50) {
    size = 50
  }

  updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
  size -= 5

  if (size < 5) {
    size = 5
  }

  updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

function drawCircle(xPos, yPos) {
  ctx.beginPath()
  ctx.arc(xPos, yPos, size, 0, Math.PI * 2)
  ctx.fillStyle = color;
  ctx.fill()
}

//x1, y1 (moveTo), x2, y2 (lineTo)
function drawLine(xMoveTo, yMoveTo, xLineTo, yLineto) {
  ctx.beginPath()
  ctx.moveTo(xMoveTo, yMoveTo)
  ctx.lineTo(xLineTo, yLineto)
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke()
}

function updateSizeOnScreen() {
  sizeEL.innerText = size
}


