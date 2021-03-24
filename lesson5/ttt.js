/* High Level step overview
Display the initial empty 3x3 board.
Ask the user to mark a square.
Computer marks a square.
Display the updated board state.
If it's a winning board, display the winner.
If the board is full, display tie.
If neither player won and the board is not full, go to #2
Play again?
If yes, go to #1
Goodbye!
*/

/*
- readline to ask user if they want to play -> if yes enter the while loop; if no, break
-readline to ask user if they want to be x or o
-start loop
-Function for 3x3 board where all 9 possible values are indexes of an object where the user/computer choices are inputted
- computer choice is a random integer between 0-9 to select an empty space based on what object values are still ''
-Function to determine if board is full -> if yes, show tie; if no -> determine if there is a winning board
-Function to determine if a winning board exists -> if yes, show winner and jump to play again; if no -> restart choice module
-ask user if they want to play again; if yes -> clear board; if no -> break
-while loop break -> goodbye

----
Questions: How are we going to represent what options are available? Box numbers?
*/






//constants
const readline = require('readline-sync');
const VALID_YN = ['y','n'];

let prompt = (message) => {
    console.log(`=> ${message}`);
};

// Functions

// create board

//return current board after each choice

//determine if board is full

//determine if a winning board exists

//enter loop logic
prompt("Would you like to play some tick-tack-toe?(y/n)");
let continuePlaying = readline.question().toLowerCase();

while (!VALID_YN.includes(continuePlaying)) {
    prompt("Hmmmm... looks like you didn't enter y or n. Please choose again");
    continuePlaying = readline.question().toLowerCase();
  };


//while loop
while (continuePlaying === 'y'){




    prompt("Would you like to play again?(y/n)");
    let continuePlaying = readline.question().toLowerCase();

}



//game completed & goodbye message

prompt("Thanks for playing!");
