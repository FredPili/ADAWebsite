// assets/js/index.js

// Select the root app container
const app = document.getElementById('app');

// Create Dynamic Content
app.innerHTML = `
  <h1>Welcome to My Webpage</h1>
  <p>This is a simple dynamically rendered webpage using JavaScript and GitHub Pages.</p>
  <button id="dynamicButton">Click Me</button>
`;

// Add Interactivity to the Button
const button = document.getElementById('dynamicButton');
button.addEventListener('click', () => {
  alert('You clicked the dynamic button!');
});
