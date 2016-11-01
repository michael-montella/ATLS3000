var yearArray = ["2010", "2011", "2012", "2013", "2014", "2015"];

function Bubble(size, x) {
  this.size = size;
  this.y = height/2;
  this.x = x
  
  this.display = function() {
    fill(size);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size, this.size);
  }
  
  this.mouseOver = function(x, y) {
    var distance = dist(x, y, this.x, this.y);
    return(distance < size/2);
  }
  
  this.displayFacts = function(pop, i, j) {
    ellipse(this.x, this.y, this.size * 2, this.size * 2);
    fill(100, 100, 255);
    textAlign(CENTER);
    textSize(28);
    text(yearArray[i], this.x, this.y - 15);
    
    textSize(j);
    text(pop, this.x, this.y + 15);
  }
}