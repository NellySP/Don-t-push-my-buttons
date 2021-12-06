// Function to move the buttons around

function moveElmRand(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

// Event listeners for the buttons
const btn_push = document.querySelector('#bouncing');
btn_push.addEventListener('click', function (e) {
  moveElmRand(e.target);
  const objection = objections[Math.floor(Math.random() * objections.length)];
  window.alert(objection);
});

const btn_touch = document.querySelector('#run');
btn_touch.addEventListener('mouseover', function (e) {
  moveElmRand(e.target);
  const objection = objections[Math.floor(Math.random() * objections.length)];
  window.alert(objection);
});

const warning = document.getElementById('dont');
warning.addEventListener('click', () => {
  const objection = objections[Math.floor(Math.random() * objections.length)];
  window.alert(objection);
});

// Array of objections

const objections = [
  'I said dont',
  'Cut it out ...',
  'Seriously??',
  'Thats so immature',
  'DONT!',
  'STOP IT',
  'Youre getting on my nerve',
  'Im warning you!',
  'Get your own damn buttons!',
  'I mean it, dont do it!',
  'Dont force me to call the police',
  'This is a crime. Ill get you put in prison.',
  'Go push your own buttons',
  'You can go push your mom or something',
];

// function to trigger alert on 5 clicks. work in to something that works

$(document).ready(function () {
  let count = 0;
  $('dont').click(function () {
    count += 1;
    if (count == 5) alert('ALERT!');
  });
});
