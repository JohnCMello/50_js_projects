const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', e => {
  const inputValue = e.target.value;
  const inputLength = inputValue.length;
  const blurValue = 20 - inputLength * 2;

  background.style.filter = `blur(${blurValue}px)`

})


