const GAME_VALUES = new Array("ROCK", "PAPER", "SCISSORS");

function getComputerChoice() {
  const randomizedGameValue =
    GAME_VALUES[Math.floor(Math.random() * GAME_VALUES.length)];

  return randomizedGameValue;
}

// function playerSelection() {

//     playerValue = prompt("Choose Rock, Paper or Scissors");
//     return playerValue;
// }

function getPlayerChoice() {
  const chosenGameValue = prompt("Choose rock, paper or scissors");

  const x = chosenGameValue.toUpperCase();

  if (x === "ROCK") {
    return "ROCK";
  } else if (x === "PAPER") {
    return "PAPER";
  } else if (x === "SCISSORS") {
    return "SCISSORS";
  } else {
    alert("Choose the right thing...");
    return getPlayerChoice();
  }
}



function gameRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection;
  const computerChoice = computerSelection;

  console.log("PLAYER: " + playerChoice);
  console.log("COMPUTER: " + computerChoice);

  if (playerChoice === computerChoice) {
    return "It's a tie";
  }

  if (playerChoice === "ROCK") {
    if (computerChoice === "SCISSORS") {
      return "Player wins, Rock beats Scissors";
    } else {
      if (computerChoice === "PAPER") {
        return "Player LOSES, Paper beats Rock";
      }
    }
  } else if (playerChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      return "Player wins, Paper beats Rock";
    } else {
      if (computerChoice === "SCISSORS") {
        return "Player LOSES, Scissors beats Paper";
      }
    }
  } else {
    if (computerChoice === "PAPER") {
      return "Player Wins, Scissors beat paper";
    } else {
      if (computerChoice === "ROCK") {
        return "Player LOSES, Rock beats Scissors";
      }
    }
  }
}

function game() {
    for (let i = 0; i<5; i++) {
        console.log("Round number " + (i+1))
        console.log(gameRound(getPlayerChoice(), getComputerChoice()))
        
    }
}

game();
// console.log(gameRound(getPlayerChoice(), getComputerChoice()));
