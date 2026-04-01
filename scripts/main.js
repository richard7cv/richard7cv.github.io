// scripts/main.js

const greetingElement = document.getElementById('greeting-text');

// Set the initial text
greetingElement.textContent = 'Hello World';

// Add the click listener
greetingElement.addEventListener('click', () => {
    if (greetingElement.textContent === 'Hello World') {
        greetingElement.textContent = 'You clicked me!';
    } else {
        greetingElement.textContent = 'Hello World';
    }
});
