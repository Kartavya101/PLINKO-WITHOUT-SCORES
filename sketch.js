
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
 
var particles=[];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

function setup() {

  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);
  for (var a = 0; a <=800; a = a + 80) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var i = 75; i <=width; i=i+50) { 
    plinkos.push(new Plinko(i,75));
  }

  for (var i = 50; i <=width-10; i=i+50) 
  {
    plinkos.push(new Plinko(i,175));
  }
  for (var i = 75; i <=width; i=i+50){
    plinkos.push(new Plinko(i,275));
  }
  for (var i = 50; i <=width-10; i=i+50) 
  {
    plinkos.push(new Plinko(i,375));
  }    
  }
 function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();   
  for (var c = 0; c < plinkos.length; c++) {
    plinkos[c].display();   
  }   
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  } 
 if(frameCount % 60 === 0){
  particles.push(new Particles(random(370,430),10,10));
  } 
  for (var b = 0; b < particles.length;b= b+1){
    particles[b].display();
  } 
}
// MADE BY KARTAVYA
