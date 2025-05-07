
let sounds = []; 
let pics = []; 


function preload() {
  sounds[0] = loadSound("sound/bass.wav");
  sounds[1] = loadSound("sound/snare.wav");
  sounds[2] = loadSound("sound/smalltom.wav");
  sounds[3] = loadSound("sound/bigtom.wav");
  sounds[4] = loadSound("sound/floor.wav");
  sounds[5] = loadSound("sound/crash.wav");
  sounds[6] = loadSound("sound/ride.wav");
  sounds[7] = loadSound("sound/hi-hat.wav");

  pics[0] = loadImage('pics/bass.jpg');
  pics[1] = loadImage('pics/snare.jpg');
  pics[2] = loadImage('pics/smalltom.jpg');
  pics[3] = loadImage('pics/bigtom.jpg');
  pics[4] = loadImage('pics/floor.jpg');
  pics[5] = loadImage('pics/crash.jpg');
  pics[6] = loadImage('pics/ride.jpg');
  pics[7] = loadImage('pics/hihat.jpg');
}

function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER);
  textSize(30);
  imageMode(CENTER);
  
}


function draw() {
  background(220);
  if (keyCode == 66){ //B
    image(pics[0], width/2, height/2, 500, 500);
  }
  else if (keyCode == 83){ //S
    image(pics[1], width/2, height/2, 500, 500);
  }
  else if (keyCode == 87){ //W
    image(pics[2], width/2, height/2, 500, 500);
  }
  else if (keyCode == 69){ //E
    image(pics[3], width/2, height/2, 500, 500);
  }
  else if (keyCode == 70){ //F
    image(pics[4], width/2, height/2, 500, 500);
  }
  else if (keyCode == 67){ //C
    image(pics[5], width/2, height/2, 500, 500);
  }
  else if (keyCode == 82){ //R
    image(pics[6], width/2, height/2, 500, 500);
  }
  else if (keyCode == 72){ //H
    image(pics[7], width/2, height/2, 500, 500);
  }

}

function keyPressed(){
  if (keyCode == 66){ //B
    sounds[0].play();
  }
  else if (keyCode == 83){ //S
    sounds[1].play();
  }
  else if (keyCode == 87){ //W
    sounds[2].play();
  }
  else if (keyCode == 69){ //E
    sounds[3].play();
  }
  else if (keyCode == 70){ //F
    sounds[4].play();
  }
  else if (keyCode == 67){ //C
    sounds[5].play();
  }
  else if (keyCode == 82){ //R
    sounds[6].play();
  }
  else if (keyCode == 72){ //H
    sounds[7].play();
  }

}