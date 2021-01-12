
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var rope1 ,rope2 ,rope3 ,rope4 ,rope5;
var bob1 ,bob2 ,bob3 ,bob4 ,bob5;
var bobd ,bobx ,boby;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	roof1=createSprite(800,175,700,20);
 bobd=40;
 bobx=800;
 boby=675;
 bob3=new bob(bobx,boby,bobd)
 rope3=new abc(bob3.body,roof1.body,0,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white"); 
  
 roof1.display()
bob3.display()
rope3.display()

}



