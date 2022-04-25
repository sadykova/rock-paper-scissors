function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

const btns = document.querySelectorAll("button");

function playRound(e) {
  const playerSelection = this.classList.value;
  console.log(playerSelection);
  const computerSelection = computerPlay();
  console.log(computerSelection);
  if (playerSelection == computerSelection) {
    console.log("Tie");
    return "Tie";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("Player wins! Rock crashes Scissors!");
    return "Player wins";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("Player wins! Paper covers Rock!");
    return "Player wins";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("Player wins! Scissors cuts Paper!");
    return "Player wins";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    console.log("Computer wins! Rock craches Scissors");
    return "Computer wins";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    console.log("Computer wins! Paper covers Rock!");
    return "Computer wins";
  } else if (computerSelection == "scissors" && computerSelection == "paper") {
    console.log("Computer wins! Scissors cuts Paper!");
    return "Computer wins";
  }
}

btns.forEach((button) => button.addEventListener("click", playRound));

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (i = 0; i < 5; i++) {
//     let computerChoice = computerPlay();
//     let userChoice = prompt("Make your choice: Rock? Paper? Scissors?");
//     let outcome = playRound(computerChoice, userChoice);
//     if (outcome == "Player wins") {
//       playerScore += 1;
//     } else if (outcome == "Computer wins") {
//       computerScore += 1;
//     } else if (outcome == "Tie") {
//       playerScore += 1;
//       computerScore += 1;
//     }
//   }

//   if (playerScore > computerScore) {
//     console.log(
//       `Player wins! Player: ${playerScore} vs. Computer:${computerScore}`
//     );
//   } else if (playerScore < computerScore) {
//     console.log(
//       `Computer wins! Player: ${playerScore} vs. Computer:${computerScore}`
//     );
//   } else {
//     console.log(`Tie! Player: ${playerScore} vs. Computer:${computerScore} `);
//   }
// }

// game();
