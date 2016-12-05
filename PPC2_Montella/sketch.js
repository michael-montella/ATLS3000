//Kyle Frye
//Michael Montella
//Jeremy King

function setup() {
  createCanvas(1000,1000);
  frameRate(25);
}

function draw() {
  var ranr = random(mouseX, mouseY);
  var rang = random(mouseX, mouseY);
  var ranb = random(mouseX, mouseY);
  var rana = random(mouseX, mouseY);
  
  var sranr = random(mouseX, mouseY);
  var srang = random(mouseX, mouseY);
  var sranb = random(mouseX, mouseY);
  
  r = map(ranr, mouseX, mouseY, 0, 255);
  g = map(rang, mouseX, mouseY, 0, 255);
  b = map(ranb, mouseX, mouseY, 0, 255);
  a = map(rana, mouseX, mouseY, 0, 255);
  
  sr = map(sranr, mouseX, mouseY, 0, 255);
  sg = map(srang, mouseX, mouseY, 0, 255);
  sb = map(sranb, mouseX, mouseY, 0, 255);

  
  rand = (random(-height/4 , height/4));
  rand2 = (random(-height/4 , height/4));
  
  randw = random(0, 100);
  randh = random(0, 100);

  
  
  stroke(sr,sg, sb);
  fill(r, g, b, a)
  rect(mouseX + rand, mouseY + rand2 , randw, randh)
}

function mousePressed() {
  background(255)
  
}