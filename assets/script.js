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

// Audio

// music shuffler

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var playlist = ["./assets/Music/2022-12-01_-_Looking_For_Clues_-_www.FesliyanStudios.com.mp3", "./assets/Music/2022-12-01_-_Background_Check_-_www.FesliyanStudios.com.mp3", "./assets/Music/2022-12-31_-_Scene_Of_The_Crime_-_www.FesliyanStudios.com.mp3","./assets/Music/2023-01-04_-_Witness_Testimony_-_www.FesliyanStudios.com.mp3","./assets/Music/2021-09-06_-_Solving_The_Crime_-_David_Fesliyan.mp3","./assets/Music/2019-05-01_-_Undercover_Spy_Agent_-_David_Fesliyan.mp3"];
shuffleArray(playlist);
var currentIndex = 0;
var audio = document.createElement("audio");
audio.controls = true; 
audio.autoplay = false; 
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

// player 1 room

player1.addEventListener('click', function() {
    home.classList.add('hide');
    room1.classList.remove('hide');
    audio.play();
    var clickSound = document.getElementById('player-select');
    clickSound.play();
});

// clock
let rotationAnglemin = 240;
let lastClickTimeMin = 0;

document.querySelector('.min').addEventListener('click', function () {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTimeMin >= 600) {
        rotationAnglemin = (rotationAnglemin + 30) % 360;
        document.querySelector('.rotatem').style.transform = `rotate(${rotationAnglemin}deg)`;
        var clickSound = document.getElementById('clickSoundm');
        clickSound.play();
        lastClickTimeMin = currentTime;
    }
});

let rotationAnglehour = 120;
let lastClickTimeHour = 0;

document.querySelector('.hour').addEventListener('click', function () {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTimeHour >= 600) {
        rotationAnglehour = (rotationAnglehour + 30) % 360;
        document.querySelector('.rotateh').style.transform = `rotate(${rotationAnglehour}deg)`;
        var clickSound = document.getElementById('clickSoundh');
        clickSound.play();
        lastClickTimeHour = currentTime;
    }
});

// checking clock

function checkClock() {
    if (rotationAnglehour === 180 && rotationAnglemin === 0) {
        console.log('clockworks');
        clearInterval(clockChecker);
        var openedclock = document.getElementById('clock-open');
        openedclock.play();
    }
}

var clockChecker = setInterval(checkClock, 1000);


// player 2 room

player2.addEventListener('click', function() {
    home.classList.add('hide');
    room2.classList.remove('hide');
    audio.play();
    var clickSound = document.getElementById('player-select');
    clickSound.play();
});

// Combination Lock

// lock 1

let currentIndex1 = 0;
const items1 = document.querySelectorAll('.option-container1 > div');

function showCurrentColor1() {
    items1.forEach((item, index) => {
      if (index === currentIndex1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor1() {
    currentIndex1 = (currentIndex1 + 1) % items1.length;
    showCurrentColor1();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor1();

// lock 2

let currentIndex2 = 0;
const items2 = document.querySelectorAll('.option-container2 > div');

function showCurrentColor2() {
    items2.forEach((item, index) => {
      if (index === currentIndex2) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor2() {
    currentIndex2 = (currentIndex2 + 1) % items2.length;
    showCurrentColor2();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor2();

// lock 3

let currentIndex3 = 0;
const items3 = document.querySelectorAll('.option-container3 > div');

function showCurrentColor3() {
    items3.forEach((item, index) => {
      if (index === currentIndex3) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor3() {
    currentIndex3 = (currentIndex3 + 1) % items3.length;
    showCurrentColor3();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor3();

// lock 4

let currentIndex4 = 0;
const items4 = document.querySelectorAll('.option-container4 > div');

function showCurrentColor4() {
    items4.forEach((item, index) => {
      if (index === currentIndex4) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor4() {
    currentIndex4 = (currentIndex4 + 1) % items4.length;
    showCurrentColor4();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor4();

// lock 5

let currentIndex5 = 0;
const items5 = document.querySelectorAll('.option-container5 > div');

function showCurrentColor5() {
    items5.forEach((item, index) => {
      if (index === currentIndex5) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor5() {
    currentIndex5 = (currentIndex5 + 1) % items5.length;
    showCurrentColor5();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor5();

// lock 6

let currentIndex6 = 0;
const items6 = document.querySelectorAll('.option-container6 > div');

function showCurrentColor6() {
    items6.forEach((item, index) => {
      if (index === currentIndex6) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}

function nextColor6() {
    currentIndex6 = (currentIndex6 + 1) % items6.length;
    showCurrentColor6();
    var clickSound = document.getElementById('lock-change');
    clickSound.play();
}

showCurrentColor6();

// checking lock 

function checkCombination() {
    console.log(currentIndex1, currentIndex2, currentIndex3, currentIndex4, currentIndex5, currentIndex6);
    var briefcase = document.querySelector('.green');

    if (currentIndex1 === 3 && currentIndex2 === 5 && currentIndex3 === 2 && currentIndex4 === 0 && currentIndex5 === 4 && currentIndex6 === 1) {
        console.log("yes");
        briefcase.style.backgroundImage = 'url("./assets/images/opened.png")'
        briefcase.style.height = '778px';
        document.querySelector('.left-lock').style.display = 'none';
        document.querySelector('.right-lock').style.display = 'none';
        var openedcase = document.getElementById('case-open');
        openedcase.play();
        clearInterval(lockChecker);
    } else {
        console.log("no")
        briefcase.style.backgroundImage = 'url("./assets/images/closed.png")'
        briefcase.style.height = '378px';
    }
}

var lockChecker = setInterval(checkCombination, 1000);