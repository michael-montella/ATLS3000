// Michael Montella
// PPC 9

var table;
var population = [];
var stringPop = [];
var bubbles = [];
var font = [14, 16, 18, 20, 22];
var string1;
var string2;
var x = 100;

function preload() {
  table = loadTable("statepopulation.csv", "csv", "header");
}

function setup() {
  createCanvas(1280, 720);

  for (var r = 0; r < table.getRowCount(); r++) {
    //println(table.getString(r, 0));
    if (table.getString(r, 0) == ".Colorado") {
      for (var c = 1; c < table.getColumnCount(); c++) {
        population[c - 1] = table.getString(r, c);
        stringPop[c - 1] = table.getString(r, c);
      }
    }
  }


  // Removes commas and turns all strings into integers
  for (var i = 0; i < population.length; i++) {
    string1 = population[i];
    if (typeof(string1) != "undefined") {
      population[i] = parseFloat(parseInt(string1.replace(/,/g, "")) / 10000);
    } else {
      println("Undefined " + i);
    }
  }

  for (var i = 0; i < population.length; i++) {
    var initial = population[0];
    var size = (population[i] - initial + 10) * 5;
    x += size;

    bubbles[i] = new Bubble(size, x);
  }

}

function draw() {
  background(255);
  fill(0);
  textSize(72);
  textAlign(CENTER);
  text("Colorado Population", width/2, 100);
  for (var i = 0; i < bubbles.length; i++) {
    // var initial = population[0];
    // var size = (population[i] - initial + 10) * 5;
    // x += size;
    // fill(size);
    // ellipse(x, height / 2, size, size);
    bubbles[i].display();
    if (bubbles[i].mouseOver(mouseX, mouseY)) {
      bubbles[i].displayFacts(stringPop[i], i, font[i]);
    } 
  }
}