//Jeremy, Kathy, Michael
//PPC05

var star = {
  x:100,
  y:200,
}

function setup() {
  createCanvas(600, 400);

  fish1 = new swim();
  fish2 = new swim();
  fish3 = new swim();
  
  starfish1 = new spin();
}

function draw() {
  background(0, 150, 150);
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(0, 0, width, height);

  fish1.display();
  fish1.move();

  fish2.display();
  fish2.move();
  
  fish3.display();
  fish3.move();

  starfish1.display();
  starfish1.move();

}
// Fish
function swim(x, y) {
  this.x = random(25, width - 25);
  this.y = random(25, height - 25);
  this.xspeed = 2;
  this.yspeed = 2;

  this.move = function() {

    this.x += this.xspeed;
    this.y += this.yspeed;

    if (this.x >= width - 25 || this.x <= 25) {
      this.xspeed *= -1;
    }

    if (this.y >= height - 25 || this.y <= 25) {
      this.yspeed *= -1;
    }

  }

  this.display = function() {
    fill(200, 0, 0);
    ellipse(this.x, this.y, 50, 50);

  }

}

//Starfish

function spin() {
  
  star.x = random(60, width - 60);
  star.y = random(60, height - 60);
  star.xspeed = .5;
  star.yspeed = .5;
  
  this.move = function() {
    star.x += star.xspeed;
    star.y += star.yspeed;

    if (star.x >= width - 55 || star.x <= 55) {
      star.xspeed *= -1;
    }

    if (star.y >= height - 55 || star.y <= 55) {
      star.yspeed *= -1;
    }
    
  }

  this.display = function() {
    fill (242,242,63);
    translate(star.x, star.y);
    noStroke();
    for (var i = 0; i < 10; i++) {
      ellipse(0, 30, 20, 80);
      rotate(PI / 5);
    }
  }
}