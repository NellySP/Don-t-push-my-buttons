function moveElmRand(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.floor(Math.random() * 90 + 5) + '%';
  elm.style.left = Math.floor(Math.random() * 90 + 5) + '%';
}

//get the #btn_test
const btn_push = document.querySelector('#bouncing');
btn_push.addEventListener('click', function (e) {
  moveElmRand(e.target);
});

const btn_touch = document.querySelector('#run');
btn_touch.addEventListener('mouseover', function (e) {
  moveElmRand(e.target);
});
