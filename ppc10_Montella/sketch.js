//PPC10
//Jeremy King and Michael Montella

var btemp;
var atemp;
var mtemp;
var ltemp;
var br;
var bb;
var mr;
var mb;
var ar;
var ab;
var lr;
var lb;



function setup() {
  createCanvas(400, 400);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=33101,us&units=imperial&appid=bd49e152ec047de07eed885357a52966", miamiData);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=99501,us&units=imperial&appid=bd49e152ec047de07eed885357a52966", ancData);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=90057,us&units=imperial&appid=bd49e152ec047de07eed885357a52966", laData);
  loadJSON("http://api.openweathermap.org/data/2.5/weather?zip=80303,us&units=imperial&appid=bd49e152ec047de07eed885357a52966", boulderData);
}

function ancData(data) {
  atemp = data.main.temp;

  ar = map(atemp, -10, 110, 0, 255);
  ab = 255 - map(atemp, -10, 110, 0, 255);

  println(atemp);
}

function boulderData(data) {
  btemp = data.main.temp;

  br = map(btemp, -10, 110, 0, 255);
  bb = 255 - map(btemp, -10, 110, 0, 255);

  println(btemp);
}

function miamiData(data) {
  mtemp = data.main.temp;

  mr = map(mtemp, -10, 110, 0, 255);
  mb = 255 - map(mtemp, -10, 110, 0, 255);

  println(mtemp);
}

function laData(data) {
  ltemp = data.main.temp;

  lr = map(ltemp, -10, 110, 0, 255);
  lb = 255 - map(ltemp, -10, 110, 0, 255);

  println(ltemp);
}

function draw() {
  noStroke();

  fill(br, 0, bb);
  rect(0, 0, 200, 200);
  fill(255);
  textSize(21);
  textAlign(LEFT);
  text("Boulder", 0, 0, 50, 50);
  textAlign(CENTER);
  text(String(btemp) + "\xB0F", 100, 100);

  fill(mr, 0, mb);
  rect(200, 0, 200, 200);
  fill(255);
  textAlign(LEFT);
  text("Miami", 200, 0, 50, 50);
  textAlign(CENTER);
  text(String(mtemp) + "\xB0F", 300, 100);

  fill(ar, 0, ab);
  rect(0, 200, 200, 200);
  fill(255);
  textAlign(LEFT);
  text("Anchorage", 0, 200, 50, 50);
  textAlign(CENTER);
  text(String(atemp) + "\xB0F", 100, 300);

  fill(lr, 0, lb);
  rect(200, 200, 200, 200);
  fill(255);
  textAlign(LEFT);
  text("Los Angeles", 200, 200, 1000, 1000);
  textAlign(CENTER);
  text(String(ltemp) + "\xB0F", 300, 300);
}