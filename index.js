// npm package
var inquirer = require("inquirer");

// index.js: The file containing the logic for the course of the game, which depends on Word.js and:
var GuessWord = require("./word.js")

// Randomly selects a word and uses the Word constructor to store it
var coffeeDrinks = ['affogato', 'americano', 'latte', 'cappuccino', 'espresso', 
'frappe', 'macchiato', 'lungo', 'ristretto', 'mocha'];


// Prompts the user for each guess and keeps track of the user's remaining guesses

var guesses;
var wordSelected;  //pickedWords
var word;
var wordPicked; //pickedWord

function init() {
    wordSelected = [];
    console.log("Welcome to the Coffee Drink Word Guess Game!");
    console.log("------------------------------------------");
    playGame();
  }

