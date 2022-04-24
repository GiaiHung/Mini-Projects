const game = () => {
    const startGame = () => {
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');
        const playBtn = document.querySelector('.intro button');
        playBtn.addEventListener('click', () => {
            intro.classList.toggle('fadeOut');
            intro.classList.toggle('fadeIn');
            match.classList.toggle('fadeOut');
            match.classList.toggle('fadeIn');
        });
    };

    // Stop the animation and restart everytime we play
    const hands = document.querySelectorAll('.hands img');
    hands.forEach(hand => {
        hand.addEventListener('animationend', (e) => {
            e.currentTarget.style.animation = '';
        })
    });

    const playGame = () => {
        const computerHand = document.querySelector('.computer-hand');
        const playerHand = document.querySelector('.player-hand');
        const options = document.querySelectorAll('.options button');

        options.forEach(option => {
            option.addEventListener('click', (e) => {
                const computerOptions = ['rock', 'paper', 'scissors'];
                const random = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[random];
                const playerChoice = e.currentTarget.textContent;

                computerHand.src = `./img/rock.png`;
                playerHand.src = `./img/rock.png`;

                setTimeout(() => {
                    // Update Image
                    computerHand.src = `./img/${computerChoice}.png`;
                    playerHand.src = `./img/${option.textContent}.png`;

                    // Update Text
                    compareHands(playerChoice, computerChoice);

                    // Update Score
                    updateScore();

                    // Restart the game
                    setTimeout(restart, 1000);
                }, 2000);

                computerHand.style.animation = 'computerShake 2s ease';
                playerHand.style.animation = 'playerShake 2s ease';
            })
        })
    };

    let computer = 0;
    let player = 0;

    function updateScore() {
        const cScore = document.querySelector('.computer-score p');
        const pScore = document.querySelector('.player-score p');
        cScore.textContent = computer;
        pScore.textContent = player;
    }

    function compareHands(playerChoice, computerChoice) {
        const currentState = document.querySelector('.current-state');

        // Update current state
        // Note that we should return empty to stop the program
        // Check for tie
        if (playerChoice === computerChoice) {
            currentState.textContent = 'It is a tie';
            return;
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                currentState.textContent = 'You win!';
                player++;
                return;
            }
            if (computerChoice === 'paper') {
                currentState.textContent = 'You lose :(';
                computer++;
                return;
            }
        }

        // Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                currentState.textContent = 'You win!';
                player++;
                return;
            }
            if (computerChoice === 'scissors') {
                currentState.textContent = 'You lose :(';
                computer++;
                return;
            }
        }

        // Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'paper') {
                currentState.textContent = 'You win!';
                player++;
                return;
            }
            if (computerChoice === 'rock') {
                currentState.textContent = 'You lose :(';
                computer++;
                return;
            }
        }
    };

    function restart() {
        const match = document.querySelector('.match');
        const intro = document.querySelector('.intro');
        if (computer === 5) {
            alert("You lose the whole streak, let's try again!")
            match.classList.toggle('fadeIn');
            intro.classList.toggle('fadeIn');
            match.classList.toggle('fadeOut');
            intro.classList.toggle('fadeOut');
            computer = 0;
            player = 0;
        }
        if (player === 5) {
            alert("You win the whole streak! Wanna play again?")
            match.classList.toggle('fadeIn');
            intro.classList.toggle('fadeIn');
            match.classList.toggle('fadeOut');
            intro.classList.toggle('fadeOut');
            computer = 0;
            player = 0;
        };
        updateScore();
    };

    startGame();
    playGame();
}

// Start the game function
game()