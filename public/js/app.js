window.addEventListener('load', init);

var theWheel;
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var myAudio = document.getElementById("myAudio");
var tick = new Audio('../audio/tick.mp3');  // Create audio object and load desired file.
var toggleAudioBtn = document.getElementById('mute');
var mute = false;
var reset = false;

function init() {
    toggleAudioBtn.addEventListener('click', togglePlay);
    startButton.addEventListener('click', startWheel);
    resetButton.addEventListener('click', resetWheel);
}

theWheel = new Winwheel({
    'textMargin': 25,
    'textAlignment': 'center',
    'outerRadius': 220,
    'lineWidth': 0,
    // 'innerRadius': 90,
    'numSegments': 4,
    // 'drawMode': 'segmentImage',
    // 'imageDirection' : 'E',
    'segments':
        [
            {'textFontFamily': 'Roboto Mono', 'fillStyle': '#169ee2', 'text': 'Albert Heijn'},
            {'textFontFamily': 'Roboto Mono', 'fillStyle': '#f2f2ec', 'text': '\'t Smoske'},
            {'textFontFamily': 'Roboto Mono', 'fillStyle': '#feca30', 'text': 'McDonald\'s'},
            {'textFontFamily': 'Roboto Mono', 'fillStyle': '#dc153a', 'text': 'Domino\'s'}
        ],
    'animation':
        {
            'type': 'spinToStop',
            'duration': 15,
            'spins': 8,
            'callbackSound': playTick,    // Specify function to call when sound is to be triggered.
            'soundTrigger': 'pin',         // Pins trigger the sound for this animation.
            'callbackFinished': wheelFinished,
        },
    'pins':    // Display pins, and if desired specify the number.
        {
            'number': 16
        }
});

function playTick() {

    // Stop and rewind the sound (stops it if already playing).
    tick.pause();
    tick.currentTime = 0;

    // Play the sound.
    tick.play();
}

function wheelFinished() {
    if(!reset) {
        reset = true;
        alert("Het is geworden: " + theWheel.getIndicatedSegment().text + ", eetsmakkelijk!");
    }
}

// stop music
function stopSound() {
    myAudio.pause();
    myAudio.currentTime = 0;
}

/**
 * toggle the music
 * @returns {any}
 */
const togglePlay = () => {

    let muteButton = document.getElementsByClassName('mute-icon')[0];
    let unMuteButton = document.getElementsByClassName('unmute-icon')[0];

    if (myAudio.paused) {
        muteButton.style.display = 'none';
        unMuteButton.style.display = 'block';
        mute = false;
        return myAudio.play();
    } else {
        unMuteButton.style.display = 'none';
        muteButton.style.display = 'block';
        mute = true;
        return myAudio.pause();
    }
};

const startWheel = () => {
    //reset the message
    reset = false;
    //start music
    if (!mute) {
        myAudio.play();
    }
    //start wheel animation
    theWheel.startAnimation();
    //disable start button
    startButton.disabled = true;
};

const resetWheel = () => {
    //reset wheel
    theWheel.stopAnimation();
    theWheel.rotationAngle = 0;
    theWheel.draw();

    //make the start button clickable
    startButton.disabled = false;

    //reset music
    myAudio.pause();
    myAudio.currentTime = 0;
};