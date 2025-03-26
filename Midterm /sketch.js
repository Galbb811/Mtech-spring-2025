let scene = 1;
let b1;
let b2;
let b3;

function setup() {
  createCanvas(900, 800);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
  console.log(mouseY)
if (scene == 1){
    scene1();
    b1 = cave;
    b2 = forest;
    b3 = ship;
  }
  if (scene == 2){
    scene2();
    b1 = lookaround;
    b2 = wayout;
  }
  if (scene == 3){
    scene3();
    b1 = scratch;
    b2 = wayout;
  }
  if (scene == 4){
    scene4();
    b1 = swim;
    b2 = supplies; 
  }
  if (scene == 21){
    scene21();
    b1 = freelegs;
    b2 = think;
  }
  if (scene == 22){
    scene22();
    b2 = restart; 
  }
  if (scene == 23){
    scene23();
    b2 = restart; 
  }
  if (scene == 24){
    scene24();
    b2 = Gz;
  }
  if (scene == 31){
    scene31();
    b2 = restart;
  }
  if (scene == 32){
    scene32();
    b1 = follow;
    b2 = treeline;
  }
  if (scene == 33){
    scene33();
    b2 = resetart; 
  }
  if (scene == 34){
    scene34();
    b2 = Gz;
  }
  if (scene == 41){
    scene41();
    b2 - restart;
  }
  if (scene == 42){
    scene42();
    b1 = flare;
    b2 = cave2;
  }
  if (scene == 43){
    scene43();
    b2 = restart;
  }
  if (scene == 44){
    scene44();
    b2 = Gz;
  }
  //need a variable to store the value of button. thi svaribale is compared in if statement
  //buttonString = b2.value()
  ///if you wanted to switch from scene one when forest buttron is pressed:
//   if (scene == 1 )
//   {
//     //if you are in scene one, then b2 is gonn abe labelled forest, when its pressed, lets move on to scene 3
//   }
}

function mousePressed()
{
  if (mouseX > 153 && mouseX < 249 && mouseY > 602 && mouseY < 650 && scene == 1){
   scene = 2;
  }
}


