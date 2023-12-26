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

// pads

let sequence = [8, 3, 7, 4, 9, 2];
let currentNum = 0;

function buttonClick(number) {

    var press = document.getElementById('press');
        press.currentTime = 0;
        press.play();

    if (number === sequence[currentNum]) {
        currentNum++;
        if (currentNum === sequence.length) {
            var win = document.getElementById('win');
            win.play();
            currentNum = 0; 
        }
    } else {
        currentNum = 0;
    }
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


document.querySelector('.min').addEventListener('click', function () {
        rotationAnglemin = (rotationAnglemin + 30) % 360;
        document.querySelector('.rotatem').style.transform = `rotate(${rotationAnglemin}deg)`;
        var clickSound = document.getElementById('clickSoundm');
        clickSound.currentTime = 0;
        clickSound.play() 
});

let rotationAnglehour = 120;

document.querySelector('.hour').addEventListener('click', function () {
        rotationAnglehour = (rotationAnglehour + 30) % 360;
        document.querySelector('.rotateh').style.transform = `rotate(${rotationAnglehour}deg)`;
        var clickSound = document.getElementById('clickSoundh');
        clickSound.currentTime = 0;
        clickSound.play();
});

// checking clock

function checkClock() {
    var red = document.querySelector('.red');

    if (rotationAnglemin === 180 && rotationAnglehour === 0) {
        console.log('clockworks');
        clearInterval(clockChecker);
        var openedclock = document.getElementById('clock-open');
        openedclock.play();
        red.style.backgroundImage = "url('./assets/images/no9.png')"
    } else {
       red.style.backgroundImage = "url('./assets/images/clock.png')"
    }
}

var clockChecker = setInterval(checkClock, 1000);

// Globe

let rotationAngleGlobe = 0;
let intervalId;
let solved = false;

function addAngle() {
    rotationAngleGlobe = (rotationAngleGlobe + 15) % 1080;
    document.querySelector('.globe').style.transform = `rotate(${rotationAngleGlobe}deg)`;
}

var spin = document.getElementById('rolling');

function startGlobe() {
    if (solved === false) {
        if (!intervalId) {
        intervalId = setInterval(addAngle, 100);
        spin.currentTime = 0;
        spin.play();
    }
}
    
}

function stopGlobe() {
    spin.pause();
    spin.currentTime = 0;
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

// checking globe

function checkGlobe() {
    var globeClick = document.getElementById('globeClick');
        globeClick.currentTime = 0;
        globeClick.play();

    if (rotationAngleGlobe === 210 || rotationAngleGlobe === 570 || rotationAngleGlobe === 930) {
        solved = true;
        document.querySelector('.purple').style.cursor = "url('./assets/images/cursor.png'), auto";
        var light = document.getElementById('light');
        light.play();
        document.querySelector('.frame').style.backgroundImage = "url('./assets/images/globeFrame2.png')"
        document.querySelector('.room-one').style.backgroundImage = "url('./assets/images/background3.png')"
    }
}




// player 2 room

player2.addEventListener('click', function() {
    home.classList.add('hide');
    room2.classList.remove('hide');
    audio.play();
    var clickSound = document.getElementById('player-select');
    clickSound.play();
});

// radio

// button one

let rotationAngleone = 135;

document.querySelector('.btn-1').addEventListener('click', function () {
        rotationAngleone = (rotationAngleone + 45) % 360;
        document.querySelector('.btn-1').style.transform = `rotate(${rotationAngleone}deg)`;
        var static = document.getElementById('static');
        static.currentTime = 0;
        static.play();
});

// button two

let rotationAngletwo = 45;

document.querySelector('.btn-2').addEventListener('click', function () {
        rotationAngletwo = (rotationAngletwo + 45) % 360;
        document.querySelector('.btn-2').style.transform = `rotate(${rotationAngletwo}deg)`;
        var static = document.getElementById('static2');
        static.currentTime = 0;
        static.play();
});

// button three

let rotationAnglethree = 90;

document.querySelector('.btn-3').addEventListener('click', function () {
        rotationAnglethree = (rotationAnglethree + 45) % 360;
        document.querySelector('.btn-3').style.transform = `rotate(${rotationAnglethree}deg)`;
        var static = document.getElementById('static3');
        static.currentTime = 0;
        static.play();
});

// button four

let rotationAnglefour = 0;

document.querySelector('.btn-4').addEventListener('click', function () {
        rotationAnglefour = (rotationAnglefour + 45) % 360;
        document.querySelector('.btn-4').style.transform = `rotate(${rotationAnglefour}deg)`;
        var static = document.getElementById('static4');
        static.currentTime = 0;
        static.play();
});

// checking radio

let replayWorks = false

function checkRadio() {
    if (rotationAngleone === 0 && rotationAngletwo === 90 && rotationAnglethree === 135 && rotationAnglefour === 45) {
        clearInterval(radioChecker);
        var radioClue = document.getElementById('radio');
        radioClue.play();
        replayWorks = true
    }
}

var radioChecker = setInterval(checkRadio, 1000);

// radio replay

document.querySelector('.replay').addEventListener('click', function() {
    var replayClick = document.getElementById('replayClick');
    replayClick.currentTime = 0;
    replayClick.play();

    if (replayWorks === true) {
        var radioClue = document.getElementById('radio');
        radioClue.currentTime = 0;
        radioClue.play();
    }
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
    clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
    clickSound.play();
}

showCurrentColor6();

// checking lock 
let scatter;

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
        scatter = true;
    } else {
        console.log("no")
        briefcase.style.backgroundImage = 'url("./assets/images/closed.png")'
        briefcase.style.height = '378px';
    }
}

var lockChecker = setInterval(checkCombination, 1000);

// frame

// top left
let rotationAngleArrowOne = 90;

document.querySelector('.arone').addEventListener('click', function () {
        rotationAngleArrowOne = (rotationAngleArrowOne + 90) % 360;
        document.querySelector('.arone').style.transform = `rotate(${rotationAngleArrowOne}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// top mid
let rotationAngleArrowTwo = 0;

document.querySelector('.artwo').addEventListener('click', function () {
        rotationAngleArrowTwo = (rotationAngleArrowTwo + 90) % 360;
        document.querySelector('.artwo').style.transform = `rotate(${rotationAngleArrowTwo}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// top right
let rotationAngleArrowThree = 180;

document.querySelector('.arthree').addEventListener('click', function () {
        rotationAngleArrowThree = (rotationAngleArrowThree + 90) % 360;
        document.querySelector('.arthree').style.transform = `rotate(${rotationAngleArrowThree}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// mid left
let rotationAngleArrowFour = 90;

document.querySelector('.arfour').addEventListener('click', function () {
        rotationAngleArrowFour = (rotationAngleArrowFour + -90) % 360;
        document.querySelector('.arfour').style.transform = `rotate(${rotationAngleArrowFour}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// mid mid
let rotationAngleArrowFive = 270;

document.querySelector('.arfive').addEventListener('click', function () {
        rotationAngleArrowFive = (rotationAngleArrowFive + -90) % 360;
        document.querySelector('.arfive').style.transform = `rotate(${rotationAngleArrowFive}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// mid right
let rotationAngleArrowSix = 0;

document.querySelector('.arsix').addEventListener('click', function () {
        rotationAngleArrowSix = (rotationAngleArrowSix + -90) % 360;
        document.querySelector('.arsix').style.transform = `rotate(${rotationAngleArrowSix}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// bot left
let rotationAngleArrowSeven = 0;

document.querySelector('.arseven').addEventListener('click', function () {
        rotationAngleArrowSeven = (rotationAngleArrowSeven + 90) % 360;
        document.querySelector('.arseven').style.transform = `rotate(${rotationAngleArrowSeven}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// bot mid
let rotationAngleArrowEight = 270;

document.querySelector('.areight').addEventListener('click', function () {
        rotationAngleArrowEight = (rotationAngleArrowEight + 90) % 360;
        document.querySelector('.areight').style.transform = `rotate(${rotationAngleArrowEight}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// bot right
let rotationAngleArrowNine = 180;

document.querySelector('.arnine').addEventListener('click', function () {
        rotationAngleArrowNine = (rotationAngleArrowNine + 90) % 360;
        document.querySelector('.arnine').style.transform = `rotate(${rotationAngleArrowNine}deg)`;
        var wood = document.getElementById('wood');
        wood.currentTime = 0;
        wood.play();
});

// checking frame

function checkFrame() {
    var yellow = document.querySelector('.yellow');
    if (rotationAngleArrowOne === 180 && rotationAngleArrowTwo === 90 && rotationAngleArrowThree === 270 && rotationAngleArrowFour === -90 && rotationAngleArrowFive === 0 && rotationAngleArrowSix === -180 && rotationAngleArrowSeven === 270 && rotationAngleArrowEight === 0 && rotationAngleArrowNine === 270) {
        clearInterval(frameChecker);
        var solvedFrame = document.getElementById('pieces');
        solvedFrame.play();
        document.querySelector('.top').style.display = 'none';
        document.querySelector('.mid').style.display = 'none';
        document.querySelector('.bot').style.display = 'none';
        yellow.style.backgroundImage = "url('./assets/images/frameEnd.png')"
        if (scatter === true) {
            document.querySelector('.green').style.backgroundImage = "url('./assets/images/scattered.png')"           
        }
        scatter = false;
    } else {
       yellow.style.backgroundImage = "url('./assets/images/frame.png')"
    }
}

var frameChecker = setInterval(checkFrame, 1000);