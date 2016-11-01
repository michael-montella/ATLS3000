function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  for (var i = 20; i < width; i += width / 10) {
    for (var j = 20; j < height; j += height / 10) {
      fill(random(0, 255));
      ellipse(i, j, 40, 40);
    }
  }
}