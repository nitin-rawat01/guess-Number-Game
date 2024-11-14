let isPlay = true;
let userAttemptLeft = 10;
let guessField = document.getElementById('subt');
let userInput = document.getElementById('guessField');
let arrayofInput = [];
let randomNumber = Math.round(Math.random() * 100 + 1);
let lowOrHiMessage;
let resultPara = document.querySelector('.resultParas');
let guesses = document.querySelector('.guesses');
let restart = document.createElement('p');
let lastResult = document.querySelector('.lastResult');
lowOrHiMessage = document.querySelector('.lowOrHi');

if (isPlay) {
  guessField.addEventListener('click', function (e) {
    e.preventDefault();
    checkInput(Number(userInput.value));
    userInput.value = '';
  });
}

function checkInput(input) {
  if (!input || isNaN(input)) {
    alert('Please Enter a Number');
  } else if (input < 1) {
    alert('PLease enter a number more than 1');
  } else if (input > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    arrayofInput.push(input);
    checkNumber(input);
    previousGuesses(input);
  }
}

function checkNumber(input) {
  lastResult.innerHTML = --userAttemptLeft;
  // console.log(userAttemptLeft);
  if (userAttemptLeft == 0) {
    lowOrHiMessage = 'Sorry You ran out of Guesses!';
    endGame();
  } else {
    displayMessage(input);
  }
}
function displayMessage(input) {
  lowOrHiMessage = document.querySelector('.lowOrHi');
  if (input > randomNumber) {
    lowOrHiMessage.innerHTML = `Youre guess is too high`;
  } else if (input < randomNumber) {
    lowOrHiMessage.innerHTML = `Youre guess is too low`;
  } else {
    lowOrHiMessage.innerHTML = `You guess it right.Random Number is ${randomNumber}`;
    endGame();
  }
}
function previousGuesses(input) {
  guesses.innerHTML += ` ${input}`;
}
function endGame() {
  document.querySelector('#guessField').disabled = true;
  guessField.disabled = true;
  restart.classList.add('button');
  restart.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultPara.appendChild(restart);
  isPlay = false;
  startGame();
}

function startGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.round(Math.random() * 100 + 1);
    userAttemptLeft = 10;
    arrayofInput = [];
    guesses.innerHTML = '';
    lastResult.innerHTML = 10;
    lowOrHiMessage.innerHTML = '';
    userInput.disabled = false;
    guessField.disabled = false;
    resultPara.removeChild(restart);
    // console.log(randomNumber);
  });
}
