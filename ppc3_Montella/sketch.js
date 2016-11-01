// Michael Montella
// Kyle Frye

function setup() {
  createCanvas(500, 500);

}

function draw() {
  var size = 100
  background(255, 0, 0);
  
  if (mouseX > width/2 && mouseX < width/2 + size && mouseY > height/2 && mouseY < height/2 + size) {
    fill(0);
    rect(width/2, height/2, size, size);
  } else {
    fill(255);
    
  }
  rect(width/2, height/2, size, size);
 
  
  if (dist(mouseX, mouseY, 100, 100) < size/2) {
    fill(0, 255, 0);
    ellipse(100, 100, size, size);
  } else {
    fill(255);
  }
  
  ellipse(100, 100, size, size);
}