let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
const GAME_VALUES = ["ROCK", "PAPER", "SCISSORS"];
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const randomizedGameValue =
    GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)];

  return randomizedGameValue;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = "tie";
  }
  if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK")
  ) {
    playerScore++;
    roundWinner = "player";
  }
  if (
    (computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection);
  return console.log(roundWinner);
}

const playerScoreField = document.getElementById("player-score");
const computerScoreField = document.getElementById("computer-score");
const roundTextField = document.getElementById("round-text");
const scoreInfoField = document.getElementById("score-info");


const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", () => handleClick("ROCK"));
paperBtn.addEventListener("click", () => handleClick("PAPER"));
scissorsBtn.addEventListener("click", () => handleClick("SCISSORS"));

function handleClick(playerSelection) {
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  updateScore();

  if (isGameOver()) {
    
    setFinalMessage();
    resetGame();
    
  }
}
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}
function setFinalMessage() {
  
  return playerScore > computerScore
    ? (alert('You won!'))
    : (alert('You lost...'))
    
}
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundTextField.textContent = "Score 5 to win the game!";
  scoreInfoField.textContent = "";
  playerScoreField.textContent = "Player: 0";
  computerScoreField.textContent = "Computer: 0";
}

function updateScore() {
  if (roundWinner === "tie") {
    roundTextField.textContent = "It's a tie!";
  } else if (roundWinner === "player") {
    roundTextField.textContent = "You Win!";
  } else if (roundWinner === "computer") {
    roundTextField.textContent = "You lose!";
  }
  playerScoreField.textContent = `Player: ${playerScore}`;
  computerScoreField.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === "player") {
    scoreInfoField.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} beats ${computerSelection.toLowerCase()}`;
    return;
  }
  if (winner === "computer") {
    scoreInfoField.textContent = `${capitalizeFirstLetter(
      playerSelection
    )} is beaten by ${computerSelection.toLowerCase()}`;
    return;
  }
  scoreInfoField.textContent = `${capitalizeFirstLetter(
    playerSelection
  )} ties with ${computerSelection.toLowerCase()}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
