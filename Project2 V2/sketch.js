// Michael Montella
// Project 2 V2


var table;
var nameCol = 0;
var yearCol = 6;
var latitudeCol = 7;
var longitudeCol = 8;
var massCol = 4;

function preload() {
  table = loadTable("landings.csv", "csv", "header");
}

function setup() {
  noLoop();
  createCanvas(1200, 715);
  background(41, 111, 255);

  for (var i = 0; i < 20; i++) {
    println(table.getString(i, yearCol));
  }

}

function draw() {
  // Draws ellipses
  for (var i = 0; i < table.getRowCount(); i++) {
    var yearString;
    var year = table.getString(i, yearCol);
    year = parseInt(year.substring(6));
    year = map(year, 0, 2016, 0, 255);
    println(year);
    
  }

  // Test hover with mouse
  if (dist(mouseX, mouseY, 50, 50) < 25 / 2) {

  }
}