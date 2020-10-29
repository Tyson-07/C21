var fixedRect, movingRect,runningRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  runningRect = createSprite(300,400,50,50);
  runningRect.shapeColor = "green";
  runningRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  runningRect.velocityX = +2;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(runningRect,movingRect);
  bounceOff(runningRect,fixedRect);
  



  drawSprites();
}

