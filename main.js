const questions = require("./questions");

const startBtn = document.getElementById('start');
const question__cont = document.getElementById('question__container');
const answerBtn = document.getElementById('answer__btn');
const nextBtn = document.getElementById('next');

startBtn.addEventListener('click', startQuiz)

function startQuiz() {
  console.log('Quiz Started');
  startBtn.classList.add('hide');
  question__cont.classList.remove('hide');
}


function setNextQuestion() {

}

function getAnswer() {

}
