const myBox = document.getElementById('my-box');
const adam = document.getElementById('adam');

myBox && myBox.addEventListener('click', (e) => {
    e.target.classList.toggle('active');
})

const tooltip = document.getElementById('tooltip');
adam.addEventListener('mouseenter', function(event) {
    tooltip.classList.add('visible');
});
adam.addEventListener('mousemove', function(event) {
    tooltip.style.left = `${event.clientX + 10}px`; // Position relative to viewport
    tooltip.style.top = `${event.clientY + 10}px`;  // Position relative to viewport
});
adam.addEventListener('mouseleave', function() {
    tooltip.classList.remove('visible');
});

const myInput = document.getElementById('my-input');
const myButton = document.getElementById('my-button');
const myList = document.getElementById('my-list');
myButton.addEventListener('click', ()=> addTodo())
const addTodo =()=> {
    if(myInput.value) {
        const listElement = document.createElement('li');
        listElement.innerText = myInput.value
        myList.append(listElement);
        myInput.value = '';
    }
}
myInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
})
