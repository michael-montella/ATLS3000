// Michael Montella
// PPC4
// 090616

function setup() {
  createCanvas(1024, 720);
  noLoop(); 
  background(0);
}

function draw() {
  noStroke()
  var t = 0;
  for (var x = 10; x < 1024; x += 20) {
    
    t += 0.1;
    var r = 255 * noise(t + random(5, 15));
    var g = 255 * noise(t + random(5, 15));
    var b = 255 * noise(t + random(5, 15));
    var a = random(200, 255);
    
    fill(r, g, b, a);
    
    var radius = 0;
    var randomRadius = 0;
    var randomX = 0;
    var randomY = 0;
    for (var y = 10; y < 720; y += 20) {
      
      if(y <= height/2) {
        radius += 1;
      } else {
        radius -= 1;
      }
    
      if (x > 256 && x < 768) {
        randomRadius = random(radius - 1, radius + 4);
      } else {
        randomRadius = random(radius - 4, radius + 1);
      }
      
      randomX = random(x - 2, x + 2);
      randomY = random(y - 2, y + 2);
      ellipse(randomX, randomY, randomRadius, randomRadius);
    }
  }
  
}