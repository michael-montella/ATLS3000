function Microbe(index) {
  this.size = random(8, 30);
  this.y = random(height / 6, (5 * height) / 6);
  this.x = random(width / 2 - (height / 3), width / 2 + (height / 3));
  this.index = index;

  this.xSpeed = random(-2, 2);
  this.ySpeed = random(-2, 2);
  this.display = function() {
    //println(this.x),
    stroke(0);
    noFill();
    ellipse(this.x, this.y, this.size, this.size);

    var spokes = random(30, 36);

    for (var i = 0; i < this.size; i++) { // 36 is the number of spokes
      push();
      translate(this.x, this.y); // translate to the middle of the screen/ellipse
      var theta = radians((360 / (this.size / 2)) * i); // increase the angle by 10 degrees multipled by i and convert to radians
      var x1 = this.size / 2 * cos(theta);
      var y1 = this.size / 2 * sin(theta);
      var x2 = (this.size / 2 + random(5, 10)) * cos(theta); // +10 is the length of the spokes
      var y2 = (this.size / 2 + random(5, 10)) * sin(theta); // +10 is the length of the spokes
      line(x1, y1, x2, y2);
      pop();
    }

  }

  this.move = function() {
    if (dist(width / 2, height / 2, this.x, this.y) > ((height - 50) / 2) - (this.size / 2)) {
      this.xSpeed *= -1;
      this.ySpeed *= -1;
    }
    if (dist(this.x, this.y, mouseX, mouseY) < this.size) {
      this.xSpeed *= -1;
      this.ySpeed *= -1;
    }
    for (i = 0; i < microbes.length; i++) {
      if (i != this.index && dist(this.x, this.y, microbes[i].x, microbes[i].y) < this.size) {
        this.xSpeed *= -1;
        this.ySpeed *= -1;
      }
    }
    this.y += this.ySpeed;
    this.x += this.xSpeed;
  }
}