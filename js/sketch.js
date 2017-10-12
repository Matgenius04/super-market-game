var thingy;
var world;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).position(0, 0);
  loop();
}

function draw() {
  background(15);
  rotateZ(PI);
  model(world);
  camera(100, 100, 100, 0, 0, 0, 1, 0, 0);
}

function preload() {
  world = loadModel('assets/objects/supermarket.obj');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
