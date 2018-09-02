let startButton = document.getElementById('startButton');

let theWheel = new Winwheel({
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
            'duration': 20,
            'spins': 5,
            'callbackSound': playSound,    // Specify function to call when sound is to be triggered.
            'soundTrigger': 'pin'         // Pins trigger the sound for this animation.
        },
    'pins':    // Display pins, and if desired specify the number.
        {
            'number': 16
        }
});

let audio = new Audio('../audio/tick.mp3');  // Create audio object and load desired file.

function playSound() {
    // Stop and rewind the sound (stops it if already playing).
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}

let myAudio = document.getElementById("myAudio");

function togglePlay() {
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}