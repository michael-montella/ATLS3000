// Michael Montella
// PPC4
// 090616

var firstRun = true;
var colors = [];
var count = 0;
var count1 = 0;

var r;
var g;
var b;
var a;

function setup() {
  createCanvas(1024, 720);
  
  background(0);
}

function draw() {
  background(0);
  drawCircles();
}

function drawCircles() {
  noStroke()
  var t = 0;
  
  for (var x = 10; x < 1024; x += 20) {
    
    randomColor(t);
    
    randomFill(r, g, b, a);
    fill(r, g, b, a);
    
    var radius = 0;
    var randomRadius = 0;
    var randomX = 0;
    var randomY = 0;
    
    randomRad(radius, x);
  }
}

function randomColor(t) {
  t += 0.1;
  var r = 255 * noise(t + random(5, 15));
  var g = 255 * noise(t + random(5, 15));
  var b = 255 * noise(t + random(5, 15));
  var a = random(200, 255);
  
  colors[count] = r;
  colors[count + 1] = g;
  colors[count + 2] = b;
  colors[count + 3] = a;
  
  count += 4;
  
}

function randomFill(r, g, b, a) {
  r = colors[count1];
  g = colors[count1 + 1];
  b = colors[count1 + 2];
  a = colors[count1 + 3];
  
  count1 += 1;
}

function randomRad(rad, x) {
  for (var y = 10; y < 720; y += 20) {
    
    if(y <= height/2) {
      rad += 1;
    } else {
      rad -= 1;
    }
  
    if (x > 256 && x < 768) {
      randomRadius = random(rad, rad + 2);
    } else {
      randomRadius = random(rad - 2, rad);
    }
    
    randomX = random(x - 1, x + 1);
    randomY = random(y - 1, y + 1);
    ellipse(randomX, randomY, randomRadius, randomRadius);
  }
} 

