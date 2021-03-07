const readline = require('readline-sync');
let prompt = (message) => {
  console.log(`=> ${message}`);
};

let invalidNum = (num) => {
  return num.trim() === '' ||
         Number.isNaN(Number(num)) ||
         Number(num) < 0;
}; // validity function to confirm that the number provided by the user is !NaN
//const ficoBand // ficoBand object (?) for changing the interest rate
// add an underwriteBorrower function here to determine the interest rate
prompt("What is your loan principal? (50000,100000, etc.)");
let principal = readline.question();

while (invalidNum.principal) {
  prompt("Please choose again");
  principal = readline.question();
}
prompt("What is your annual interest rate (APR)? (1.00, 2.00, etc.)");
let interestAnnual = readline.question();

while (invalidNum.interestAnnual) {
  prompt("Please choose again");
  interestAnnual = readline.question();
}
let interestMonthly = interestAnnual / 12;

prompt("What is the term (in years) of your loan? (5, 10, 30, etc.)");
let termAnnual = readline.question();

let termMonthly = termAnnual * 12;

let payment = principal *
  (interestMonthly / (1 - Math.pow((1 + interestMonthly),(-1 * termMonthly))));
prompt (`Your monthly payment is $${payment.toFixed(2)} per month!`);

