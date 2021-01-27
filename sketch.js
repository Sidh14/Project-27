
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
   roof=new Roof(400,150,460,30)
   bob1=new Bob(280,550,90);
   bob2=new Bob(340,550,90);
   bob3=new Bob(400,550,90);
   bob4=new Bob(460,550,90);
   bob5=new Bob(520,550,90);
   rope1=new Rope(bob1.body,roof.body,-100*2,0);
   rope2=new Rope(bob2.body,roof.body,-50*2,0);
   rope3=new Rope(bob3.body,roof.body,0*2,0);
   rope4=new Rope(bob4.body,roof.body,50*2,0);
   rope5=new Rope(bob5.body,roof.body,100*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
}
function keyPressed()
{
  if(keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-10,y:-10});
  }
}


