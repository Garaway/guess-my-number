

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.main__message').textContent = message;
}

document.querySelector('.main__check').addEventListener('click', function () {

    let guess = Number(document.querySelector('.main__guess').value);

    if (!guess) {
        displayMessage('No number');
        return;
    }

    if (score > 1) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? 'Too high' : 'To low');
    }

    if (guess === secretNumber) {
        displayMessage('Correct Number');
        document.querySelector('body').style.backgroundColor = '#00b400';
        document.querySelector('.header__number').style.width = '20rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        return;
    }

    if (score === 0) {
        displayMessage('You lost the game!');
        return;
    }
})

const funct = () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222222';
    document.querySelector('.header__number').style.width = '10rem';
    displayMessage('Start guessing...');
    console.log(document.querySelector('.header__guess'));
    document.querySelector('.main__guess').value = '';

    document.querySelector('.header__number').textContent = secretNumber;
};
document.querySelector('.header__again').addEventListener('click', funct)

