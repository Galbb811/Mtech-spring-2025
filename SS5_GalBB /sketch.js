
let r = 0
let g = 0
let b = 0



function setup() {
  createCanvas(1000, 1000);
  textAlign(CENTER);
  textSize(30);
}


function draw() {
  background(220);

  text("WARNING", width/2, height - 900);
  text("If you are Epileptic please close you eyes", width/2, height - 800);
  text("Press space to begin", width/2, height - 700);


  if (keyCode == 32){
  for (let x = 0; x < width; x = x + random(0, width)){
    for (let y = 0; y < height; y =  y + random(0, height)){
  //left ear
  fill(r, g, b);
 triangle(y+25, y/4, y+25, y-100, x+75, x/2);
 //L ear inside
 fill(r +20, g+20, b+20);
 triangle(y+50, y-225, y+75, x/2, x+75, x/2);

 //right ear
 fill(r, g, b);
 triangle(x+175, y/4, x+175, x/2, x-50, x/2);
 //R ear inside 
 fill(r-20, g-20, b-20);
 triangle(x+150, y-225, x+125, x/2, x-25, x/2);

 //head
 fill(r+100, g+100, b+100);
 ellipse(x, y, y, y);

 //left eye
 fill(r+50, g+50, b+50);
 ellipse(x-80, x/2, x/10, x/10 -10);
 //left pupil
 fill(r-25, g-150, b-200);
 ellipse(x-80, x/2, y/40, y/10 +5);
//right eye
fill(r+200, b+200, g+200);
 ellipse(x+75, x/2, x/10, x/10 - 10);
 // right pupil
 fill(r-200, b-200, g-200);
 ellipse(x+75, x/2, y/40, y/10 +5);

 //nose
 line(x, y+20, x+20, y);
 line(x, y+20, x-20, y);

 //Whiskers 
 line(x+25, y+5, x+100, y-20);
 line(x+25, y+10, x+100, y+10);
 line(x+25, y+15, x+100, y+40);
 line(x-25, y+5, y+100, y-20);
 line(x-25, y+10, y+100, y+10);
 line(x-25, y+15, y+100, y+40);

 //mouth
 fill(r, g-125, b-125);
 ellipse(x, y+75, y-250, x/10 -10);

 //teeth
 fill(r+255, g+255, b+255);
  triangle(x-60, y+60, x-50, y+80, x-40, y+55);
  triangle(x+40, y+55, x+50, y+80, x+60, y+60);
  triangle(x-50, y+92, x-40, y+75, x-30, y+97);
  triangle(x+30, y+97, x+40, y+75, x+50, y+92);
  if (x < width/2 && y > height/2){
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
  }
   }
    }
      }
        }

