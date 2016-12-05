// Michael Montella Reed Otto

var microbes = [];
var bactirium = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i < 20; i++) {
    microbes[i] = new Microbe(i);
  }
  for (var o = 0; o < 20; o++) {
    bactirium[o] = new Bactirium();
  }
}

function draw() {
  background(255);
  stroke(0);
  fill(255);
  ellipse(width / 2, height / 2, height - 50, height - 50);
  for (var i = 0; i < microbes.length; i++) {
    microbes[i].move();
    microbes[i].display();
  }
  for (var o = 0; o < bactirium.length; o++) {
    bactirium[o].test();
  }
}

