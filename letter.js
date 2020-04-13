// Letter.js should not require any other files.

// Letter.js: Contains a constructor, Letter. This constructor should be able 
// to either display an underlying character or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. 
// That means the constructor should define:

// A string value to store the underlying character for the letter
function Letter(letter){
    this.letter = letter;

// A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

// A function that returns the underlying character if the letter has 
// been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.getCharacter = function() {
        if(!this.guessed) {
        return "_";
        } else {
         return this.letter;
        }
    }

// A function that takes a character as an argument and checks it against the underlying 
// character, updating the stored boolean value to true if it was guessed correctly
    this.checkLetter = function(guess) {
        if(guess === this.letter) {
        this.guessed = true;
        }
    }
}

module.exports = Letter;