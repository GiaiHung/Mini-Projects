const main = document.getElementById('main');

document.addEventListener('DOMContentLoaded', loadContent);

function loadContent() {
    for (let i = 1; i < 11; i++) {
        const a = document.createElement('a');
        a.setAttribute('href', `/Project-${i}/index.html`);
        a.innerHTML = `
        <div class="items">
            <i class="fa-solid fa-${i}"></i>
        </div>
        `
        if (i == 10) {
        a.innerHTML = `
        <div class="items">
            <i class="fa-solid fa-1"></i>
            <i class="fa-solid fa-0"></i>
        </div>
        `
        }
        main.appendChild(a)
    }
}