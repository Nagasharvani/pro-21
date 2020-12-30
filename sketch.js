
var bullet,wall;
var bullets , walls;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
  speed=random(223,331);
  weight=random(30,52);
  thickness=random(24,83);
  bullet=createSprite(50,200,50,50);
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="orange";
  wall.lifetime=-1;
  
}

function draw() {
  background("white");  
  bullet.velocityX=speed;
  

  if(hascolloided(bullet,wall))
  {
    bullet.velocityX = 0;
    bullet.lifetime=-1;
    
    var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage<10)
  {
     wall.shapeColor="blue";
  }

  if (damage>10)
  {
    wall.shapeColor="violet";
  }
  hascolloided();
  }
  drawSprites();
}

function hascolloided(bullets,walls)
{
bulletsRightEdge=bullets.x + bullets.width;
wallsLeftEdge=walls.x;
if(bulletsRightEdge>=wallsLeftEdge)
{
  return true;
}
else 
{
  return false;
}
}