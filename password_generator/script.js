const resultEl = document.getElementById('result');
const lengthtEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipborad');

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) return

  textarea.value = password;

  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  alert('Password copied to clipboard')
})

generateEl.addEventListener('click', () => {
  const length = +lengthtEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length)

})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = undefined;
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }]
    .filter(item => Object.values(item)[0]);

  if (!typesCount) return ''

  for (i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const functionName = Object.keys(type)[0]
      generatedPassword += randomFunction[functionName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

function getRandomLower() {
  // 26 letters in the alphabet + 97 to get a random lowercase letter from 97 to +26 in the ASCII table
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
  // 26 letters in the alphabet + 65 to get a random uppercase letter from 65 to +26 in the ASCII table
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  // 10 numbers + 48 to get a random symbolfrom 48 to +10 in the ASCII table
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  // 15 symbols + 97 to get a random symbol from 33 to +15 in the ASCII table
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
}



