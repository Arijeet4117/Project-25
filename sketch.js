
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var p,engine,world,g,d1,d2,d3,s1;

function preload(){

	kimage=loadImage("K.png")
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	p=new Paper();
	g=new Ground();

	d1=new Dustbin(550,330,20,100);
	d2=new Dustbin(750,330,20,100);
	d3=new Dustbin(650,370,180,20);

	s1=new Sun();

	Engine.run(engine);
  
}


function draw() {
 
  background("Lavender");
  p.display();

  g.hello();

  d1.display();
  d2.display();
  d3.display();

  s1.display();

	imageMode(CENTER)
    image(kimage,650,320,650,200);
  
 
 
}
function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(p.body,p.body.position,{x:50,y:-80})

}
	
}



