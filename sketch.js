var ball
var ball_opstions={
	istatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

	groundobj=new ground(width/2,670,width,20);
	leftside=new ground(1100,600,20,120);
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundobj.display();
 
}



