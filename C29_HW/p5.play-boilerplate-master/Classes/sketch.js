const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ball;
var slingShot;

var block1; 
var block2;
var block3; 
var block4; 
var block5; 
var block6; 
var block7; 
var block8; 
var block9; 
var block10; 
var block11;
var block12; 
var block13; 
var block14; 
var block15; 
var block16;  
var block17; 
var block18; 
var block19; 
var block20;  
var block21; 
var block22; 

var block23;
var block24;
var block25;
var block26;
var block27;
var bloxk28;
var block29;
var block30;
var block31;
var block32;

var ball_img;

function preload(){
  ball_img = loadImage("ball.jpg")
}

function setup() {
  createCanvas(800,700);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  block1 = new Box(200,300,30,30);
  block2 = new Box(235,300,30,30);
  block3 = new Box(270,300,30,30);
  block4 = new Box(305,300,30,30);
  block5 = new Box(340,300,30,30);
  block6 = new Box(375,300,30,30);
  block7 = new Box(410,300,30,30);
  block8 = new Box(217,265,30,30);
  block9 = new Box(252,265,30,30);
  block10 = new Box(287,265,30,30);
  block11 = new Box(322,265,30,30);
  block12 = new Box(357,265,30,30);
  block13 = new Box(392,265,30,30);
  block14 = new Box(235,230,30,30);
  block15 = new Box(270,230,30,30);
  block16 = new Box(305,230,30,30);
  block17 = new Box(340,230,30,30);
  block18 = new Box(375,230,30,30);
  block19 = new Box(245,195,30,30);
  block20 = new Box(280,195,30,30);
  block21 = new Box(315,195,30,30);
  block22 = new Box(350,195,30,30);

  block23 = new Box(550,250,30,30);
  block24 = new Box(585,250,30,30);
  block25 = new Box(620,250,30,30);
  block26 = new Box(655,250,30,30);
  block27 = new Box(690,250,30,30);
  block28 = new Box(585,215,30,30);
  block29 = new Box(620,215,30,30);
  block30 = new Box(655,215,30,30);
  block31 = new Box(602,180,30,30);
  block32 = new Box(637,180,30,30);

  
  ball = Bodies.circle(50,200,30);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:100, y:200});
  
  
  

}

function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();

  
  imageMode(CENTER)
  image(ball_img ,ball.position.x,ball.position.y,60,40);

  function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }
  drawSprites();
}