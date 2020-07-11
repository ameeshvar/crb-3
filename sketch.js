var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,20);
    dustbin=new Dustbin(400,650)
    ball= new Ball(200,300,50,50);
    chain1 = new Rope(ball,{x:200,y:200});
    var render = Render.create(
      { element: document.body, engine: engine, options: { width: 800, height: 700, wireframes: false } });
    Render.run(render);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  ground.display();
 dustbin.display();
  ball.display();
  chain1.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball.body,ball.body.position,{ x: 19, y: -160 });
}


}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){
  chain1.fly();

}




