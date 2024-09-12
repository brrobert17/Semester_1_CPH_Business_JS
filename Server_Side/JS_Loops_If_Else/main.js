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

const myArr = ['Peter', 7, 'Marianne', true, 'Helle', 8];
myArr.forEach((item) => {
    log(item + ' is type of ' + typeof item);
});

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
