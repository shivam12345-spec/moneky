var score =0;
var bananaImage;
var obstacleImage,obstacleGroup;
var ground;



function preload(){
   backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");
}
  
function setup() {
  createCanvas(1000, 400);
  ground = createSprite(200,200,400,400);
  ground.addImage("ground",backImage);  
  player = createSprite(100,310,10,10);
  player.addAnimation("running", player_running);
  player.scale=0.2;
  invisibleGround = createSprite(100,390,100,20);
  invisibleGround.visible = false;
}

function draw() {
  background(220);


 
  ground.velocityX=-2;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  player.velocityY = player.velocityY + 0.8

  switch(score){
      case 10:player.scale=0.12;
      break;
      case 20:player.scale=0.14;
      break;
      case 30:player.scale=0.16;
      break;
      case 40:player.scale=0.18;
      break;
  default: break;
  }
  if(keyDown("space")) {
    player.velocityY = -15;
  }
 
  player.collide(invisibleGround);
  stroke("white");
  textSize(20);
  fill("white");
 
  spawnObsticles();
  banannas();
  
  drawSprites();
   text("score: "+ score,100,50);
}

function spawnObsticles() {
  
  if (frameCount % 100 === 0) {
    var obsticle = createSprite(600,350,100,400);
    //obsticle.y = Math.round(random(80,120));
    obsticle.addImage(obstacleImage);
    obsticle.scale = 0.2;
     //obsticle.velocityY =  10;
    obsticle.velocityX = -3;
    
     //assign lifetime to the variable
    obsticle.lifetime = 200;
    
    //adjust the depth
    obsticle.depth = player.depth;
    player.depth = player.depth + 1;
   // obsticle.collide(invisibleGround);
    
    
   //obsticleGroup.add(obsticle);
  }
  
}
function banannas(){
if (frameCount % 80 === 0) {
    var bannas = createSprite(1000,310,10,10);
    bannas.y = random(80,220);
    bannas.addImage(bananaImage);
  bannas.scale=0.1;
    //bannas.scale = 0.2;
   //bannas.velocityY =  10;
    bannas.velocityX = -3;
    
     //assign lifetime to the variable
    bannas.lifetime = 800;
    
    //adjust the depth
    //bannas.depth = player.depth;
    //player.depth = player.depth + 1;
    
    
   //obsticleGroup.add(obsticle);
  }
  
}
