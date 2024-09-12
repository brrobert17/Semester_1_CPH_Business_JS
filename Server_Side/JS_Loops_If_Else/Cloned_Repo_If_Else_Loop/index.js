// Clone the following repository:
//     https://github.com/ckirschberg/web2024ifelseloop
//         There is an HTML file and a js file. The js file only has a few comments. Write the code so
// it does the following:
//     Create a webpage that displays a list of numbers from 1 to 20. Each number should be
// displayed with a different color based on whether it’s even or odd. Clicking on a number
// should highlight it.
//     Use the css classes (defined index.html) called number, even, odd and highlight to style
// it.
//     You can look into the following that you could use:
//     querySelectorAll, createElement, % (modulus:
//     https://www.w3schools.com/js/js_arithmetic.asp)

// Get the container element


// Loop through numbers from 1 to 20
// Create a new div element for each number
// Check if the number is even or odd and apply the appropriate class
// Add an event listener to highlight the number when clicked
// Remove highlight from all numbers
// Add highlight to the clicked number
// Append the new div to the container

const numberListElement = document.querySelector('#number-list');
for (let i = 1; i <= 20; i++) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('number');
    myDiv.innerText = `${i}`;
    myDiv.classList.add(i % 2 > 0 ? 'odd' : 'even');
    myDiv.setAttribute('tabindex', '0');
    numberListElement.appendChild(myDiv);
    myDiv.addEventListener('focus', () => {
        myDiv.classList.add('highlight');
    })
    myDiv.addEventListener('blur', (e)=> {
        myDiv.classList.remove('highlight');
    })
}

