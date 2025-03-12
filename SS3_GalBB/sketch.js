 
let r = 255;
let g = 255;
let b = 255;


function setup() {
  createCanvas(800, 800);
}

function draw(){
//left ear
fill(r, g, b);
triangle(425, 100, 425, 300, 675, 300);
//L ear inside
fill(r +20, g+20, b+20);
triangle(450, 175, 475, 300, 675, 300);

//right ear
fill(r, g, b);
triangle(775, 100, 775, 300, 550, 300);
//R ear inside 
fill(r-20, g-20, b-20);
triangle(750, 175, 725, 300, 575, 300);

//head
fill(r+100, g+100, b+100);
ellipse(600, 400, 400, 400);

//left eye
fill(r+50, g+50, b+50);
ellipse(520, 300, 60, 50);
//right pupil
fill(r-25, g-150, b-200);
ellipse(520, 300, 10, 45);
//right eye
fill(r+200, b+200, g+200);
ellipse(675, 300, 60, 50);
// right pupil
fill(r-200, b-200, g-200);
ellipse(675, 300, 10, 45);

//nose
line(600, 420, 620, 400);
line(600, 420, 580, 400);

//Whiskers 
line(625, 405, 700, 380);
line(625, 410, 700, 410);
line(625, 415, 700, 440);
line(575, 405, 500, 380);
line(575, 410, 500, 410);
line(575, 415, 500, 440);

 

//mouth
fill(r, g-125, b-125);
ellipse(600, 475, 150, 50);
//teeth
fill(r+255, g+255, b+255);
triangle(540, 460, 550, 480, 560, 455);
triangle(640, 455, 650, 480, 660, 460);
triangle(550, 492, 560, 475, 570, 497);
triangle(630, 497, 640, 475, 650, 492);

}



function mousePressed(){
r = random(0, 255);
g = random(0, 255);
b = random(0, 255);

}


