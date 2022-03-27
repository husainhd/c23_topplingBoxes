const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground 

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = Bodies.rectangle(200,390,400,20,{isStatic: true});
    World.add(world,ground)
    box1 = new Box(200,300,50,50);
    box2 = new Box(230,50,50,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
   rectMode(CENTER);
   fill('blue')
   rect(ground.position.x , ground.position.y , 400 ,20)
   
}