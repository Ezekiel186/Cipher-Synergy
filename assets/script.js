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

// player 2 room

player2.addEventListener('click', function() {
    home.classList.add('hide');
    room2.classList.remove('hide');
});

// Audio

// music shuffler

var playlist = ["./assets/Music/2022-12-01_-_Looking_For_Clues_-_www.FesliyanStudios.com.mp3", "./assets/Music/2022-12-01_-_Background_Check_-_www.FesliyanStudios.com.mp3", "./assets/Music/2022-12-31_-_Scene_Of_The_Crime_-_www.FesliyanStudios.com.mp3","./assets/Music/2023-01-04_-_Witness_Testimony_-_www.FesliyanStudios.com.mp3","./assets/Music/2021-09-06_-_Solving_The_Crime_-_David_Fesliyan.mp3","./assets/Music/2019-05-01_-_Undercover_Spy_Agent_-_David_Fesliyan.mp3"];
var currentIndex = 0;
var audio = document.createElement("audio");
audio.controls = true; 
audio.autoplay = true; 
audio.muted = false;
audio.src = playlist[currentIndex];

document.body.appendChild(audio);

audio.addEventListener("ended", function() {
    currentIndex++;

    if (currentIndex === playlist.length) {
        currentIndex = 0;
    }

    audio.src = playlist[currentIndex];

    audio.load();
    audio.play();
});

// volume slider

function muteUnmute() {
    audio.muted = !audio.muted;
}

function changeVolume(value) {
   audio.volume = value;
}