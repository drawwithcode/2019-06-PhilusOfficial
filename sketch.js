var cnv;
var slider;
var blueportal;
var overblue;
var redportal;
var overred;

function preload() {
  blueportal = loadImage("./assets/blueportal.png");
  overblue = loadImage("./assets/overblue.png");
  redportal = loadImage("./assets/redportal.png");
  overred = loadImage("./assets/overred.png");
}

function setup() {
  var cnv = createCanvas(1500, 800)
  cnv.parent('#centerquad');
  slider = createSlider(50, 100, 75);
  slider.position(width/2, 800);

  rectangle = new spaceship(width/2, height/2, 150,10)
}

function draw() {
  background('black');


  imageMode(CENTER);
  image(blueportal, 350, 400, 500, 500);
  image(redportal, 1150, 400, 500, 500);

  rectangle.display();
  rectangle.move();
  rectangle.checkbounds();

  noStroke();
  fill('black');
  rect(0,0,110,800)
  rect(1390,0,110,800)
  image(overblue, 350, 400, 500, 500);
  image(overred, 1150, 400, 500, 500);
}

function spaceship(_x,_y,_size,_speed) {
  this.x = _x;
  this.y = _y;
  this.size = _size;
  this.speed = _speed

  this.checkbounds = function() {
    if (this.x == 150) {
      this.x = 1350;
    }
  }

  this.display = function() {
    push();
    fill('red');
    rectMode(CENTER);
    rect(this.x, this.y, slider.value(), slider.value())
    rect(this.x+slider.value(), this.y, slider.value()/2, slider.value()/2)
    rect(this.x+slider.value()*1.6, this.y, slider.value()/4, slider.value()/4)
    pop();
  }

  this.move = function() {
 	this.x -= this.speed;
  }

}
