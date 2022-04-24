const section = document.querySelector('section');
const lives = document.getElementById('lives');
let count = 8;
lives.textContent = count;

const getData = () => [
    { imgSrc: "./img/beatles.jpeg", name: "beatles" },
    { imgSrc: "./img/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./img/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./img/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./img/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./img/ledzep.jpeg", name: "lep zeppelin" },
    { imgSrc: "./img/metallica.jpeg", name: "metallica" },
    { imgSrc: "./img/pinkfloyd.jpeg", name: "pink floyd" },
    { imgSrc: "./img/beatles.jpeg", name: "beatles" },
    { imgSrc: "./img/blink182.jpeg", name: "blink 182" },
    { imgSrc: "./img/fkatwigs.jpeg", name: "fka twigs" },
    { imgSrc: "./img/fleetwood.jpeg", name: "fleetwood" },
    { imgSrc: "./img/joy-division.jpeg", name: "joy division" },
    { imgSrc: "./img/ledzep.jpeg", name: "lep zeppelin" },
    { imgSrc: "./img/metallica.jpeg", name: "metallica" },
    { imgSrc: "./img/pinkfloyd.jpeg", name: "pink floyd" },
];

function random() {
    const data = getData();
    data.sort(() => Math.random() - 0.5);
    return data;
}

function cardGenerator() {
    let data = random();

    data.forEach(item => {
        // Create element
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        // Add class
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        // Add info
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        // Add to HTML
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggle');
            checkCard(e);
        });
    });

    // Check card
    const checkCard = (e) => {
        const target = e.currentTarget;
        target.classList.add('flipped');
        const cards = document.querySelectorAll('.flipped');
        if (cards.length === 2) {
            if (cards[0].getAttribute('name') === cards[1].getAttribute('name')) {
                console.log('same');
                cards.forEach(card => {
                    card.classList.remove('flipped');
                    card.style.pointerEvents = 'none';
                })
            }
            else {
                cards.forEach(card => {
                    card.classList.remove('flipped');
                    setTimeout(() => card.classList.remove('toggle'), 800);
                });
                count--;
                lives.textContent = count;
                if (count === 0) {
                    setTimeout(restart("You lose!! 😂😂"), 500);
                }
            }
        }
        const allToggle = document.querySelectorAll('.toggle');
        if (allToggle.length === 16) {
            setTimeout(restart("You won!! 😎"), 500);
        }
    }
}

const restart = (text) => {
    const data = random();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    // Make sure we wait the game restarted
    section.style.pointerEvents = 'none';
    data.forEach((item, index) => {
        // Flip back the card and add pointer events again
        cards[index].classList.remove('toggle');
        setTimeout(() => {
            cards[index].style.pointerEvents = 'all';

            // Reset image and update name
            faces[index].src = item.imgSrc;
            cards[index].setAttribute('name', item.name);

            section.style.pointerEvents = 'all';
        }, 1000);
    });
    count = 8;
    lives.textContent = count;
    setTimeout(() => window.alert(text), 1000)
}

cardGenerator();