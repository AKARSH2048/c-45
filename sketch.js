var flappyBird, flappyBirdImage;
var backgroundImage;
var railing, railingImage;
var pillar, pillarImage;
var score;
var pillarGroup;
var playAgain, playAgainImage, gameOver, gameOverImage;

function preload(){
 flappyBirdImage = loadAnimation("bird1.png", "bird2.png");
 backgroundImage = loadImage("backgroundImage.png");
 railingImage = loadImage("railing.png");
 pillarImage = loadImage("pillar.png");
 playAgainImage = loadImage("playAgain.png")
 gameOverImage = loadImage("gameOver.png")
}
function setup(){
 createCanvas(windowWidth,windowHeight);
 flappyBird = createSprite(600,windowHeight/2,20,20);
 flappyBird.scale = 2;
 flappyBird.addAnimation("flappyBirdImage", flappyBirdImage);
 railing = createSprite(windowWidth/2,windowHeight-10);
 railing.addImage("railingImage",railingImage);
 railing.x = railing.width/2
 railing.scale = 6.0;
 railing.velocityX = -5;
 playAgain = createSprite(windowWidth/2, windowHeight/4, 50,50);
 playAgain.addImage("playAgainImage",playAgainImage)
 gameOver = createSprite(windowWidth/2, windowHeight/2, 50,50);
 gameOver.addImage("gameOverImage",gameOverImage)
 playAgain.visible = false;
 gameOver.visible = false;

 score = 0;
 pillarGroup = new Group()
}
function draw(){
  background(backgroundImage);

  if(railing.x<200) {
    railing.x = railing.width/2
  }
  if(keyDown("space")){
    flappyBird.velocityY = -5;
  }
  if(flappyBird.isTouching(pillarGroup)){
    gameOverFN();
  }
  flappyBird.velocityY = flappyBird.velocityY+0.2
  

  spawnPillar();
  drawSprites();
  score = score+1
  textSize(25);
  fill("white")
  text("Score: "+score,windowWidth-140, 50)
}
function spawnPillar(){
  if(frameCount % 200 === 0){
    pillar = createSprite(windowWidth+10,50);
    pillar.debug = false;
    pillar.setCollider("rectangle",0, 0,100, 500)
    pillar.addImage("pillarImage",pillarImage);
    pillar.velocityX = -5;
    pillarGroup.add(pillar);
  }
  if(frameCount % 200 === 0){
    pillar = createSprite(windowWidth+10, windowHeight-50);
    pillar.addImage("pillarImage",pillarImage);
    pillar.debug = false;
    pillar.setCollider("rectangle",0, 0,100, 500)
    pillar.velocityX = -5;
    pillarGroup.add(pillar);
  }
}
function gameOverFN(){
  gameOver.visible = true;
  playAgain.visible = true;
  railing.velocityX = 0;
  railing.velocityY = 0;
  flappyBird.velocityY = 0;
  flappyBird.velocityX = 0;
  pillarGroup.setVelocityXEach(0);
}
