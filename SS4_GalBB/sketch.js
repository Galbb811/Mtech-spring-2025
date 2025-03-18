

let Super;
let normal;
let T = 0;
let T1 = 1000;
let T2 = 8000;
let w = 800;
let h = 800;

function preload()
{
Super = loadImage("Images/superwalk.jpg");
normal = loadImage("Images/normalwalk.jpg");
}

function setup()
{
  createCanvas(800, 800);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(20);
}

function draw() 
{
  background(220);
  T = millis();

   if (T > T2){
    image(Super, w/2, h/2, w, h-125);
    text("How I feel walking down the street with epic game music playing", w/2, 50);
   }
   else if (T > T1){
    image(normal, w/2, h/2, w, h-125);
    text("How I feel walking down the street with regualr music playing", w/2, 50);
   }
}
