// Keep track of which books you read and which books you want to read!

var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    },
    {
      title: 'Ailsa Life',
      author: 'Ailsa',
      alreadyRead: false
    }
  ];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

// Bonus: Use a ul and li to display the books.

const ulContainer = document.createElement('ul'); 

//     Part 1 of the solution 

//   for (let i = 0; i < books.length; i++) {
//     const bookTitle = books[i].title;
//     console.log('Title:', bookTitle);
//   }

//   for (let i = 0; i < books.length; i++) {
//     const bookTitle = books[i].title;
//     // console.log('Title:', bookTitle);

//     const newP = document.createElement('p');
//     newP.innerHTML = `The title of the book is "${bookTitle}" and the author is ${books[i].author}`; 

//     document.body.appendChild(newP) // added to the live DOM
//   }

// Part 2 of the solution 
  for (let i = 0; i < books.length; i++) {
    const bookTitle = books[i].title;
    // console.log('Title:', bookTitle);

    const newli = document.createElement('li');
    newli.innerHTML = `The title of the book is "${bookTitle}" and the author is ${books[i].author}`; 

    if (books[i].alreadyRead) {
        newli.className = "read"        
    }
    else { 
        newli.className = "unread"
    }

    ulContainer.appendChild(newli)
    // console.log(ulContainer);
    // document.body.appendChild(newli) // added to the live DOM
  };

document.body.appendChild(ulContainer);




// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.