function Vote() {
  this.x = random(0, 1280);
  this.y = 115;
  this.r = random(10, 30);
  this.ySpeed = random(1, 3);
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, this.r, this.r);
  }

  this.move = function() {
    this.y += this.ySpeed / 2;

    if (this.y > 750) {
      this.toDelete = true;
    }
  }

  this.hit = function(x, y) {
    var distance = dist(this.x, this.y, x, y);
    return (distance < this.r +25);
  }

  this.count = function() {
    this.toDelete = true;
  }
}