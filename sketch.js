const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ball;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var g = {
    restitution:1.4
  }
  var b ={
    isStatic:true
  }
  ball = Bodies.circle(400,200,50, g)
  World.add(world, ball)
  ground = Bodies.rectangle(200, 350, 800, 20, b)
  World.add(world, ground)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  ellipseMode(RADIUS)
  fill("red");
  ellipse(ball.position.x,ball.position.y, 50, 50)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 800, 20)
  drawSprites();
}