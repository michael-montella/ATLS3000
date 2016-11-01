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

var gameOver = false;

var trumpLeft = false;
var clintonLeft = false;

function preload() {
  //Loads images
  
  trump = loadImage("trump.png");
  trump2 = loadImage("trump2.png");
  clinton = loadImage("clinton.png");
  clinton2 = loadImage("clinton2.png");
  debateStage = loadImage("debateStage.jpg");
}

function setup() {
  createCanvas(1280, 720);

  background(255);
  fill(0);
  
  //Top text for each candidate
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

  //Doesn't let characters go off screen
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


  // Changes images based on which direction they're moving
  if(trumpLeft) {
    image(trump2, trumpX, 595);
  } else {
    image(trump, trumpX, 595);
  }
  
  if(clintonLeft) {
    image(clinton2, clintonX, 595);
  } else {
    image(clinton, clintonX, 595);
  }

  // Hitboxes
  noFill();
  ellipse(trumpX + 60, 625, 50, 50);
  ellipse(clintonX + 60, 625, 50, 50);

  if (!gameOver) {
    for (var i = 0; i < votes.length; i++) {
      votes[i].show();
      votes[i].move();

      if (votes[i].hit(trumpX + 60, 625)) {
        votes[i].count();
        //Decides how many votes to add based on size of dot
        var newVotes = Math.round(votes[i].r);
        if (trumpVotes < 620) {
          trumpVotes += newVotes;
        } else {
          gameOver = true;

        }
      } else if (votes[i].hit(clintonX + 60, 625)) {
        votes[i].count();
        var newVotes = Math.round(votes[i].r);
        if (clintonVotes < 620) {
          clintonVotes += newVotes;
        } else {
          gameOver = true;
        }
      }
    }
  } else {
    // If the game is finished, splice all dots from array
    for (var x = 0; x < votes.length; x++) {
      votes.splice(x, 1);
    }
    gameFinished();
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
    trumpLeft = true;
  } else if (keyCode == RIGHT_ARROW && trumpX <= 1166) {
    trumpSpeed += 1;
    trumpLeft = false;
  }

  if (keyCode == 65 && clintonX >= 0) {
    clintonSpeed -= 1;
    clintonLeft = true;
  } else if (keyCode == 68 && clintonX <= 1166) {
    clintonSpeed += 1;
    clintonLeft = false;
  }
}

function gameFinished() {
  fill(0);
  textAlign(CENTER);
  textSize(72);
  if (trumpVotes > clintonVotes) {
    println("Trump wins");
    text("Donald Trump wins the election!", width/2, height/2);
  } else if (clintonVotes > trumpVotes) {
    println("Clinton wins");
    text("Hillary Clinton wins the election!", width/2, height/2);
  } else {
    println("Its a tie");
    text("The election results in a tie!", width/2, height/2);
  }
}