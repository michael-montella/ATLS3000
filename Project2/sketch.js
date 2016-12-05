// Michael Montella
// Project 2


var table;
var nameCol = 0;
var yearCol = 6;
var latitudeCol = 7;
var longitudeCol = 8;
var massCol = 4;
var maxMass = 0;

var years = [];
var yearCount = [];
var frequency = [];

function preload() {
  table = loadTable("landings.csv", "csv", "header");
  font = loadFont('HelveticaNeue.otf');
}

function setup() {
  noLoop();
  //Works best at 1920x1000
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);

  createYearArrays();
  sortArray();
}

function draw() {
  fill(0);
  textAlign(CENTER);

  // translates each section to a certain part of the window
  push();
  translate(width / 2, 50);
  textFont(font);
  textSize(48);
  text("Meteorite Landings", 0, 0);
  textSize(12);
  text("Data provided by NASA", 0, 20);
  pop();

  push();
  translate(0, 100);
  showMap();
  pop();

  push();
  translate((window.innerWidth * 0.625) + 50, 200);
  barGraphs();
  pop();

  push();
  translate((window.innerWidth * 0.625) + 150, 650);
  showData();
  pop();
}

function showMap() {
  for (var i = 0; i < table.getRowCount(); i++) {
    
    // Get latitude and longitude from table
    var latitude = parseFloat(table.getString(i, latitudeCol));
    var longitude = parseFloat(table.getString(i, longitudeCol));
    var colorLat = latitude;
    var colorLong = longitude;
    
    latitude *= -1; // Inverts Latitude to work in p5

    // Changes size of map based on window size
    mapWidth = window.innerWidth * 0.625;
    mapHeight = mapWidth * 0.5958;

    // Maps latitude and longitude to fit on map
    latitude = map(latitude, -90, 90, 0, mapHeight);
    longitude = map(longitude, -180, 180, 0, mapWidth);
    
    // Maps latitude to color range
    colorLat = map(colorLat, -90, 90, 0, 255);
    
    noStroke();
    fill(colorLat, 0, 255 - colorLat);
    ellipse(longitude, latitude, 6, 6);
    
    
  }
  
  fill(0);
  textAlign(CENTER);
  textFont(font);
  textSize(24);
  text("Location of landings", mapWidth/2, mapHeight + 30);
}

// Creates bar graphs
function barGraphs() {
  rectMode(CORNERS);
  textFont(font);
  textSize(24);
  noStroke();
  
  push();
  fill(0);
  textAlign(LEFT);
  translate(100, -20);
  text("Years with most meteorite landings", 0, 0);
  pop();
  
  // Create year label
  for (var i = 0; i < 5; i++) {
    push();
    translate((100 * i) + 100, 330);
    textAlign(CENTER);
    text(yearCount[i], 75 / 2, 0);
    pop();
  }
  
  // Create rectangle and # of landings label
  for (var i = 0; i < 5; i++) {
    push();
    translate((100 * i) + 100, 300);

    var h = frequency[i];
    var colorH = h;
    h = map(h, 0, 3323, 0, 300);
    colorH = map(colorH, 2296, 3323, 0, 255);
    fill(colorH, 0, 255 - colorH);
    rect(0, 0, 75, -h);

    fill(255);
    textAlign(CENTER);
    text(frequency[i], 75 / 2, -h + 25);
    pop();
  }
}

function showData() {
  var totalData = table.getRowCount();    // Total rows of data

  textAlign(LEFT);
  textFont(font);
  textSize(24);
  text("Total meteorite landings: " + totalData, 0, 0);

  text("Year with most landings: " + yearCount[0], 0, 50);

  text("Earliest known landing: 861ad", 0, 100);

  text("Largest mass: " + maxMass/1000 + "kg", 0, 150);
}

// Creates arrays
function createYearArrays() {
  for (var i = 0; i < table.getRowCount(); i++) {
    // Get year from table
    var year = table.getString(i, yearCol);
    // Remove everything but the year and conver to integer
    year = parseInt(year.substring(6));
    years[i] = year; // Puts each year formatted correctly into an array

    // Finds the largest mass in the data
    var mass = table.getString(i, massCol);
    mass = parseInt(mass);
    if (mass >= maxMass) {
      maxMass = mass;
    }
  }

  for (i = 861; i < 2014; i++) {
    // Initialize arrays
    yearCount[i - 861] = i;
    frequency[i - 861] = 0;
  }

  for (var x in years) {
    for (var y = 0; y < yearCount.length; y++) {
      if (years[x] == yearCount[y]) {
        frequency[y]++; // Increments value
      }
    }
  }
}

// Sorts arrays
function sortArray() {
  for (var j = 0; j < frequency.length; j++) {
    for (var i = 0; i < frequency.length; i++) {
      if (frequency[i] < frequency[i + 1]) {
        // Swaps places in frequency array
        var temp = frequency[i];
        frequency[i] = frequency[i + 1];
        frequency[i + 1] = temp;

        // Swaps places in year array to make sure it lines up with frequency
        var temp2 = yearCount[i];
        yearCount[i] = yearCount[i + 1];
        yearCount[i + 1] = temp2;
      }
    }
  }
}