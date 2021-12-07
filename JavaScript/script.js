// Array of objections

const objections = [
  "i said don't",
  "cut it out ...",
  "seriously??",
  "that's so immature",
  "dONT!",
  "sTOP IT 😡",
  "your'e getting on my nerves",
  "i'm warning you!",
  "get your own damn buttons!",
  "i mean it, don't do it!",
  "Don't force me to call the police",
  "this is a crime. I'll get you put in prison.",
  "go push your own buttons",
  "you can go push your mom or something...",
  "would you please stop?!",
  "this is ridiculus",
  "don't even think about it",
  "stop treating me like this",
  "some people just don't have any respect for others...",
  "why won't you stop? 😭",
  "🤬",
  "i am politely asking you to stop",
  "Would you stop that?",
  "stop being an asshat 🤠 ",
  "Have you ever tried to stop? 🙃",
  "you better stop",
  "okay, you can keep pushing 😘",
  "this is honestly so rude, I can't understand why you would do this to me. Are you a bad person? You must be. At least you clearly have no concept of bounderies. The disrespect.  ",
];

// Format the objections to make the first letter uppercase.

const formattedObjection = objections.map((item) => {
  return item.toUpperCase();
});

// Variable to keep count of the interactions with the buttons

let count = 0;

// function to randomize out an objection, trigger a window alert
// and to reset the counter to 0.

function protest() {
  if (count === 4) {
    const objection =
      formattedObjection[Math.floor(Math.random() * objections.length)];
    window.alert(objection);
    count = 0;
  }
}
// Function to move the buttons around

function moveElmRand(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  count++;
}

// Event listener scroll, trigger at window alert.

window.addEventListener("scroll", (event) => {
  alert("Yeah, you better scroll away...");
});

// Event listeners for the buttons
const btn_push = document.querySelector("#bouncing");
btn_push.addEventListener("click", function (e) {
  moveElmRand(e.target);
  protest();
});

const btn_touch = document.querySelector("#run");
btn_touch.addEventListener("mouseover", function (e) {
  moveElmRand(e.target);
  protest();
});

const warning = document.getElementById("dont");
warning.addEventListener("click", (e) => {
  moveElmRand(e.target);
  protest();
});
