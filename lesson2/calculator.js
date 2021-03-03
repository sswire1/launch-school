const readline = require('readline-sync');
const config = require('./calc_config.json');

const VALID_CHOICES = ['y','n'];
const VALID_OPERATIONS = ['1','2','3','4'];
const VALID_LANGUAGE_CODES = ['en','zh','es'];

let prompt = (message) => {
  console.log(`=> ${message}`);
};

let invalidNum = (num) => {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}; // validity function to confirm that the number provided by the user is !NaN

//begin interaction with user
prompt(config.chooseLanguagePrompt);
let languageChoice = readline.question();

while (!VALID_LANGUAGE_CODES.includes(languageChoice)) {
  prompt("Please choose again");
  languageChoice = readline.question();
}


let promptCaller;
switch (languageChoice) {
  case 'en':
    promptCaller = config.promptLanguage.en;
    break;
  case 'zh':
    promptCaller = config.promptLanguage.zh;
    break;
  case 'es':
    promptCaller = config.promptLanguage.es;
    break;
}

console.log(promptCaller.openingPrompt);

prompt(promptCaller.beginCalculatingPrompt);
let beginCalculating = readline.question();

while (!VALID_CHOICES.includes(beginCalculating)) {
  prompt(promptCaller.validateYNPrompt);
  beginCalculating = readline.question();
}


while (beginCalculating.toLowerCase() === 'y') {
  prompt(promptCaller.firstNumberPrompt);
  let number1 = readline.question();

  while (invalidNum(number1)) {
    prompt(promptCaller.invalidNumberPrompt);
    number1 = readline.question();
  }

  prompt(promptCaller.secondNumberPrompt);
  let number2 = readline.question();

  while (invalidNum(number2)) {
    prompt(promptCaller.invalidNumberPrompt);
    number2 = readline.question();
  }

  prompt(promptCaller.operationChoicePrompt);
  let operation = readline.question();

  while (!VALID_OPERATIONS.includes(operation)) {
    prompt(promptCaller.invalidOperationPrompt);
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }


  prompt(`= ${output}`);

  prompt(promptCaller.calculateMorePrompt);
  beginCalculating = readline.question();

  while (!VALID_CHOICES.includes(beginCalculating)) {
    prompt(promptCaller.validateYNPrompt);
    beginCalculating = readline.question();
  }
}

prompt(promptCaller.terminationPrompt);