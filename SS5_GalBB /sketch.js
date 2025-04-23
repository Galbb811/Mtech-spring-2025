
let sounds = []; 
let pics = []; 


function preload() {
  sounds[0] = loadSound("bass.wav");
  sounds[1] = loadSound("snare.wav");
  sounds[2] = loadSound("smalltom.wav");
  sounds[3] = loadSound("bigtom.wav");
  sounds[4] = loadSound("floor.wav");
  sounds[5] = loadSound("crash.wav");
  sounds[6] = loadSound("ride.wav");
  sounds[7] = loadSound("hi-hat.wav");

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
  
if (keyCode == 66){
  image(pic[1], width/2, height/2, 500, 500)
  sound[0].play()
}
 
}
