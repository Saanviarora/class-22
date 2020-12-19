const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
    myWorld = myEngine.world;
var options={
  isStatic:true
}
 var options2={
   restitution:3
 }   

    ground=Bodies.rectangle(200,390,400,20,options);
    World.add(myWorld,ground);

ball=Bodies.circle(200,200,20,options2)
World.add(myWorld,ball);
    

}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode (CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}