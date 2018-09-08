<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rad voor de lunch</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>

<div id="mute">
    <span class="mute-icon">
        <img id="toggle-audio-btn" src="img/mute.svg" alt="">
    </span>
    <span class="unmute-icon">
        <img src="img/unmute.svg" alt="">
    </span>
</div>

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column text-center">

    <header class="masthead mb-auto"></header>

    <main role="main" class="inner cover">
        <h1 class="cover-heading">Rad voor de lunch</h1>
        <p>Kan jij geen keuze maken wat je 's middags gaat oppeuzelen? Geen nood, geef harde slinger aan het rad!</p>

        <div class="row control-btns">
            <div class="w-100">
                <button id="startButton" type="button" class="btn btn-primary">Spin het rad!</button>
                <button id="resetButton" type="button" class="btn btn-outline-primary" href="javascript:void(0);">
                    Reset
                </button>
            </div>
        </div>

        <div id="canvas-container">
            <canvas id='canvas' width='470' height='470'>
                Canvas not supported, use another browser.
            </canvas>
            <img id="pointer" src="img/point.png" alt="pointer"/>
        </div>
        
    </main>

    <footer class="mt-auto">
        <audio id="myAudio" src="audio/song.mp3" preload="auto">
            Your browser does not support the audio element.
        </audio>
        <!--        <a class="btn btn-link" id="toggle-audio-btn">Click here to hear.</a>-->
    </footer>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.﻿cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>
﻿
<script src="js/winwheel.js"></script>
<script src="js/app.js"></script>

</body>
</html>