// EXERCISE: LOOPS AND OBJECTS
// ▪ Create an array of book objects, with title and author (where both are strings).
// Create 5 objects in the array.
// ▪ Create an HTML page with a <ul>.
// ▪ Write javascript that loops over the array of book objects and create a new <li> for
//     each book object and add the title and author to the <li> and insert it into the <ul>.
//         ▪ Verify that it works with any number of objects by removing 2 of the 5 objects from
//         the array and run it again.

import {Book} from "../Classes/Book.js";

const b1 = new Book("Animal Farm", "George Orwell");
const b2 = new Book("The Old Man and The Sea", "Ernest Hemingway");
const b3 = new Book("Crime and Punishment", "Fyodor Dostoevsky");
const b4 = new Book("Fear and Loathing in Las Vegas", "Hunter S. Thompson");
const b5 = new Book("The Joy of Life", "Emile Zola");

const myBooks = [b1, b2, b3, b4, b5];
myBooks.pop();
myBooks.pop();


const myListElement = document.querySelector('#my-list');
myBooks.forEach((item) => {
    const element = document.createElement('li');
    element.innerText = item.author + ' : ' + item.title;
    myListElement.append(element);
});
