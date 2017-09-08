var startScreen;
var startButton;
function setup() {
  createCanvas(windowWidth, windowHeight);
  startScreen = loadImage("assets/AnimatedSupermarket.gif");
  startButton = loadImage("assets/startbutton.png")
}
function draw() {
  image(startScreen,0,0,windowWidth,windowHeight);
  image(startButton,windowWidth/2-100,windowHeight/2-50,100,50);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  image(startScreen,0,0,windowWidth,windowHeight);
  image(startButton,windowWidth/2-100,windowHeight/2-50,100,50);
}
function MouseClicked() {
if (mouseX == windowWidth/2-100 < windowWidth/2 && mouseY == windowHeight/2-50 < windowHeight/2)
console.log("life works")
else {
  console.log("broken")
}
}
