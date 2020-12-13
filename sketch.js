
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,d1,p1

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
ground1 = new ground(width/2,670,width,20)

d1 = new dustbin(1200,650)
p1 = new paper(200,450,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  d1.display();
  p1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(p1.body,p1.body.position,{x:85,y:-85});
  
	}
}

