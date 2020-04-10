// Word.js should only require Letter.js
var Letter = require("./letter.js")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user 
// is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
function GuessWord(word){
    this.guessWordArr = [];

// A function that returns a string representing the word. 
    for (let wordIndex = 0; wordIndex < word.length; wordIndex++) {
        let wordIndex = new Letter(word[wordIndex]);
        this.guessWordArr.push(letter);  
    }

// This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together.
    this.display = function(){
        letterDisplay = '';
        for (let displayIndex = 0; displayIndex < this.guessWordArr.length; displayIndex++) {
            letterDisplay += this.guessWordArr[displayIndex] + ' ';
        }
        console.log(letterDisplay);
    };
}

// A function that takes a character as an argument and calls the guess function on 
// each letter object (the second function defined in Letter.js)
this.userGuess = function(input) {
    for (let guessIndex = 0; guessIndex < this.guessWordArr.length; guessIndex++) {
      this.guessWordArr[guessIndex].guessedKey(input);
    }
  };

module.exports = GuessWord;