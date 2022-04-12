'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let points = 10;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('⛔️ No number!');

    // When player wins
    } else if (guess === secretNumber) {

        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#298a4b';
        document.querySelector('.number').style.width = '30rem';

    if (points > highscore) {
        highscore = points;
        document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (points > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            points--;
            document.querySelector('.points').textContent = points;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.points').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#cf5c40';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    points = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start guessing...');
    document.querySelector('.points').textContent = points;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.number').style.width = '15rem';
});

// document.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         document.getElementById('btn-check').click();
//     }
// });

document.addEventListener("keydown", function(event) {
    if (event.key == 'Enter') {
        document.getElementById('btn-check').click();
    }
});

document.addEventListener('keydown', function(event){
    if(event.key == 'Escape'){
        document.getElementById('btn-again').click();
    }
});