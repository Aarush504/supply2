var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
/*var options = {
	restitution:0
}*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	/*box1 = new Box(400,650,100,20);
	//box1.shapeColor("red");
	box2 = new Box(350,600,20,100);
	//box2.shapeColor("red");
	box3 = new Box(450,600,20,100);
	//box3.shapeColor("red");*/

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = createSprite(400,650,100,20);
	 World.add(world, box1);
	 box2 = createSprite(350,600,20,100);
	 World.add(world, box2);
	 box3 = createSprite(450,600,20,100);
	 World.add(world, box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  box1.shapeColor = "red";
  box2.shapeColor = "red";
  box3.shapeColor = "red";

//packageBody.collide(box1);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 20;
		translation = {x: -20, y:0}
        Matter.Body.translate(packageBody.translation);		
	}
	else if  (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 20;
		translation = {x: -20, y:0}
        Matter.Body.translate(packageBody.translation);		
	}
	else 
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false);
  }
}



