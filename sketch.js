var moving,fix;
var a,b;

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50); 
  fix.shapeColor = "red";
  moving = createSprite(500,200,50,50);
  moving.shapeColor = "blue";
  a = createSprite(100,300,30,30);
  a.velocityX = 3;
  b = createSprite(700,300,30,30);
  b.velocityX = -4;
}

function draw() {
  background(10);  
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  if (istouching(moving,fix)){
    fix.shapeColor = "blue";
  }
else {
fix.shapeColor = "red";
}
bounceOff(a,b);
}
function istouching(object1,object2){
  if(object1.x - object2.x <= object1.width/2 + object2.width/2
    && object2.x - object1.x <= object1.width/2 + object2.width/2
    && object1.y - object2.y <= object1.height/2 + object2.height/2
    && object2.y - object1.y <= object1.height/2 + object2.height/2 ){
    return true;
  }
  else{
  return false;
  }
}
function bounceOff(object1,object2){
if ( object1.x - object2.x <= object1.width/2 + object2.width/2
  && object2.x - object1.x <= object1.width/2 + object2.width/2){
    object1.velocityX = -1 * object1.velocityX;
    object2.velocityX = -1 * object2.velocityX;
  }
  if(object1.y - object2.y <= object1.height/2 + object2.height/2
    && object2.y - object1.y <= object1.height/2 + object2.height/2){
      object1.velocityY = -1 * object1.velocityY;
      object2.velocityY = -1 * object2.velocityY;
    }
}
