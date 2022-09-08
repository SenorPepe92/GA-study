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

// Add a new image to the page

// First create a blank 'detached' node
const newImgTag = document .createElement('img'); 

// Set the essential attributes 
newImgTag.src = 'https://www.placebear.com/300/300';
newImgTag.alt = 'A cuddly huge bear';

newImgTag.style.border = '2px dashed pink'; 

// Now also create a link tag to wrap the image in 
const newLinkTag = document.createElement('a'); 
newLinkTag.href = 'https://www.placebear.com'; 

// Now append the image tag to the a tag
newLinkTag.appendChild(newImgTag); 

// Attach the outmost link tag to the DOM 
firstPara.appendChild(newLinkTag);


// Attach the new tag to the actual DOM
// document.body.appendChild(newImgTag)

// firstPara.prepend(newImgTag)
// firstPara.insertBefore(newImgTag)

// const intervalID = setInterval(function () {
//     console.log('Hello from anon interval callback');
//     console.log(Math.random());
// }, 3000); 

// Exercise

const billImg = document.querySelector('#bill'); 

// const billIntervalID = setInterval(function() {
//     // billImg.width += 10;
//     const currentTopOffSet = parseInt (billImg.style.top); 
//     console.log(currentTopOffSet);
//     const newTopOffSet = currentTopOffSet + 10; 
//     billImg.style.top = newTopOffSet + 'px'
// }, 300);

billImg.style.top = '0px'
billImg.style.position = 'absolute'

setInterval(function() {
    // billImg.width += 10;
    const currentTopOffSet = parseInt (billImg.style.top); 
    console.log(currentTopOffSet);
    const newTopOffSet = currentTopOffSet + 1; 
    billImg.style.top = newTopOffSet + 'px'
}