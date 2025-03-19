let scene = 1;

function setup() {
  createCanvas(900, 800);
  textAlign(CENTER);
  textSize(30);
}

function draw() {
  

  if (scene == 1){
    scene1();
  }

}

function scene1() //starting scene
{
  background(200);
  text('welcome to Riveria', 450, 50);
  text('A world filled with magic, swords, and everything in between', 450, 100)
  text('Choose your starting point', 450, 150);
let cave = createButton('Cave');
let forest = createButton('Forest');
let ship =  createButton('ship');
cave.position(150, 600);
forest.position(450, 600);
ship.position(750, 600);
cave.mouseClicked(scene2);
forest.mouseClicked(scene3);
print(mouseClicked);
}
function scene2() //cave
{
background(200);
text('You wake up in dark cave', 450, 50);
text('you notice glowing writing on the wall', 450, 100);
text('what do you do?', 450, 150);
} 
function scene3 (){
  background(200);
  text('You wake up in a dense forest', 450, 50);
  text('you notice scratchs on the trees', 450, 100);
  text('what do you do?', 450, 150);
}