// Homework: The Word Guesser

// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

let wordLetters = ['F', 'O', 'X'];
let guessedLetters = ['', '', ''];
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// Clean Answer
let guessLetter = function (singleLetterGuess) {
    let arrayCompare = false; 
    console.log(arrayCompare)
    for (i = 0; i < (wordLetters.length);  i++) {
        if (singleLetterGuess == wordLetters[i] ){
            guessedLetters[i] = wordLetters[i];
            console.log(`Congrats you the new letter ${wordLetters[i]}. These are the letter you have guessed so far ${guessedLetters}`)
            break; }
        else {}
    }   
    for (var i = 0; i < wordLetters.length; ++i) {
        if (wordLetters[i] !== guessedLetters[i]) {
            arrayCompare = false;
            break;
        }
        else {
            arrayCompare = true;
        }
    }
    if (arrayCompare == true ) {
        console.log(`Congrats you won the game`);
    }
    else {
        console.log("Better luck next guess");
    }
}




// Attempt 
const guessLetter = function (singleLetterGuess) {
    for (i = 0; i < (wordLetters.length);  i++) {
        // console.log(`Loop ${i}`) -- Used to figure out what the problem was
        if (singleLetterGuess == wordLetters[i] ){
            guessedLetters[i] = wordLetters[i];
            // console.log(wordLetters + " If wordletters");  -- Used to figure out what the problem was
            // console.log(guessedLetters+ " If guessedletters") -- Used to figure out what the problem was
            break;
        }
        else {
            // console.log(wordLetters + " Else wordletters"); -- Used to figure out what the problem was
            // console.log(guessedLetters+ " Else guessedletters") -- Used to figure out what the problem was
             }
        // console.log(wordLetters + ` For Loop ${i} wordletters`); -- Used to figure out what the problem was
        // console.log(guessedLetters+ ` For Loop ${i} guessedletters`) -- Used to figure out what the problem was
    }
    console.log(guessedLetters + " Final output")
}


    // const location = wordLetters.indexOf(singleLetterGuess);
    // if 

    // for (let i = 0; i < wordLetters.length; i++){
    //     const guessedLetter = wordLetters[i]; 
    //     console.log(guessedLetter)
    // }

// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.

/* Wheel of Fortune Steps 
Make a reward placeholder
Randomly generate an amount for the user to try and win when they score a letter
When a letter is confirmed reward the user 
When a letter is not found take a percentage off the reward amount
When they win log the final reward that they won */

// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

/* Hangman Steps
1. Have a correct letter array and a wrong letter array. 
2. The user can only guess a letter once and gets denied when they guess a letter twice
3. Count everytime the user puts in an input as the hangman state. Down as they get it right up as they get it right 
4. At a count of 6 end the game and tell the user they lost */