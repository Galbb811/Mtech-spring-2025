// In my midterm I decieded to make a "choose your own adventure" type of thingm I give you a situation
// and you options to choose what to do, choose wisely or you may end up dead

let scene = 1;
let b1; 
let b2;


function setup() {
  createCanvas(900, 800);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
if (scene == 1){
    scene1();
  }
  if (scene == 2){
    scene2();
  
  }
  if (scene == 3){
    scene3();
    
  }
  if (scene == 4){
    scene4();
   
  }
  if (scene == 21){
    scene21();
    
  }
  if (scene == 22){
    scene22();
    
  }
  if (scene == 23){
    scene23();
   
  }
  if (scene == 24){
    scene24();
   
  }
  if (scene == 31){
    scene31();
   
  }
  if (scene == 32){
    scene32();
   
  }
  if (scene == 33){
    scene33();
   
  }
  if (scene == 34){
    scene34();
  
  }
  if (scene == 41){
    scene41();
   
  }
  if (scene == 42){
    scene42();
    
  }
  if (scene == 43){
    scene43();
   
  }
  if (scene == 44){
    scene44();
    
  }
}

function mousePressed()
{
  if (mouseX > 125&& mouseX < 225 && mouseY > 675 && mouseY < 725 && scene == 1 ){
   scene = 2;
  }
  else if (mouseX > 400 && mouseX < 500 && mouseY > 675 && mouseY < 725 && scene == 1){
    scene = 3;
}
  if (mouseX > 725 && mouseX < 825 && mouseY > 625 && mouseY < 725 && scene == 1){
    scene = 4;
   }
   if (mouseX > 175 && mouseX < 375 && mouseY > 660 && mouseY < 740 && scene == 2){
    scene = 21;
   }
   if (mouseX > 175 && mouseX < 373 && mouseY > 602 && mouseY < 650 && scene == 2){
    scene = 22;
   }
   if (mouseX > 600 && mouseX < 798 && mouseY > 602 && mouseY < 650 && scene == 2){
    scene = 23;
   }
//    if (mouseX > 600 && mouseX < 798 && mouseY > 602 && mouseY < 650 && scene == 21){
//     scene = 23;
// }
  }
