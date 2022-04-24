const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const imgs = document.querySelectorAll('#imgs img');
const img = document.getElementById('imgs')
console.log(imgs.length);

let index = 0;

rightBtn.addEventListener('click', right);
leftBtn.addEventListener('click', left)

function right() {
    index++;
    if (index > imgs.length - 1) {
        index  = 0;
    };
    img.style.transform = `translateX(${-index * 450}px)`;
}

function left() {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    img.style.transform = `translateX(${-index * 450}px)`;
}