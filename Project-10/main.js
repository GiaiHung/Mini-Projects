const playApp = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const replay = document.querySelector(".replay");
    const outline = document.querySelector(".blue-circle circle");
    const video = document.querySelector(".video-container video");
    const timeSelect = document.querySelectorAll('.time-select button');
    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    const outlineLength = outline.getTotalLength();
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    let fakeDuration = 600;

    // Play sound and video
    play.addEventListener('click', () => {
        checkPlaying(song);
    });

    const checkPlaying = (song) => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = './svg/pause.svg';
        }
        else {
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    }

    // Time select
    timeSelect.forEach(option => {
        option.addEventListener('click', function() {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.innerHTML = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`;
            song.currentTime = 0;
        })
    })

    // Sound picker
    sounds.forEach(sound => {
        sound.addEventListener('click', function() {
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song)
        })
    })

    // Animate circle and check timeout
    song.ontimeupdate = (e) => {
        // Calculate circle length
        let currentTime = song.currentTime;
        // Translate the time into the circle length unit
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        // Calculate time
        let elapsed = fakeDuration - currentTime;
        let minutes = Math.floor(elapsed / 60);
        let seconds = Math.floor(elapsed % 60)

        timeDisplay.textContent = `${minutes} : ${seconds}`;

        // Check timeout
        if (fakeDuration < currentTime) {
            song.currentTime = 0;
            video.pause();
            song.pause();
            play.src = './svg/pause.svg';
        }
    }
}

playApp();