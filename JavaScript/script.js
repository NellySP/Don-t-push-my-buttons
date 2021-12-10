//  fetch Splash screen

const splash = document.querySelector('.splash');

// Add timeout function

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
});

// Array of objections

const objections = [
  "i said don't",
  'cut it out ...',
  'seriously??',
  "that's so immature",
  'dONT!',
  'sTOP IT 😡',
  "you're getting on my nerves",
  "i'm warning you!",
  'get your own damn buttons!',
  "i mean it, don't do it!",
  "Don't force me to call the police",
  "this is a crime. I'll get you put in prison.",
  'go push your own buttons',
  'you can go push your mom or something...',
  'would you please stop?!',
  'this is ridiculus',
  "don't even think about it",
  "some people just don't have any respect for others...",
  "why won't you stop? 😭",
  '🤬🤬🤬🤬🤬',
  'i am politely asking you to stop',
  'Would you stop that?',
  'stop being an asshat 🤠 ',
  'Have you ever tried to stop? 🙃',
  'you better stop',
  'okay, you can keep pushing 😘',
  "this is honestly so rude, I can't understand why you would do this to me. Are you a bad person? You must be. At least you clearly have no concept of bounderies. The disrespect.",
  'this is getting old',
];

// Format the objections to make the first letter uppercase.

const formattedObjection = objections.map((item) => {
  return item.charAt(0).toUpperCase() + item.substr(1);
});

// Variable to keep count of the interactions with the buttons

let count = 0;

// function to randomize out an objection, trigger a window alert
// and to reset the counter to 0.

function protest() {
  if (count === 6) {
    const objection =
      formattedObjection[Math.floor(Math.random() * objections.length)];
    popup.style.display = 'block';
    let popupText = (document.getElementById('popup-text').innerHTML =
      objection);
    count = 0;
  }
}
// Function to move the buttons around

function moveElmRand(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
  count++;
}

// Event listener scroll, trigger a window alert.

window.addEventListener('scroll', (event) => {
  alert('Yeah, you better scroll away...');
});

// Event listeners for the buttons
const btn_push = document.querySelector('#bouncing');
btn_push.addEventListener('click', function (e) {
  moveElmRand(e.target);
  protest();
});

const btn_touch = document.querySelector('#run');
btn_touch.addEventListener('mouseover', function (e) {
  moveElmRand(e.target);
  protest();
});

const warning = document.getElementById('dont');
warning.addEventListener('click', (e) => {
  moveElmRand(e.target);
  protest();
});

// Get the popup
const popup = document.getElementById('myPopup');

// Get the <span> element that closes the popup
const closeButton = document.getElementsByClassName('close')[0];

// When the user clicks on (x), close the popup

closeButton.addEventListener('click', function (e) {
  popup.style.display = 'none';
});

// When the user clicks anywhere outside of the popup, close it

window.addEventListener('click', function (e) {
  if (e.target == popup) {
    popup.style.display = 'none';
  }
});
