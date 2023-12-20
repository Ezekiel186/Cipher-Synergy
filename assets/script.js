// Button functions

// rules
const ruleButton = document.getElementById('Rules');
const rulesInfo = document.querySelector('.rules-info');
const buttonContainer = document.querySelector('.buttons-container');

const creditsButton = document.getElementById('Credits');
const creditsInfo = document.querySelector('.credit-info');

const backBtnRules = document.getElementById('back1');
const backBtnCredits = document.getElementById('back2');

const player1 = document.getElementById('button1');
const player2 = document.getElementById('button2');
const home = document.querySelector('.home');
const room1 = document.querySelector('.room-one');
const room2 = document.querySelector('.room-two');

ruleButton.addEventListener('click', function() {
    rulesInfo.classList.remove('hide');
    buttonContainer.classList.add('hide');
    creditsInfo.classList.add('hide');
});

// Credits

creditsButton.addEventListener('click', function() {
    creditsInfo.classList.remove('hide');
    buttonContainer.classList.add('hide');
    rulesInfo.classList.add('hide');
});

//back

backBtnRules.addEventListener('click', function() {
    rulesInfo.classList.add('hide');
    buttonContainer.classList.remove('hide');
});

backBtnCredits.addEventListener('click', function() {
    creditsInfo.classList.add('hide');
    buttonContainer.classList.remove('hide');
});

// player 1 room

player1.addEventListener('click', function() {
    home.classList.add('hide');
    room1.classList.remove('hide');
});

player2.addEventListener('click', function() {
    home.classList.add('hide');
    room2.classList.remove('hide');
});