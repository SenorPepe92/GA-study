// Add a script tag to the bottom.

// 1. (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

// 2. (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.

// 3. Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

// 4. Create a new img element and set its src attribute to a picture of you. Append that element to the page.

// 1. 
// const bodyText = document.getElementsByTagName('body')
// console.log(bodyText);

// bodyText.style.fontFamily = 'Arial'

document.body.style.fontFamily = 'Arial, sans-serif'

// 2. 
// const liText = document.getElementsByTagName('li')
// // console.log(liText);
// liText[0].innerText += ' Pepe The Green Frog'
// liText[1].innerText += ' Chilling in a pond'
// liText[2].innerText += ' Sydney'

const nicknameSpan = document.getElementById('nickname')
// console.log(nicknameSpan);
nicknameSpan.innerHTML += ' Pepe the frog'

const favoritesSpan = document.getElementById('favorites')
// console.log(nicknameSpan);
favoritesSpan.innerHTML += ' Pizza'

//The example below uses queryselector
const hometownSpan = document.querySelector('#hometown')
// console.log(nicknameSpan);
hometownSpan.innerHTML += ' Tasmania'

// 3. 
const liItem = document.getElementsByTagName('li')
// console.log(liItem.length - 1);
for (i=0; i < liItem.length; i++) {
    // See if the for loop works
    const currentli = liItem[i];
    console.log('current', currentli);
    // add the class name using JS
    liItem[i].className = 'listItem'
}
console.log(liItem); 
// const styleliItems = document.querySelectorAll('.listItem')
// styleliItems.style.c = 'red'
// console.log(styleliItems);

//4. Create a new img element and set its src attribute to a picture of you. Append that element to the page.

const newImg = document.createElement('img'); 
newImg.src = 'http://www.placekitten.com/100/100'; 
document.body.appendChild(newImg)