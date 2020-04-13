// Word.js should only require Letter.js
var Letter = require("./letter.js")

// Word.js: Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user 
// is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
function Word(word){
    this.word = word;
    this.letters = [];

// A function that returns a string representing the word. 
    this.makeLetters = function() {
        let wordArr = this.word.split("");
        for(let i = 0; i < wordArr.length; i++) {
            let newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    };

// This should call the function on each letter object (the first function defined in Letter.js) 
// that displays the character or an underscore and concatenate those together.
    this.makeGuess = function(guess) {
        this.letters.forEach(letter => {letter.checkLetter(guess)});
    };


// A function that takes a character as an argument and calls the guess function on 
// each letter object (the second function defined in Letter.js)
    this.update = function() {
        let printedWord = "";
        this.letters.forEach(letter => {printedWord += letter.getCharacter() + " "});
        return printedWord;
    };
}
module.exports = Word;