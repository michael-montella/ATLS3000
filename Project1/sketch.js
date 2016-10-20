// Project 1
// Michael Montella

var trumpVotes = 0;
var clintonVotes = 0;
var trump;
var trump2;
var trumpImg = trump;
var clinton;
var clinton2;
var trumpSpeed = 0;
var clintonSpeed = 0;
var trumpX = 956;
var clintonX = 200;

var votes = [];

var gameover = false;


function preload() {
  trump = loadImage("trump.png");
  trump2 = loadImage("trump2.png");
  clinton = loadImage("clinton.png");
  clinton2 = loadImage("clinton2.png");
}

function setup() {
  createCanvas(1280, 720);

  background(255);
  fill(0);
  text("Hillary Clinton", 15, 30);
  text("Donald Trump", width - 100, 30);

  for (var i = 0; i < 20; i++) {
    votes[i] = new Vote();
  }
}



function draw() {
  noStroke();
  fill(255);
  rect(0, 100, 1280, 620)
    // Clinton Progress Bar
  fill(0, 0, 255);
  rect(10, 50, clintonVotes, 25);

  // Trump Progress Bar
  fill(255, 0, 0);
  rect(width - trumpVotes - 10, 50, trumpVotes, 25);

  trumpX += trumpSpeed;
  clintonX += clintonSpeed;

  if (trumpX >= 1166) {
    trumpSpeed = 0;
    trumpX = 1166;
  } else if (trumpX <= 0) {
    trumpSpeed = 0;
    trumpX = 0;
  }

  if (clintonX >= 1166) {
    clintonSpeed = 0;
    clintonX = 1166;
  } else if (clintonX <= 0) {
    clintonSpeed = 0;
    clintonX = 0;
  }

  image(trump, trumpX, 595);
  image(clinton, clintonX, 595);

  // Hitboxes
  noFill();
  ellipse(trumpX + 60, 625, 50, 50);
  ellipse(clintonX + 60, 625, 50, 50);

  if (!gameover) {
    for (var i = 0; i < votes.length; i++) {
      votes[i].show();
      votes[i].move();

      if (votes[i].hit(trumpX + 60, 625)) {
        votes[i].count();
        if (trumpVotes < 625) {
          trumpVotes += 20;
        } else {
          gameOver = true;
        }
      } else if (votes[i].hit(clintonX + 60, 625)) {
        votes[i].count();
        if (clintonVotes < 625) {
          clintonVotes += 20;
        } else {
          gameOver = true;
        }
      }
    }
  }

  if (gameover) {
    for (var x = 0; x < votes.length; x++) {
      votes.splice(x, 1);
    }
  }

  for (var w = votes.length - 1; w >= 0; w--) {
    if (votes[w].toDelete) {
      votes.splice(w, 1);
    }

    if (votes.length < 20) {
      for (var j = votes.length; j < 20; j++) {
        votes[j] = new Vote();
      }
    }
  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW && trumpX >= 11) {
    trumpSpeed -= 1;
  } else if (keyCode == RIGHT_ARROW && trumpX <= 1166) {
    trumpSpeed += 1;
  }

  if (keyCode == 65 && clintonX >= 0) {
    clintonSpeed -= 1;
  } else if (keyCode == 68 && clintonX <= 1166) {
    clintonSpeed += 1;
  }



}