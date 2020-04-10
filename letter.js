// Letter.js should not require any other files.

// Letter.js: Contains a constructor, Letter. This constructor should be able 
// to either display an underlying character or a blank placeholder 
// (such as an underscore), depending on whether or not the user has guessed the letter. 
// That means the constructor should define:

// A string value to store the underlying character for the letter
function Letter(guessLetter){
    this.letter = guessLetter;

// A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;

// A function that returns the underlying character if the letter has 
// been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.toString = function(){
        if (this.letter === ' ') {
            thisguess = true;
            console.log(' ');
        } else {
            if (this.guess === false){
                console.log('_')
            } else {
                console.log(this.letter);
            }
        }
    };
// A function that takes a character as an argument and checks it against the underlying 
// character, updating the stored boolean value to true if it was guessed correctly
    this.guessedKey = function(){
        if (guessedKey === this.letter){
            this.guessed = true;
            console.log(guessed);
        }
    };
}

module.exports = Letter;