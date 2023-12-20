// Button functions

// rules
const ruleButton = document.getElementById('Rules');
const rulesInfo = document.querySelector('.rules-info');
const buttonContainer = document.querySelector('.buttons-container');

const creditsButton = document.getElementById('Credits');
const creditsInfo = document.querySelector('.credit-info');

const backBtnRules = document.getElementById('back1');
const backBtnCredits = document.getElementById('back2');

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