function setup() {
  createCanvas(800, 800);
  background(220)
}

let x = 600
let y = 400


 function draw() {
}

function keyPressed(){
  if (keyCode == 69){
  //left ear
  fill(129, 129, 129);
  triangle(y+25, y/4, y+25, y-100, x+75, x/2);
  //L ear inside
  fill(100, 100, 100);
  triangle(y+50, y-225, y+75, x/2, x+75, x/2);

  //right ear
  fill(129, 129, 129);
  triangle(x+175, y/4, x+175, x/2, x-50, x/2);
  //R ear inside 
  fill(100, 100, 100);
  triangle(x+150, y-225, x+125, x/2, x-25, x/2);
 } 

 if (keyCode == 72){
  //head
  fill(129, 129, 129);
  ellipse(x, y, y, y);
 }
  
 if (keyCode == 73){
  //left eye
  fill(255, 220, 0);
  ellipse(x-80, x/2, x/10, x/10 -10);
  //right pupil
  fill(0, 0, 0);
  ellipse(x-80, x/2, y/40, y/10 +5);
 //right eye
 fill(255, 220, 0);
  ellipse(x+75, x/2, x/10, x/10 - 10);
  // right pupil
  fill(0, 0, 0);
  ellipse(x+75, x/2, y/40, y/10 +5);
 }

 if (keyCode == 78){
  //nose
  line(x, y+20, x+20, y);
  line(x, y+20, x-20, y);
 }

 if (keyCode == 87){
  //Whiskers 
  line(x+25, y+5, x+100, y-20);
  line(x+25, y+10, x+100, y+10);
  line(x+25, y+15, x+100, y+40);
  line(x-25, y+5, y+100, y-20);
  line(x-25, y+10, y+100, y+10);
  line(x-25, y+15, y+100, y+40);
 }

 if (keyCode == 77){
  //mouth
  fill(189, 57, 18);
  ellipse(x, y+75, y-250, x/10 -10);
 }

 if (keyCode == 84){
  //teeth
  fill(255, 255, 255);
   triangle(x-60, y+60, x-50, y+80, x-40, y+55);
   triangle(x+40, y+55, x+50, y+80, x+60, y+60);
   triangle(x-50, y+92, x-40, y+75, x-30, y+97);
  triangle(x+30, y+97, x+40, y+75, x+50, y+92);
 }
}