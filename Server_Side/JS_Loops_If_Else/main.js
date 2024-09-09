// EXERCISE: LOOPS & ARRAYS
// Create an array of with the following values: 'Peter', 7, 'Marianne', true, 'Helle' and 8. Notice it is a mix
// of strings, numbers and a boolean.
//     Use a loop to iterate over the array and generate the following in the console:
//     Peter is a string
// 7 is a number
// Marianne is a string
// true is a boolean
// Helle is a string
// 8 is a number
// Hint: You can use typeof to determine the type of a value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

import {log} from "../../utils.js";
import {Book} from "./Classes/Book.js";

const myArr = ['Peter', 7, 'Marianne', true, 'Helle', 8];
myArr.forEach((item) => {
    log(item + ' is type of ' + typeof item);
});

// EXERCISE: LOOPS AND OBJECTS
// ▪ Create an array of book objects, with title and author (where both are strings).
// Create 5 objects in the array.
// ▪ Create an HTML page with a <ul>.
// ▪ Write javascript that loops over the array of book objects and create a new <li> for
//     each book object and add the title and author to the <li> and insert it into the <ul>.
//         ▪ Verify that it works with any number of objects by removing 2 of the 5 objects from
//         the array and run it again.
const b1 = new Book("Animal Farm", "George Orwell");
const b2 = new Book("The Old Man and The Sea", "Ernest Hemingway");
const b3 = new Book("Crime and Punishment", "Fyodor Dostoevsky");
const b4 = new Book("Fear and Loathing in Las Vegas", "Hunter S. Thompson");
const b5 = new Book("The Joy of Life", "Emile Zola");

const myBooks = [b1, b2, b3, b4, b5];
myBooks.pop();
myBooks.pop();

//check if Im running in terminal or browser
if (typeof document !== 'undefined') {
    const myListElement = document.querySelector('#my-list');
    myBooks.forEach((item) => {
        const element = document.createElement('li');
        element.innerText = item.author + ' : ' + item.title;
        myListElement.append(element);
    });
}

// EXERCISES
// ▪ Create a function, findLargest, that takes 4 numbers as 4 parameters and returns
// the largest of the 4 numbers.
// ▪ Create a function that takes 3 numbers as 3 parameters. The first parameter is the
// number to check. The 2nd and 3rd parameter is a range (from and to). If the first
// parameter is within the range of the range it should return true and false if not.

const myNumArr = [1, 5, Infinity, 999];
const max = myNumArr.reduce((a, b) => a > b ? a : b)
log(max);

const checkRange = (num, min, max) => num > min && num < max;

log(checkRange(3, 0, 5));
log(checkRange(-1, 0, 5));
log(checkRange(Math.pow(10, 10), 0, Infinity));

// EXERCISE: HIGHER OR LOWER
// ▪ Using if else and loops, create a javascript application that will
// 1. Randomly select a number between 1 and 100.
// 2. Ask the user for a quess (between 1 and 100)
// 3. Let the user know if the quess is higher or lower than the randomly selected
// number, and ask for a new quess, if the quess was not correct.
// 4. Let the user know that they guessed correctly and how many guesses they used,
// if the guess correctly.
// 5. You can use this extension to show an html document easily through
// VSCode: https://marketplace.visualstudio.com/items?itemName=ritwickdey.Liv
//     eServer
import readline from 'readline';

const randomNumber = Math.floor(Math.random() * 100);
const rl = readline.createInterface({
    input: process.stdin,
});
const guess = () => {
    log('Guess!', 'blue');
    rl.question('Guess!', (answer) => {
        const inputNumber = parseInt(answer);
        if (isNaN(inputNumber)) {
            log('Enter a valid number!', 'red');
            guess();
        } else {
            log(answer > randomNumber ? 'lower!' : 'higher', 'blue');
            if (inputNumber === randomNumber) {
                log('Bullseye!');
                rl.close();
            } else {
                guess();
            }
        }
    })
}

guess();
