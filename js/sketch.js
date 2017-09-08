var startScreen;
var startButton;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).position(0, 0);
}

function draw() {
  background(15);
  box(0, 0, 0, 0);
  moveCamera(0, 0, 0, 1, 0, 0);
}

function preload() {
  loadModel('assets/objects/supermarket.obj');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
