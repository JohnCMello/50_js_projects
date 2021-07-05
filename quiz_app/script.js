//Questions and aswers
const quizData = [
  {
    ques: 'What is the rarest M&M color?',
    a: 'Brown',
    b: 'Red',
    c: 'Yellow',
    d: 'Green',
    corr: 'a'
  },
  {
    ques: 'In a website browser address bar, what does “www” stand for?',
    a: 'Whole Wide World',
    b: 'Wild Wild West',
    c: 'World Wide Web',
    d: 'Who What Where',
    corr: 'c'
  }, {
    ques: 'In what year were the first Air Jordan sneakers released?',
    a: '1983',
    b: '1984',
    c: '1985',
    d: '1986',
    corr: 'b'
  }, {
    ques: 'In a game of bingo, which number is represented by the phrase “two littleducks”?',
    a: '55',
    b: '44',
    c: '33',
    d: '22',
    corr: 'd'
  }, {
    ques: 'According to Greek mythology who was the first woman on earth?',
    a: 'Helen of Troy',
    b: 'Medea',
    c: 'Pandora',
    d: 'Penelope',
    corr: 'c'
  }, {
    ques: 'Which African country was formerly known as Abyssinia?',
    a: 'Ethiopia',
    b: 'Nigeria',
    c: 'Rep. of Congo',
    d: 'Tanzania',
    corr: 'a'
  }, {
    ques: 'In which European city would you find Orly airport?',
    a: 'Berlin',
    b: 'Lisbon',
    c: 'Stockholm',
    d: 'Paris',
    corr: 'd'
  }
];

//app

const questionEl = document.getElementById('quest-text');
const text_aEl = document.getElementById('answer-a')
const text_bEl = document.getElementById('answer-b')
const text_cEl = document.getElementById('answer-c')
const text_dEl = document.getElementById('answer-d')
const btnEl = document.getElementById('submit-btn');

let quizCounter = 0;
let score = 0;

function getQuizData() {
  const currentQuizInfo = quizData[quizCounter]

  questionEl.innerText = currentQuizInfo.ques;
  text_aEl.innerText = currentQuizInfo.a
  text_bEl.innerText = currentQuizInfo.b
  text_cEl.innerText = currentQuizInfo.c
  text_dEl.innerText = currentQuizInfo.d

}

getQuizData()

btnEl.addEventListener('click', () => {
  quizCounter++
  return quizCounter < quizData.length ? getQuizData() : alert('Quiz finished')
})