function playSound(music) {
    var audio = new Audio(music);
    audio.play();
}

function mouseDown(node) {
    document.getElementById("JazzDrum").src = node;
}

function mouseUp() {
    document.getElementById("JazzDrum").src = "online-drums.jpg";
}