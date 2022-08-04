
const emptyObject = {};

emptyObject
{}

const movie = {
    name: "Satanago", 
    director: "Bela Tar",
    duration: 432
};

movie['duration']
432

movie[0]
null

const bookSeries = {
    name: "In Search of Lost Time", 
    author: "Marcel Proust", 
    books: ["Swanns Way", "the Guermetes Way", "Sodem and Gomorrah", "The Prisnor", "The Fugitive", "Time regained"]
};

bookSeries
{name: 'In Search of Lost Time', author: 'Marcel Proust', books: Array(6)}
bookSeries['books'][3]
'The Prisnor'

// Accessing an object value
movie.name
'Satanago'

movie['name']
'Satanago'

movieName = movie.name
'Satanago'

movieName
'Satanago'

movieDirector = movie.director
'Bela Tar'

movieDuration =movie.duration
432
// Changing a value within an object
movie.duration = 543
543

movie
{name: 'Satanago', director: 'Bela Tar', duration: 543}

// Adding keys and values after the fact to an object 
movie.language = "Hungarian"
'Hungarian'
movie
{name: 'Satanago', director: 'Bela Tar', duration: 543, language: 'Hungarian'}
movie.rating = 10.00
10
movie.parts = 12
12
movie
{name: 'Satanago', director: 'Bela Tar', duration: 543, language: 'Hungarian', rating: 10, …}
movie.parts
12

// Deleting values and keys in a object 
delete movie.parts
true
movie.parts

movie
{name: 'Satanago', director: 'Bela Tar', duration: 543, language: 'Hungarian', rating: 10}
for (const key in movie) {
    console.log(key + ": " + movie[key]); // Displaying both values and keys within the object
}

name: Satanago
director: Bela Tar
duration: 543
language: Hungarian
rating: 10

const movieKeys = Object.keys(movie);

movieKeys
(5) ['name', 'director', 'duration', 'language', 'rating']
const movieValues = Object.values(movie)

movieValues
(5) ['Satanago', 'Bela Tar', 543, 'Hungarian', 10]

// Complex objects ie objects within objects
const explorer = { firstName: "Jacques", 
                  lastName: "Cousteau", birth: {
                      day: 11, 
                      month: 6, 
                      year: 1920
                  }
                 };

const birthDay = explorer.birth.day

birthDay
11
const birthMonth = explorer.birth.month

const birthYear = explorer.birth.year

birthMonth
6
birthYear
1920
const first = explorer.firstName

first
'Jacques'
const last = explorer.lastName

last
'Cousteau'
console.log(first + ' ' + last)
Jacques Cousteau

// Functions within objects 
explorer.displayPurpose = function () {console.log('Hello World')};
ƒ () {console.log('Hello World')}
explorer.displayPurpose
ƒ () {console.log('Hello World')}

// Complex data formats ie objects within an Array

const marxFamily = [
    { name: "Groucho", birthYear: 1890}, 
    { name: "Harpo", birthYear: 1888},
    { name: "Chico", birthYear: 1887}, 
    { name: "Zeppo", birthYear: 1901},
    { name: "Gummo", birthYear: 1893}
    ];

marxFamily[1]
{name: 'Harpo', birthYear: 1888}
marxFamily[1].birthYear
1888

// Accessing objects within an array 
for (let i = 0; i < marxFamily.length; i++){
    const brother = marxFamily[i];
    console.log(brother.name, brother.birthYear);
}
Groucho 1890
Harpo 1888
Chico 1887
Zeppo 1901
Gummo 1893
