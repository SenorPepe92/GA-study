console.log('The DOM is working');

const catIMGvar = document.querySelector('.catIMG')

catIMGvar.style.left = '0px'

setInterval(function() {
    const currentLeftOffSet = parseInt (catIMGvar.style.left)
    console.log(currentLeftOffSet);
    const newLeftOffSet = currentLeftOffSet + 5;
    catIMGvar.style.left = newLeftOffSet + 'px'
//     const currentTopOffSet = parseInt (billImg.style.top); 
//     console.log(currentTopOffSet);
//     const newTopOffSet = currentTopOffSet + 1; 
//     billImg.style.top = newTopOffSet + 'px'
}, 200)

