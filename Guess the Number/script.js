let userGuess = document.querySelector(".user-input");
let result = document.querySelector(".result-area");
let attemptsContainer = document.querySelector(".total-attempts");
let gameBox = document.querySelector(".box-container");
let startMenu = document.querySelector(".start-info");
let correctNumber;
let totalAttempts = 0;
let nullInputCount = 0;

function generateRandomNumber() {
   correctNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
   let userGuessValue = userGuess.value;
   if (nullInputCount >= 1) { // Checks if user has submitted null value more than once
      totalAttempts = 0;
      nullInputCount = 0;
   }
   if (userGuessValue == "" || userGuessValue == " ") {
      result.innerHTML = `<p class = "result-incorrect">Enter something you idiot</p>`;
      nullInputCount++;
   } else {
      if (userGuessValue < 0) {
         result.innerHTML = `<p class = "result-incorrect">No Negative number</p>`;
      } else if (userGuessValue > correctNumber) {
         result.innerHTML = `<p class = "result-incorrect">Lower Number please</p>`;
      } else if (userGuessValue < correctNumber) {
         result.innerHTML = `<p class = "result-incorrect">Higher Number please</p>`;
      } else if (userGuessValue == correctNumber) {
         result.innerHTML = `<p class = "result-correct">Congrats, you guessed it right 🎉</p>`;
         totalAttempts = 0;
         generateRandomNumber(); // Generates new random number after a correct guess
      } else {
         result.innerHTML = `<p class = "result-incorrect">Enter a valid number</p>`;
      }
      if (userGuessValue != correctNumber) {
         totalAttempts++;
      }
   }
   setTimeout(() => {
      userGuess.value = "";
   }, 600);
   attemptsContainer.innerHTML = `<p class = "attempt-count">${totalAttempts}<p>`;
}

function startGame() {
   generateRandomNumber(); // generates new random number when the game is first started
   console.log(correctNumber);
   startMenu.style.display = "none";
   setTimeout(() => {
      gameBox.style.display = "flex";
   }, 50); // Waits for the start-menu to hide first
}
