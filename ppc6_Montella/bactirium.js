function Bactirium() {
  this.maxSize = random(10, 20);
  this.minSize = random(5, 10);
  this.currentSize = random(this.minSize,this.mazSize);
  this.y = random(height / 6, (5 * height) / 6);
  this.x = random(width / 2 - (height / 3), width / 2 + (height / 3));
  // this.previousTime = time(0);

  this.test = function() {
    ellipse(this.x,this.y,this.currentSize/2,this.currentSize/2);
  }
  
  
  //Trying to grow and shrink bacteria slowly but time is not defined
  
  // this.grow = function() {
  //   if (time() - previousTime > 1) {
  //     this.currentSize += 1;
  //   }
  // }

}