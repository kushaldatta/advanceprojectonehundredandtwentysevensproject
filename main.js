//JS Code
var song1 = "";
var song2 = "";

function preload() {
    song1 = loadSound("LWS.mp3");
    song2 = loadSound("RWS.mp3");
}

function setup() {
    canvas = createCanvas(550, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 550, 500);
}