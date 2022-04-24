const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    const button = document.createElement('button');
    button.innerText = sound;
    button.classList.add('button');
    
    button.addEventListener('click', () => {
        stop();
        document.getElementById(sound).play();
    })

    document.body.appendChild(button);
});

function stop() {
    sounds.forEach(sound => {
        document.getElementById(sound).pause();
    })
}

