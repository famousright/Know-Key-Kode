let i = 0;

const colors = [
    '#808028',
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];

document.addEventListener('keydown', event => {
    kkk = event.keyCode;
    document.getElementById('kkk').innerHTML = kkk;
    i++;
    document.body.style.backgroundColor = colors[i];
    if (i > 8) {
    i = 0;
    }
});