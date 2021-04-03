const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var superhero;
var box1,box2,box3,box4,box5;
var box6,box7,box8,box9,box10,box11,box12;
var box13,box14,box15,box17,box18;
var monster;


function preload() {
//preload the images here

}

function setup() {
  createCanvas(1500, 800);
  engine = Engine.create();
  world = engine.world;

 // create sprites here
  ground = new Ground(600,600,1200,20);

  box1 = new Box(800,665,50,50)
  box2 = new Box(800,615,50,50)
  box3 = new Box(800,565,50,50)
  box4 = new Box(800,515,50,50)
  box5 = new Box(800,465,50,50)

  box6 = new Box(860,665,50,50)
  box7 = new Box(860,615,50,50)
  box8 = new Box(860,565,50,50)
  box9 = new Box(860,515,50,50)
  box10 = new Box(860,465,50,50)
  box11 = new Box(860,415,50,50)
  box12 = new Box(860,365,50,50)

  box13 = new Box(920,665,50,50)
  box14 = new Box(920,615,50,50)
  box15 = new Box(920,565,50,50)
  box16 = new Box(920,515,50,50)
  box17 = new Box(920,465,50,50)
  box18 = new Box(920,415,50,50)

  rope = new Sling(superhero.body, {x :500, y :50});

  superhero = new SuperHero(200,200,80,80);

  monster = new Monster(1000,800)
  
 


}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
   
  superhero.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  monster.display();
  
  console.log(monster)
  console.log(sling + hii)
  }

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x: mouseX,y: mouseY})
}