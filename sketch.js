
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4; 
  ground.x = ground.width/2
 
    
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
     ground.x = ground.width/2
  }
   console.log(monkey.y) 
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  food();
  drawSprites();
  obstacles();
}

function food(){
  
  if(frameCount%80 === 0){
    banana = createSprite(width, 100 ,20, 20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -3;
    
    banana.lifetime = 140;
    
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
   var obstacle = createSprite(width,330,10,40);
   obstacle.velocityX = -3
    obstacle.addImage(obstaceImage);
   
    obstacle.scale = 0.08;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}





