var sea ,ship, seaImg ,shipanimation;


function preload(){
  seaImg = loadImage("sea.png");
  shipanimation = loadAnimation("ship-3.png","ship-4.png");
}

function setup(){

  createCanvas(400,400);
  
  sea.createSprite(200,200,25,25);
  sea.addImage(sea.png);
  sea.scale = 0.5;

  ship = createSprite(200,200,50,50);
  ship.addAnimation(shipanimation);
  ship.scale = 0.5;
}

function draw() {
  background("skyblue");
 

  drawSprites;
}