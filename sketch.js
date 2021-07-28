var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImage
var leaves; leavesImage;
var score=0;
var fruit;

function preload(){
  gardenImg = loadImage("garden.png");
  appleImage= loadImage("apple.png") 
  rabbitImg = loadImage("rabbit.png");
  leavesImage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

rabbit.x=World.mouseX;


  
  fruit = Math.round(random(1,2))
if(frameCount%80==0){
if(fruit==1){
createApples();
}
else{
  createLeaves();
}
}



drawSprites();
}

function createApples() {
 apple=createSprite(random(50,350),40, 10, 10)   
apple.addImage(appleImage)
apple.velocityY=4;
apple.scale=0.1;
apple.lifetime=100;
}
function createLeaves() {
  leaves=createSprite(random(100,350),40, 10, 10)   
 leaves.addImage(leavesImage)
 leaves.velocityY=4;
 leaves.scale=0.1;
 leaves.lifetime=100;
 }
 