function scene1() //starting scene
{ 
background(200);
text('welcome to Riveria', 450, 50);
text('A world filled with magic, swords, and everything in between', 450, 100)
text('Choose your starting point', 450, 150);
rect(175, 700, 100, 50);
rect(450, 700, 100, 50);
rect(775, 700, 100, 50);
text('Cave', 175, 710);
text('Forest', 450, 710);
text('Ship', 775, 710);
}
function scene2() //cave
{
background(200);
text('You wake up in dark cave', 450, 50);
text('You notice glowing writing on the wall', 450, 100);
text('What do you do?', 450, 150);
rect( 275, 700, 200, 80);
rect( 700, 700, 200, 80);
text('Look Around', 275, 710);
text('Try to find', 700, 695);
text('a way out', 700, 725);
} 
function scene3() // forest
{ 
  background(200);
  text('You wake up in a dense forest', 450, 50);
  text('You notice scratchs on the trees', 450, 100);
  text('What do you do?', 450, 150);
  rect( 275, 700, 200, 80);
  rect( 700, 700, 200, 80);
  text('Investigate', 275, 693);
  text('the scratches', 275, 727);
  text('Try to find', 700, 695);
  text('a way out', 700, 725);
}
function scene4() //ship
{
  background(200);
  text('You wake up amongst the wreckege of a ship', 450, 50);
  text('The water is freezing', 450, 100);
  text('What do you do?', 450, 150);
  rect( 275, 700, 200, 80);
  rect( 700, 700, 200, 80);
  text('Swim to', 275, 695);
  text('shore', 275, 725);
  text('Look for', 700, 695);
  text('supplies', 700, 725);
}
function scene21() //looking around 
{
  background(200);
  text('You look around the cave and take stock', 450, 50);
  text('You realize that everything is covered in huge spiderwebs', 450, 100);
  text('and your legs are stuck', 450, 150);
  text ('What do you do?', 450, 200);
  rect( 275, 700, 200, 80);
  rect( 700, 700, 200, 80);
  text('Try to free', 275, 695);
  text('your legs', 275, 725);
  text('Think of a', 700, 695);
  text('way out', 700, 725);
}
function scene22() //find a way out DEATH
{
  background(200);
  text(' You Are Dead', 450, 50);
  text('You try to move and find your way out of the dark cave', 450, 100);
  text('You realize your legs wont move', 450, 150);
  text('They are stuck in the web, so you try to move more violently', 450, 200);
  text('by doing so you alerted the spider who made the webs', 450, 250);
  text('As the spider sneaks behind you, it peirces you through your chest', 450, 300);
  text('Killing you instantly', 450, 350);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene23() //try to free yourself DEATH
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You try to free your legs from the webs moving violently', 450, 100);
  text('As you try to free your legs', 450, 150);
  text('the spider sneaks up behiend you and pierces through your chest', 450, 200);
  text('killing you instanty', 450, 250);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene24() //dont move and think
{
  background(200);
  text('You try not to move as to not alert whatever made these webs', 450, 50);
  text('You think, as you scan the area around you', 450, 100);
  text('You notice some glowing writing on a wall nearby', 450, 150);
  text('As soon as you read it, it vanishes, and your hands catch fire', 450, 200);
  text('Yet you dont burn, but everything else in the cave does', 450, 250);
  text ('You manage to escape the cave, after burnnig all of it', 450, 300);
  rect( 450, 700, 200, 80);
  text('Play Again', 450, 710);
}
function scene31() //investigate the scraths Death
{
  background(200);
  text('You Are Dead')
  text('You notice some scratches on a few trees, and investigate', 450, 100);
  text('You follow the scratches, and end up in a clearing', 450, 150);
  text('Suddenly you feel a burning pain across your chest', 450, 200);
  text('What seems to be a werewolf, slashed you', 450, 250);
  text('Your vision fades to black as the werewolf closes in', 450,300);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene32() // find a way out
{
background(200);
text('As you notice some strange scratches on a few trees', 450, 50);
text('You decide not to stay and find out who or what made them', 450, 100);
text('You walk away, towards what seems like the edge of the tree line', 450, 150);
text('Suddenly you hear some voices urging you to come closer', 450, 200);
text('What do you do', 450, 250);
rect( 275, 700, 200, 80);
rect( 700, 700, 200, 80);
text('Follow the', 275, 695);
text('voices', 275, 725);
text('Ignore the', 700, 695);
text('voices', 700, 725);
}
function scene33() //follow the voices Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You follow the voices you hear luring you away from the tree line', 450, 100);
  text('As you reach the voices, you see 3 beautiful women welcoming you', 450, 150);
  text('As you draw closer Suddenly the faces of the three women', 450, 200);
  text('twist and contort, as they devour you whole', 450, 250);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene34() //ignore the voices 
{
  background(200);
  text('You deciede to ignore the voices, and head for the tree line', 450, 50);
  text('You manage to leave the forest', 450, 100);
  text('You spot a road leading to a city', 450, 150);
  rect( 450, 700, 200, 80);
  text('Play Again', 450, 710);
}
function scene41() //Swim to shore Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You try to swim to shore so you pick a direction and swim', 450, 100);
  text('But the freezing water soon overtakes you', 450, 150);
  text('You freeze to death and sink to the depths', 450, 200);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene42() //look for supplies
{
  background(200);
  text('You decide to dive down to the wreckage of the ship', 450, 50);
  text('Looking for supplies, You find flares, a flare gun, and some food', 450, 100);
  text('You resurface from the wreckage', 450, 150);
  text('You find an iceberg you can climb onto, with a cave', 450, 200);
  text('What do you do?', 450, 250);
  rect( 275, 700, 200, 80);
  rect( 700, 700, 200, 80);
  text('Shoot one of', 275, 695);
  text('the flares', 275, 725);
  text('Explore the', 700, 695);
  text('cave', 700, 725);
}
function scene43() // shoot the flares Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You decide to shoot one of your flares', 450, 100);
  text('The flare you shot alerted nearby predators', 450, 150);
  text('They close in on you, ready to pounce and eat you', 450, 200);
  rect( 450, 700, 200, 80);
  text('Try Again', 450, 710);
}
function scene44() //explore the cave
{
  background(200);
  text('You deciede to explore the cave you found', 450, 50);
  text('At the end you find a monolith with some glowing writing on it', 450, 100);
  text('You examine the writing', 450, 150);
  text('Your vision goes blurry and everything fades to white', 450, 200);
  text('Your vision returns, but you seem to be in a city now', 450, 250);
  rect( 450, 700, 200, 80);
  text('Play Again', 450, 710);
}
