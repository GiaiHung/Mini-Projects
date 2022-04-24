const text = "Programming is hard but Javascript is crazy!!! :))";
let index = 0;

function textSliding() {
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(textSliding, 120)