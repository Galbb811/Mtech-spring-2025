function setup() {
  createCanvas(800, 800);
  //left ear
  fill(129, 129, 129);
  triangle(425, 100, 425, 300, 675, 300);
  //L ear inside
  fill(100, 100, 100);
  triangle(450, 175, 475, 300, 675, 300);

  //right ear
  fill(129, 129, 129);
  triangle(775, 100, 775, 300, 550, 300);
  //R ear inside 
  fill(100, 100, 100);
  triangle(750, 175, 725, 300, 575, 300);

  //head
  fill(129, 129, 129);
  ellipse(600, 400, 400, 400);

  //left eye
  fill(255, 220, 0);
  ellipse(520, 300, 60, 50);
  //right pupil
  fill(0, 0, 0);
  ellipse(520, 300, 10, 45);
 //right eye
 fill(255, 220, 0);
  ellipse(675, 300, 60, 50);
  // right pupil
  fill(0, 0, 0);
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
  fill(189, 57, 18);
  ellipse(600, 475, 150, 50);
  //teeth
  fill(255, 255, 255);
  triangle(540, 460, 550, 480, 560, 455);
  triangle(640, 455, 650, 480, 660, 460);
  triangle(550, 492, 560, 475, 570, 497);
  triangle(630, 497, 640, 475, 650, 492);

}


