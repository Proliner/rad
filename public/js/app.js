window.addEventListener('load', init);

var theWheel;
var startButton = document.getElementById('startButton');
var resetButton = document.getElementById('resetButton');
var myAudio = document.getElementById("myAudio");
var tick = new Audio('../audio/tick.mp3');  // Create audio object and load desired file.
var toggleAudioBtn = document.getElementById('mute');
var mute = false;

function init() {
    toggleAudioBtn.addEventListener('click', togglePlay);
    startButton.addEventListener('click', startWheel);
    resetButton.addEventListener('click', resetWheel);
}

theWheel = new Winwheel({
    'textMargin': 25,
    'textAlignment': 'center',
    'outerRadius': 220,
    // 'innerRadius': 90,
    'numSegments': 5,
    'segments':
        [
            {'fillStyle': '#2fb2ea', 'text': 'Albert Heijn'},
            {'fillStyle': '#f2f2ec', 'text': '\'t Smoske'},
            {'fillStyle': '#ef9716', 'text': 'Lunchbox'},
            {'fillStyle': '#018500', 'text': 'McDonald\'s'},
            {'fillStyle': '#e70e39', 'text': 'Domino\'s Pizza'}
        ],
    'animation':
        {
            'type': 'spinToStop',
            'duration': 10,
            'spins': 5,
            'callbackSound': playTick,    // Specify function to call when sound is to be triggered.
            'soundTrigger': 'pin',         // Pins trigger the sound for this animation.
            // 'callbackFinished': stopSound
        },
    'pins':    // Display pins, and if desired specify the number.
        {
            'number': 24
        }
});

function playTick() {

    // Stop and rewind the sound (stops it if already playing).
    tick.pause();
    tick.currentTime = 0;

    // Play the sound.
    tick.play();
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

    if(myAudio.paused) {
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
    //start music
    if(!mute) {
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