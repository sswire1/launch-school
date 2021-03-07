const readline = require('readline-sync');

const VALID_CHOICES = ['paper','rock', 'scissors'];
const VALID_YN = ['y','n'];


let prompt = (message) => {
  console.log(`=> ${message}`);
};


prompt("Would you like to play some rock-paper-scissors?(y/n)");
let continuePlaying = readline.question().toLowerCase();

while (!VALID_YN.includes(continuePlaying)) {
  prompt("Please choose again");
  continuePlaying = readline.question().toLowerCase();
}
let userWinCount = 0;
let computerWinCount = 0;

let decisionMatrix = (user, computer) => {
  if ((user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'rock' && computer === 'scissors')) {
    prompt("User wins!");
    userWinCount += 1;
  } else if ((user === 'scissors' && computer === 'rock') ||
                 (user === 'paper' && computer === 'scissors') ||
                 (user === 'rock' && computer === 'paper')) {
    prompt("Beep Boop, Robot Wins!");
    computerWinCount += 1;
  } else {
    prompt("It's a tie!");
  }
};


while (continuePlaying === 'y' ) {

  prompt("What is your first choice? (Rock, paper, or scissors)");
  let userChoice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("Please choose again");
    userChoice = readline.question().toLowerCase();
  }

  let randomInt = (arr) => Math.floor(Math.random() * arr.length);
  let computerInt = randomInt(VALID_CHOICES);
  let computerChoice = VALID_CHOICES[computerInt];
  prompt(`You choose ${userChoice} and the Robot chooses ${computerChoice}`);

  decisionMatrix(userChoice,computerChoice);
  prompt(`User Total Wins:${userWinCount} \n Computer Total Wins:${computerWinCount}`);

  if (userWinCount > 5 || computerWinCount > 5) {
    prompt ("Best of Five Series is now complete");
    continuePlaying === 'n';
  } else {
    prompt("Would you like to play again?");
    continuePlaying = readline.question().toLowerCase();
  }
}

prompt(`Final Count: \n User Total Wins:${userWinCount} \n Computer Total Wins:${computerWinCount}`);
prompt("Thanks for playing!");