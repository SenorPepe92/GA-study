// The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// Attempt

// let = numberOfChildren; 
// let = partnersName; 
// let = geographicLocation; 
// let = jobTitle; 

// numberOfChildren = 2; 
// partnersName = "Ailsa"; 
// geographicLocation = "Yamba";
// jobTitle = "Retired"

// console.log(`You will be a ${jobTitle}! in ${geographicLocation}!, and married to ${partnersName}! with ${number}!`)

// Answer

const numberOfChildren = 2
const partnersName = "Ailsa"
const geographicLocation = "Yamba"
const jobTitle = "Retired"

const fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${number}`;

console.log(fortune);

// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
//     Store the current year in a variable.
//     Store their birth year in a variable.
//     Calculate their 2 possible ages based on the stored values.
//     Output them to the screen like so: "They are either NN or NN", substituting the values.
//

// Attempt

// var currentYear = 2022;
// const birthYear = 1992;
// var currentAge = currentYear - birthYear;

// var age = `They are either ${currentAge}`;

// Answer

const currentYear = 2022;
const birthYear = 1992;
const currentAgeAfter = currentYear - birthYear;
const currentAgeBefore = currentYear - birthYear - 1;

const currentAge = `They are either ${currentAgeAfter} or ${currentAgeBefore}`;

console.log(currentAge)

// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
//     Store your current age into a variable.
//     Store a maximum age into a variable.
//     Store an estimated amount per day (as a number).
//     Calculate how many you would eat total for the rest of your life.
//     Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// Attempt Correct

const todaysAge = 29; 
const maxAge = 85;
const estimatePerDay = 2;

const snackCalc = (maxAge - todaysAge) * estimatePerDay * 365.25;

const snackAmount = `I would need ${snackCalc} tim-tams to last me until the ripe old age of ${maxAge}`;

console.log(snackAmount)

//
// The Temperature Converter
//
// It's hot out! Let's make a converter.
//
//     Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

let celTemp = 100; 

let celToFah = (celTemp * (9/5)) + 32; 

let convertedTempCelToFah = `The converted temp from ${celTemp} cel is ${celToFah.toFixed(2)} fah`;

console.log(convertedTempCelToFah);

let fahTemp = 0; 

let fahToCel = (fahTemp - 32) * (5/9); 

let convertedTempFahToCel = `The converted temp from ${fahTemp} fah is ${fahToCel.toFixed(2)} fah`;

console.log(convertedTempFahToCel)

// Extras that are a part of the variable exercise
// 1
const sayHello = function(){
    console.log("Hello");
};
// 2
const doSomethingFancy = function () {
    console.log(" ooooohh, fannncy")
};
// 3
const  addNums = function(firstNum, secondNum) {
    const result = firstNum + secondNum;
    return result;
}

const sum = addNums(2, 5);
console.log(sum + 5);

