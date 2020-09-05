
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var floor, bin1, paperball;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	floor = new Floor(200,380,400,400);
	bin1 = new Bin(350,350,30,5);
	bin2 = new Bin(350,340,10,30);
	bin3 = new Bin(350,360,10,30);
	paperball = new PaperBall(200,350);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



