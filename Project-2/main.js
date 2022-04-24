function createHeart() {
    const div = document.createElement('div');
    div.classList.add('heart');

    div.style.left = Math.random() * 100 + 'vw';
    div.style.animationDuration = Math.random() * 4 + 2 + 's';

    div.innerText = "💜";

    document.body.appendChild(div)
}

setInterval(createHeart, 300);