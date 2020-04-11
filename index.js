// npm package
var inquirer = require("inquirer");

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var Word = require("./word.js")

// Randomly selects a word and uses the Word constructor to store it
// var alphabet = 'abcdefgjijklmnopqrstuvwxyz'

var coffeeDrinks = ['affogato', 'americano', 'latte', 'cappuccino', 'espresso', 
'frappe', 'macchiato', 'lungo', 'ristretto', 'mocha'];


// Prompts the user for each guess and keeps track of the user's remaining guesses

let guesses;
let selectedCoffees; 
let word;
let selectedWord; 

function init() {
    selectedCoffees = [];
    console.log("Welcome to the Coffee Drink Word Guess Game!");
    console.log("------------------------------------------");
    playGame();
  }
  
  function playGame() {
    pickedWord = "";
    guesses = 10;
    if(selectedCoffees.length < coffeeDrinks.length) {
        selectedWord = getWord();
    } else {
      // WIN CONDITION
      console.log("You must love coffee!");
      continuePrompt();
    }
    if(selectedWord) {
      word = new Word(selectedWord);
      word.makeLetters();
      makeGuess();
    }
  }
  
  function getWord() {
    let rand = Math.floor(Math.random() * coffeeDrinks.length);
    let randomWord = coffeeDrinks[rand];
    if(selectedCoffees.indexOf(randomWord) === -1) {
        selectedCoffees.push(randomWord);
      return randomWord;
    } else {
      return getWord();
    }
  }
  
  function makeGuess() {
    let checker = [];
    inquirer.prompt([
      {
        name: "guessedLetter",
        message: word.update() + 
                "\nGuess a letter!" +
                "\nYou have " + guesses + " guesses left"
      }
    ])
    .then(data => {
      word.letters.forEach(letter => {
        letter.checkLetter(data.guessedLetter);
        checker.push(letter.getCharacter());
      });
      if(guesses > 0 && checker.indexOf("_") !== -1) {
        guesses--;
        if(guesses === 0) {
          console.log("You are out of Guesses! Try Again");
          continuePrompt();
        } else {
          makeGuess();
        }
      } else {
        console.log("Hooray! That's Correct");
        console.log(word.update());
        playGame();
      }
    });
  }
  
  function continuePrompt() {
    inquirer.prompt([
        {
          name: "continue",
          type: "list",
          message: "Would you like to play again?",
          choices: ["Yes", "No"]
        }
      ])
    .then(data => {
        if(data.continue === "Yes") {
          init();
        } else {
          console.log("Thanks for playing!");
        }
    });
  }
  
  init();