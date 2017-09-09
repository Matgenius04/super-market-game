var thingy;
var world;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL).position(0, 0);
  loop();
}

function draw() {
  background(15);
  model(world);
  camera(0, 0, sin(frameCount * 0.01) * 100);
}

function preload() {
  world = loadModel('assets/objects/supermarket.obj');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
