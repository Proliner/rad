<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rad van lunch</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

</head>
<body>

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

    <header class="masthead mb-auto">
        <audio id="myAudio" src="audio/song.mp3" preload="auto">
            Your browser does not support the audio element.
        </audio>
        <a onClick="togglePlay()">Click here to hear.</a>
    </header>

    <main role="main" class="inner cover">
        <h1 class="cover-heading">Rad van de middag lunch</h1>
        <p>Kan je geen keuzen maken in de middag lunch? Geen nood gebruik het rad van de middag lunch!</p>

        <canvas id='canvas' width='440' height='470'>
            Canvas not supported, use another browser.
        </canvas>

        <div class="row">
            <div>
                <button id="startButton" type="button" class="btn btn-primary" onclick="theWheel.startAnimation(); this.disabled=true;">Spin het rad!</button>
                <button type="button" class="btn btn-outline-primary" href="javascript:void(0);" onclick="theWheel.stopAnimation(); theWheel.rotationAngle=0; theWheel.draw(); startButton.disabled=false;">Reset</button>
            </div>
        </div>

    </main>

    <footer class="mastfoot mt-auto">

    </footer>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.﻿cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>﻿
<script src="js/winwheel.js"></script>
<script src="js/app.js"></script>

</body>
</html>