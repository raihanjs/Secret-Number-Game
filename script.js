"use strict";
let secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);
let highScore = 0;
let currentScore = 20;
// Functions Start
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let score = function (cscore) {
  document.querySelector(".score").textContent = cscore;
};
let showSecretNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
let background = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
// Functions End
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  //   If No value Added
  if (!guess) {
    displayMessage("No number");
  }
  //   If Matched
  else if (guess === secretNumber) {
    displayMessage("Correct Number");
    showSecretNumber(secretNumber);
    background("green");
    // HighScore
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highscore").textContent = highScore;
    }
    // HighScore
  }
  //   if Not Matched
  else if (guess !== secretNumber) {
    if (currentScore > 1) {
      displayMessage(guess > secretNumber ? "Too High" : "To low");
      currentScore--;
      score(currentScore);
    } else {
      displayMessage("Game Over");
      score(0);
    }
    background("red");
  }
  //   Reset The Game
  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.ceil(Math.random() * 20);
    displayMessage("Start guessing...");
    currentScore = 20;
    score(20);
    showSecretNumber("?");
    background("#222");
  });
});
