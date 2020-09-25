
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var roof1,bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(400,40,800,20);

	bob1 = new Bob(400,580);
	bob2 = new Bob(425,580);
	bob3 = new Bob(450,580);
	bob4 = new Bob(475,580);
	bob5 = new Bob(500,580);

	//rope1 = new Rope(roof1,bob1,-50,0);
	//rope2 = new Rope(roof1,bob2,-25,0);
	//rope3 = new Rope(roof1,bob3,0,0);
	//rope4 = new Rope(roof1,bob4,25,0);
	rope5 = new Rope(roof1,bob5,50,0);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
  rope5.display();


 
  drawSprites();
 
}



