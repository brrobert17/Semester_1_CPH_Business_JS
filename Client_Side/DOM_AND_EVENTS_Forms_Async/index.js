const myButton = document.querySelector('#my-button');
const myList = document.querySelector('#my-list');
const duckImg = document.querySelector('#duck-img');
const myInput = document.querySelector('#my-input')
const tooltip = document.getElementById('tooltip');

// Tooltip functionality
duckImg.addEventListener('mouseenter', function (event) {
    tooltip.classList.add('visible');
});

duckImg.addEventListener('mousemove', function (event) {
    tooltip.style.left = `${event.clientX + 10}px`; // Position relative to viewport
    tooltip.style.top = `${event.clientY + 10}px`;  // Position relative to viewport
});

duckImg.addEventListener('mouseleave', function () {
    tooltip.classList.remove('visible');
});

// Adding event listener to the button
myButton.addEventListener('click', () => addTodo(myInput.value));

// Function to add a new todo
const addTodo = (value) => {
        const localList = JSON.parse(localStorage.getItem('list')) || [];
        const message = {
            text: value,
            timeStamp: finalFormat
        }
    const itemExists = localList.some(item => item.text === value);

        if (itemExists) {
            const filteredList = localList.filter(item => item.text !== value);
            localStorage.setItem('list', JSON.stringify(filteredList));
        } else {
            localList.push(message);
            localStorage.setItem('list', JSON.stringify(localList));
        }
        myInput.value = '';
        myList.innerHTML = '';
        populateList();

};

// Function to populate the list from localStorage
const populateList = () => {
    const localList = JSON.parse(localStorage.getItem('list')) || [];
    myList.innerHTML = ''; // Clear the current list
    localList.length > 0 && localList.forEach((item) => {
        const listElement = document.createElement('li');
        listElement.innerText = item.text;
        listElement.title = item.timeStamp;
        myList.append(listElement);
    });
};

// Initialize the list when the page loads
populateList();

// Adding event listener to the input to handle Enter keypress
myInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo(e.target.value);
    }
});

// Date: Exercise
// ▪ Lets add a timestamp to our messages on Mr. Duck.
// ▪ Adding title to an html element, will give us a hover with
//     the desired text.
// ▪ Format of that Date: “DD/MM/YYYY, hh:mm”

const date = new Date();
const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
});

const formattedTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
});

const finalFormat = `${formattedDate}, ${formattedTime}`;
//window.localStorage.clear();
// Extra Exercise
// • HTML:
//     • Create a <select> dropdown with several options
// representing different items.
// • Add an empty <ul> element to serve as the list where items
// will be added or removed.
// • CSS:
//     • Style the list and items for better visual representation.
// • JavaScript:
//     • Add an event listener to the <select> element that adds a
// new <li> item to the <ul> when an option is selected. If the
//     item already exists, it should be removed instead.
const selectElement = document.querySelector('select');
selectElement.addEventListener('change', (e) => {
    addTodo(e.target.value);
})

const forceAskButton = document.querySelector('#force-ask-button');
forceAskButton.addEventListener('click', async (e) => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    if (response.ok) {
        const result = await response.json();
        alert(result.joke);
    }
})
