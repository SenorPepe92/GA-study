// Git Test 1
// The Calculator

// Part 1
// A: Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// A:
const squareNumber = function (number){
    const result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}`)
    return result
}
// B: Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// B:
const halfNumber = function (number){
    const result = number / 2; 
    console.log(`Half of ${number} is ${result}`)
}
// C: Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// C:
let percentOf = function (firstNumber, secondNumber) {
    let result = (firstNumber / secondNumber) * 100;
    console.log(`${firstNumber} is ${result.toFixed(2)}% of ${secondNumber}`) 
}
// D: Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// D:
let areaOfCircle = function(radius){
    const pi = 3.14159265359
    let area = pi * radius * radius;
    // let area = pi * Math.pow(radius, 2);
    console.log(`The area of a circle with a radius of ${radius} is ${area.toFixed(2)}`)
}

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

let partTwoFunction = function (number) {
    const pi = 3.14159265359;
    let result = number / 2; 
    result = result * result;
    let area = pi * Math.pow(result, 2);
    let percentage = (area/ result) * 100;
    console.log(pi, result, area, percentage);
}

// Strings
// These exercises will test your knowledge of string function and conditionals. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

// Some of these are challenging and require extra research or a good memory of the pre-work. Don't despair if you get stuck!


// Problem 1 - DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

let DrEvil = function (amount){
    if (amount == 1000000){
        console.log(`${amount} dollars (pinky)`)
    }
    else {
        console.log(`${amount} dollars`)
    }
}

// Problem 2 - MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

// 
let mixUp = function (stringOne, stringTwo) {
    let partOne = stringOne.slice(0, 2);
    let partTwo = stringOne.slice(2, );
    let partThree = stringTwo.slice(0, 2);
    let partFour = stringTwo.slice(2, );
    console.log(`${partThree}${partTwo} ${partOne}${partFour}`);
}

// Problem 3 - FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. 

// For example:

// fixStart('babble'): 'ba**le'

let fixStart = function (stringOne) {
    let firstLetter = stringOne.slice(0,1);
    var re = new RegExp(firstLetter, 'g');
    let newString = stringOne.replace(re, '*');
    let newStringSlice = newString.slice(1,);
    console.log(`${firstLetter}${newStringSlice}`);
}

// Problem 4 - Verbing
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('walk'): 'walking'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

const verbing = function (singleString) {
    let lastThreeLetters = singleString.slice(-3);
    if (singleString.length >= 3) { // If it has an 'ing' at the end add 'ly'
        if (lastThreeLetters == 'ing'){
            let newWordIf = singleString + 'ly';
            console.log(newWordIf);
        }
        else { // Add 'ing'

            let newWordElse = singleString + 'ing';
            console.log(newWordElse);
        }
    }
    else { // Return the original string if it is less than 3 length
        console.log(singleString);
    }
}

// Problem 5 - Not Bad
// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

// For example:
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function (stringNotBad) {
    let locationNot = stringNotBad.indexOf('not');  //finding the location of 'not'
    let locationBad = stringNotBad.indexOf('bad');  //finding the location of 'bad'
    let goodString = new RegExp('not.*bad', 'g');
    if (locationNot < locationBad) { // replace "'not' ... 'bad'" with 'good'
        newStringNotBad = stringNotBad.replace(goodString, 'good');
        console.log(newStringNotBad)
    }
    else {
        console.log(stringNotBad)
    }
}