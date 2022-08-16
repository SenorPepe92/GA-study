console.log('DOM JS Loaded.')

// Functions Review
// Functions in JS are "first-class": 
// they live in variables, ie they are "values"/data

const x = 1; 
const f = function() { console.log('Hello!')}

const sayHello = function(){
    console.log('%cHello from sayHello()', 'color: green');
    return "goodbye"
}
// this is the same version as above:
// function sayHello(){
//     console.log('%cHello from sayHello()', 'color: green');
//     return "goodbye"
// }


const runNicely = function( functionToRunNicely) {
    debugger;
    console.log('Hello I am about to run the function that you have given me');
    functionToRunNicely();
    console.log('It was a real pleasure to run the function for you');
}

//// end of callbacks functions preview 

// DOM access methods 
// grab tags from the page via JS and manipulate them 

const firstPara = document.getElementById( 'intro' );
console.dir(firstPara);
console.log('first para', firstPara);

const allParagraphs = document.getElementsByTagName('p'); 
console.log('all P tags:', allParagraphs)

// for(let i = 0; i < allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]; 
//     console.log(i, currentPara);
// }

// for(let i = 0; i < allParagraphs.length; i++){
//     const currentPara = allParagraphs[i]; 
//     console.log(i, currentPara.innerHTML);
// }

// document.getElementsByTagName('a')

// const allSpecial = document.getElementsByClassName('special')
// console.log('all special class tags: ', allSpecial);

document.querySelectorAll('.special')