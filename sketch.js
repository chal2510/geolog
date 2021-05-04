
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground2;
var rubber1;
var stony,iron1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground2 = new Ground(400,650,800,15);
 rubber1 = new rubber(250,550,20,20);
 stony = new stone(600,400,30,30);
 iron1 = new iron(600,300,50,50);

	Engine.run(engine);

}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground2.display();
 rubber1.display();
 stony.display();
 iron1.display();
}




