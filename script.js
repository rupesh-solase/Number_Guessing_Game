'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

let number = (document.querySelector('.number').value = randomNumber);
let message = document.querySelector('.message');
let score = 20;
let highscore = 0;
const result = function () {
  document.querySelector('.score').textContent = score;
  if (score === 0) {
    message.textContent = 'You Loose!';
    document.querySelector('body').style.backgroundColor = '#e62e00';
    document.querySelector('.number').textContent = number;
  }
};

const guessing = function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message.textContent = 'Not a Number!';
  } else if (guess === number) {
    message.textContent = 'Correct Guess';
    document.querySelector('body').style.backgroundColor = '#60b347';
    result();
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    score--;
    message.textContent = 'Too High';
    result();
  } else if (guess < number) {
    score--;
    message.textContent = 'Too low';
    result();
  }
};

const start = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
  number = document.querySelector('.number').textContent = randomNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  message.textContent = 'Start guessing...';
};

document.querySelector('.check').addEventListener('click', guessing);
document.querySelector('.again').addEventListener('click', start);