function scene1() //starting scene
{ 
background(200);
text('welcome to Riveria', 450, 50);
text('A world filled with magic, swords, and everything in between', 450, 100)
text('Choose your starting point', 450, 150);
 cave = createButton('Cave');
 cave.style('font-size', '30px');
 forest = createButton('Forest');
 forest.style('font-size', '30px');
 ship = createButton('ship');
 ship.style('font-size', '30px');
 cave.position(150, 600);
 forest.position(450, 600);
 ship.position(750, 600);
 cave.size(100,50);
 forest.size(100,50);
 ship.size(100,50);
}
function scene2() //cave
{
background(200);
text('You wake up in dark cave', 450, 50);
text('You notice glowing writing on the wall', 450, 100);
text('What do you do?', 450, 150);
 lookaround = createButton('Look Around');
 lookaround.style('font-size', '30px');
 wayout = createButton('try to find a way out');
 wayout.style('font-size', '30px');
 lookaround.position(175, 600);
 wayout.position(600, 600);
 lookaround.size(200,80);
 wayout.size(200,80);
} 
function scene3() // forest
{ 
  background(200);
  text('You wake up in a dense forest', 450, 50);
  text('You notice scratchs on the trees', 450, 100);
  text('What do you do?', 450, 150);
  scratch = createButton('Investigate the scratches');
  scratch.style('font-size', '30px');
  wayout = createButton('Try to find a way out');
  wayout.style('font-size', '30px');
  scratch.position(175, 600);
  wayout.position(600, 600);
  scratch.size(200,80);
  wayout.size(200,80);
}
function scene4() //ship
{
  background(200);
  text('You wake up amongst the wreckege of a ship', 450, 50);
  text('The water is freezing', 450, 100);
  text('What do you do?', 450, 150);
  swim = createButton('Swim to shore');
  swim.style('font-size', '30px');
  supplies = createButton('Look for supplies');
  supplies.style('font-size', '30px');
  swim.position(175, 600);
  supplies.position(600, 600);
  swim.size(200,80);
  supplies.size(200,80);
}
function scene21() //looking around 
{
  background(200);
  text('You look around the cave and take stock', 450, 50);
  text('You realize that everything is covered in huge spiderwebs', 450, 100);
  text('and your legs are stuck', 450, 150);
  text ('What do you do?', 450, 200);
  freelegs = createButton('Try to free your legs');
  freelegs.style('font-size', '30px');
  think = createButton('Try to think of a way out');
  think.style('font-size', '30px');
  freelegs.position(175, 600);
  think.position(600, 600);
  freelegs.size(200,80);
  think.size(200,80);
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
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200,80);
}
function scene23() //try to free yourself DEATH
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You try to free your legs from the webs moving violently', 450, 100);
  text('As you try to free your legs', 450, 150);
  text('the spider sneaks up behiend you and pierces through your chest', 450, 200);
  text('killing you instanty', 450, 250);
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200,80);
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
  Gz = createButton('Play Again');
  Gz.style('font-size', '30px');
  Gz.position(350, 600);
  Gz.size(200, 80);
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
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200, 80);
}
function scene32() // find a way out
{
background(200);
text('As you notice some strange scratches on a few trees', 450, 50);
text('You decide not to stay and find out who or what made them', 450, 100);
text('You walk away, towards what seems like the edge of the tree line', 450, 150);
text('Suddenly you hear some voices urging you to come closer', 450, 200);
text('What do you do', 450, 250);
follow = createButton('Follow the voices');
follow.style('font-size', '30px');
treeline = createButton('Ignore the voices and head for the tree line');
treeline.style('font-size', '30px');
follow.position(175, 600);
treeline.position(600, 600);
follow.size(200, 80);
treeline.size(200, 80);
}
function scene33() //follow the voices Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You follow the voices you hear luring you away from the tree line', 450, 100);
  text('As you reach the voices, you see 3 beatiful women welcoming you', 450, 150);
  text('As you draw closer Suddenly the faces of the three women', 450, 200);
  text('twist and contort, as they devour you whole', 450, 250);
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200, 80);
}
function scene34() //ignore the voices 
{
  background(200);
  text('You deciede to ignore the voices, and head for the tree line', 450, 50);
  text('You manage to leave the forest', 450, 100);
  text('You spot a road leading to a city', 450, 150);
  Gz = createButton('Play Again');
  Gz.style('font-size', '30px');
  Gz.position(350, 600);
  Gz.size(200, 80);
}
function scene41() //Swim to shore Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You try to swim to shore so you pick a direction and swim', 450, 100);
  text('But the freezing water soon overtakes you', 450, 150);
  text('You freeze to death and sink to the depths', 450, 200);
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200, 80);
}
function scene42() //look for supplies
{
  background(200);
  text('You decide to dive down to the wreckage of the ship', 450, 50);
  text('Looking for supplies, You find flares, a flare gun, and some food', 450, 100);
  text('You resurface from the wreckage', 450, 150);
  text('You find an iceberg you can climb onto, with a cave', 450, 200);
  text('What do you do?', 450, 250);
  flare = createButton('Shoot one of the flares');
  flare.style('font-size', '30px');
  cave2 = createButton("Explore the cave");
  cave2.style('font-size', '30px');
  flare.position(175, 600);
  cave2.position(600, 600);
  flare.size(200, 80);
  cave2.size(200, 80);
}
function scene43() // shoot the flares Death
{
  background(200);
  text('You Are Dead', 450, 50);
  text('You decide to shoot one of your flares', 450, 100);
  text('The flare you shot alerted nearby predators', 450, 150);
  text('They close in on you, ready to pounce and eat you', 450, 200);
  restart = createButton('Try Again');
  restart.style('font-size', '30px');
  restart.position(350, 600);
  restart.size(200, 80);
}
function scene44() //explore the cave
{
  background(200);
  text('You deciede to explore the cave you found', 450, 50);
  text('At the end you find a monolith with some glowing writing on it', 450, 100);
  text('You examine the writing', 450, 150);
  text('Your vision goes blurry and everything fades to white', 450, 200);
  text('Your vision returns, but you seem to be in a city now', 450, 250);
  Gz = createButton('Play Again');
  Gz.style('font-size', '30px');
  Gz.position(350, 600);
  Gz.size(200, 80);
}
