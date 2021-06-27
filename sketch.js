const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0
var engine, world;


function setup() {
  createCanvas(1300,500);
  engine = Engine.create();
  world = engine.world;

  bigbase = new Base(650,490,1300,20)

  base1 = new Base(595,400,270,15);

  base2 = new Base(1000,250,220,15);

  //first row

  block1 = new BlueBlock(490,380,35,50);

  block2 = new BlueBlock(525,380,35,50);

  block3 = new BlueBlock(560,380,35,50);

  block4 = new BlueBlock(595,380,35,50);

  block5 = new BlueBlock(630,380,35,50);

  block6 = new BlueBlock(665,380,35,50);

  block7 = new BlueBlock(700,380,35,50);

  block8 = new PinkBlock(525,360,35,50);

  block9 = new PinkBlock(560,360,35,50);

  block10 = new PinkBlock(595,360,35,50);

  block11 = new PinkBlock(630,360,35,50);

  block12 = new PinkBlock(665,360,35,50);

  block13 = new GreenBlock(560,340,35,50);

  block14 = new GreenBlock(595,340,35,50);

  block15 = new GreenBlock(630,340,35,50);

  block16 = new GreyBlock(595,320,35,50);

  //second base

  block17 = new PinkBlock(930,100,35,50);

  block18 = new PinkBlock(965,100,35,50);

  block19 = new PinkBlock(1000,100,35,50);

  block20 = new PinkBlock(1035,100,35,50);

  block21 = new PinkBlock(1070,100,35,50);

  block22 = new GreenBlock(965,80,35,50);

  block23 = new GreenBlock(1000,80,35,50);

  block24 = new GreenBlock(1035,80,35,50);

  block25 = new BlueBlock(1000,60,35,50);

  polygon = new Polygon(200,height/2,30);

  slingshot = new SlingShot(polygon.body,{x:200,y:150})

 
 

 

  

}
function draw() {
  console.log(polygon.body.position.x);
  console.log(polygon.body.position.y);
  console.log(polygon.body.angle);
  background(84, 14, 16);  
  Engine.update(engine);
  
  textSize(25)
  text("Score : " + score,750,40);
  
  //display first row
  
bigbase.display();

 base1.display();

 base2.display();

 block1.display();

 block2.display();

 block3.display();

 block4.display();

 block5.display();

 block4.display();

 block5.display();

 block6.display();

 block7.display();

 block8.display();

 block9.display();

 block10.display();

 block11.display();

 block12.display();

 block13.display();

 block14.display();

 block15.display();

 block16.display();

 block17.display();

 block18.display();

 block19.display();

 block20.display();

 block21.display();
 
 block22.display();

 block23.display();

 block24.display();

 block25.display();
 
polygon.display();

slingshot.display();

block1.score();

 block2.score();

 block3.score();

 block4.score();

 block5.score();

 block4.score();

 block5.score();

 block6.score();

 block7.score();

 block8.score();

 block9.score();

 block10.score();

 block11.score();

 block12.score();

 block13.score();

 block14.score();

 block15.score();

 block16.score();

 block17.score();

 block18.score();

 block19.score();

 block20.score();

 block21.score();
 
 block22.score();

 block23.score();

 block24.score();

 block25.score();
 


 
 
 drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  slingshot.released();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(polygon.body);
  }
}

