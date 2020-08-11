const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var playerSprite;

var engine, world;

function setup() {
  createCanvas(1350,650);
  engine = Engine.create();
  world = engine.world;

  spawn = new Ground(100, 600, 300, 50)
  part1 = new Ground(350, 560, 100, 50);
  player = new Player(100, 580, 30, 60);
}

function draw() {
  Engine.update(engine);

  background(rgb(138, 176, 234))
  spawn.display();
  part1.display();
  player.display();
  drawSprites();
}