function setup() {
  createCanvas(500,500);
}

function draw() {
  background(245, 245, 239);
  fill(0, 153, 153, 125);
  stroke(0, 0, 0, 0)
  quad(100, 0, 200, 0, 500, 300, 500, 480);
  fill(255, 219, 77, 125);
  quad(0, 350, 480, 0, 500, 0, -40, 600);
  fill(0, 0, 0, 0)
  stroke(0, 0, 0)
  strokeWeight(20)
  ellipse(250, 250, 400, 400);
  fill(255, 0, 0, 200);
  strokeWeight(2);
  ellipse(263, 75, 13, 13);
  fill(255, 128, 128);
  ellipse(280, 380, 30, 30);
  strokeWeight(1);
  stroke(100);
  line(360, 110, 320, 400);
  line(340, 118, 306, 380);
  strokeWeight(2);
  line(350, 115, 313, 390);
  fill(255, 140, 102);
  strokeWeight(1);
  ellipse(125, 337, 36, 36);
  //purpleish overlap teal below
  stroke(0);
  strokeWeight(2.5);
  fill(230, 0, 115, 130);
  ellipse(380, 335, 25, 25);
  //lines bottom 
  strokeWeight(1)
  stroke (0, 0, 0, 100)
  line(303, 381, 350, 360);
  line(303, 374, 350, 354);
  line(301, 367, 350, 347);
   //near invisiable blue circle
   fill(0, 170, 153, 200)
  ellipse(340, 230, 120, 120)
  //large olive green circle 
  fill(51, 77, 0, 200);
  ellipse(240, 260, 150, 150);
 
}