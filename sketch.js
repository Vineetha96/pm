const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyImage,tree,launcherobj;
var mango1,mango2,mango3,mango4;
var mango5,mango6,mango7,mango8;
var mango9,mango10,mango11,mango12;
var stone,ground;

function preload(){
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree=new Tree(1000,200,300,300);


ground=new Ground(1190,790,2400,20)

boy=createSprite(100,720,50,50);
boy.addImage(boyImage);
boy.scale=0.1

mango1=new Mango(550,400,50,50);
mango2=new Mango(650,450,50,50);
mango3=new Mango(650,350,50,50);
mango4=new Mango(700,250,50,50);
mango5=new Mango(800,300,50,50);
mango6=new Mango(750,400,50,50);
mango7=new Mango(900,300,50,50);
mango8=new Mango(850,200,50,50);
mango9=new Mango(1000,300,50,50);
mango10=new Mango(1050,400,50,50);
mango11=new Mango(900,400,50,50);
mango12=new Mango(1000,350,50,50);
stone=new Stone(250,700,50);
launcherobj= new launcher(stone.body,{x:250,y:700});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("white");
  
  tree.display();
boy.display();
stone.display();
ground.display();
mango1.display();
mango3.display();
mango4.display();
mango5.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
mango11.display();
mango12.display();
launcherobj.display();

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);
detectCollision(stone,mango11);
detectCollision(stone,mango12);


  drawSprites();
 keypressed();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherobj.fly();
}

function detectCollision(lmango,lstone){
mangoBodyPosition=lmango.body.Position
stoneBodyPosition=lstone.body.Position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false);
	}
}

function keypressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherobj.attach(stone.body)
	}
}
