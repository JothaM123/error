const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball, blower;
var btn;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  btn = createButton("click to blow!!");
  btn.position(width/2, height-100);
  btn.class("blowButton");
  btn.mousePressed(blow);

  //createSprite(400, 200, 50, 50);
  ball = new Ball(450, 200, 100, 100);
  blower = new Blower(380, 200, 120, 50);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);  
  
  Engine.update(engine);
  strokeWeight(1);
  blower.show();
  ball.show();
 
  //drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:5});
}