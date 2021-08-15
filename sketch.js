var pathImage;
var boyImage;

function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  powerImage=loadImage("power.png");
  bombImage=loadImage("bomb.png");
  coinImage=loadImage("coin.png");
  energyDrinkImage=loadImage("energyDrink.png");
  boyImage=loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,600);
  leftboundary= createSprite(0,0,100,800);
  leftboundary.visible=false;
  rightboundary= createSprite(410,0,100, 800);;
  rightboundary.visible=false;
  //create sprites here
path = createSprite(200,200);
path.addImage( pathImage);
path.velocityY= 4;
path.scale= 1.2;

boy = createSprite(340, 180, 30, 30);
boy.addAnimation("boyrunning", boyImage);
boy.scale= 0.08;






}


function draw() {
  background(0);
  boy.x=World.mouseX;
  edges=createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftboundary);
  boy.collide(rightboundary);

  if(path.y < 0){
    path.y= path.width/2;
  }
drawSprites();

}
