$( document ).ready(function() {

let i = 0;

const colors = [
    '#FF00FF',
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#6633FF',
    '#FFE138',
    '#FF0066',
];

document.addEventListener('keydown', event => {
    kkk = event.keyCode;
    document.getElementById('kkk').innerHTML = kkk;
    document.body.style.backgroundColor = colors[i];
    if (i > 8) {
    i = 0;
    }
    i++;
});

function blink() { 
  $('.blink_me').fadeOut(10).fadeIn(10, blink); 
};
});