
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;

var binObj;
var paperObj;
var groundObj;

function setup() {
	rectMode(CENTER);
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;

binObj = new Bin(1200,590);
paperObj = new Paper(40,400,30);
groundObj = new Ground(width/2,670,width,20);
	
}


function draw() {

	Engine.update(engine);
	rectMode(CENTER);
  background("grey");
  
 binObj.display();
 paperObj.display();
 groundObj.display();	

 textSize(20);
 fill ("white");
text("BY USING 'UP' AND 'DOWN' ARROW KEY , PUT THE PAPER INTO THE BIN",300,120);

 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.Body , paperObj.Body.position,{x:2,y:-0.9});
	}
}
