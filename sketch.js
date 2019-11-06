var cnv;
var slider;
var blueportal;
var overblue;
var redportal;
var overred;
var r;
var g;
var b;

function preload() {
  blueportal = loadImage("./assets/blueportal.png");
  overblue = loadImage("./assets/overblue.png");
  redportal = loadImage("./assets/redportal.png");
  overred = loadImage("./assets/overred.png");
}

function setup() {
  //create the canvas and place it inside the main div of the html
  var cnv = createCanvas(0.8 * windowWidth, 0.8 * windowHeight)
  cnv.parent('#centerQuad');

  //create a slider that sets the size of the spaceship
  slider = createSlider(50, 100, 75);
  slider.position(windowWidth / 2 - 66, windowHeight * 0.807);

  //create spaceship
  rectangle = new spaceship(width / 2, height / 2, 150, 10)
}

function draw() {
  background('black');

  //create a frame for the slider
  push();
  noFill();
  stroke('white');
  strokeWeight(4);
  rectMode(CENTER);
  rect(width / 2, height * 0.9, 150, 50);
  pop();

  //create a button to change the color of the spaceship

  var buttonColor = select(".button");
  buttonColor.mousePressed(function(changeColor) {
    r = 100 + 150 * random();
    g = 100 + 150 * random();
    b = 100 + 150 * random();
  });

  //create the portals for the spaceship to go through
  push();
  imageMode(CENTER);
  image(blueportal, 0.15 * windowWidth, windowHeight / 2 - windowHeight * 0.1, windowWidth / 4, windowWidth / 4);
  image(redportal, windowWidth * 0.65, windowHeight / 2 - windowHeight * 0.1, windowWidth / 4, windowWidth / 4);

  //call the functions for the spaceship
  rectangle.display();
  rectangle.move();
  rectangle.checkbounds();

  //create some black rectangles to cover the space between the images of the portals and the bounds of the canvas
  noStroke();
  fill('black');
  rect(0, 0, windowWidth * 0.07, windowHeight * 0.8);
  rect(windowWidth * 0.73, 0, windowWidth * 0.07, windowHeight * 0.8);
  image(overblue, 0.15 * windowWidth, windowHeight / 2 - windowHeight * 0.1, windowWidth / 4, windowWidth / 4);
  image(overred, windowWidth * 0.65, windowHeight / 2 - windowHeight * 0.1, windowWidth / 4, windowWidth / 4);
  pop();
}

//define how the spaceship is created
function spaceship(_x, _y, _size, _speed) {
  this.x = _x;
  this.y = _y;
  this.size = _size;
  this.speed = _speed

  this.checkbounds = function() {
    console.log(this.x);
    if (this.x < windowWidth * 0.03) {
      this.x = windowWidth * 0.8;
    }
  }

  this.display = function() {
    push();
    noStroke();
    fill('red');
    fill(r, g, b);
    rectMode(CENTER);
    rect(this.x, this.y, slider.value(), slider.value())
    rect(this.x + slider.value(), this.y, slider.value() / 2, slider.value() / 2)
    rect(this.x + slider.value() * 1.6, this.y, slider.value() / 4, slider.value() / 4)
    pop();
  }

  this.move = function() {
    this.x -= this.speed;
  }

}

function windowResized() {
  resizeCanvas(0.8 * windowWidth, 0.8 * windowHeight);
}
