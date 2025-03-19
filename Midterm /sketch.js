function setup() {
  createCanvas(900, 800);
  textAlign(CENTER);
  textSize(30);
}
let scene = 1
function draw() {
  background(200);

  if (scene == 1){
    scene1();
  }
  if (scene == 2){
    scene2();
  }

}

function scene1() //starting scene
{
  text('welcome to Riveria', 450, 50);
  text('A world filled with magic, swords, and everything in between', 450, 100)
  text('Choose your starting point', 450, 150);
let cave = createButton('Cave');
let forest = createButton('Forest');
let ship =  createButton('ship');
cave.position(150, 750);
forest.position(450, 750);
ship.position(750, 750);
if (cave.mouseClicked){
  scene = 2
}
}
function scene2() //cave
{
text('You wake up in dark cave', 450, 50);
text('you notice glowing writing on the wall', 450, 100);
text('what do you do?', 450, 150);
} 