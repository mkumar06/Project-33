var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var particle = null;
var score = 0;
var turn = 0;
var gameState = 1;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+ score, 20, 30);
  text("500", 20, 550);
  text("500", 100, 550);
  text("500", 180, 550);
  text("500", 260, 550);
  text("100", 340, 550);
  text("100", 420, 550);
  text("100", 500, 550);
  text("200", 580, 550);
  text("200", 660, 550);
  text("200", 740, 550);
  Engine.update(engine);
 
  push();
  fill("yellow");
  strokeWeight(4);
  stroke("yellow");
  line(0, 500, 800, 500);
  pop();

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

   if(gameState == 1) {

   if(mouseIsPressed){
     particle = new Particle(random(width/2-30, width/2+30), 10,10);
   }

   if(particle !== null){
    particle.display();
    
    if(particle.body.position.y > 700) {
      if(particle.body.position.x < 320) {
        score = score + 500;
        particle = null;
        turn = turn + 1;
      } else if (particle.body.position.x < 560 && particle.body.position.x > 320) {
        score = score + 100;
        particle = null;
        turn = turn + 1;
      } else {
        score = score + 200;
        particle = null;
        turn = turn + 1;
      }
    } 
   }

   if (turn == 5) {
     gameState = 0;
   }
  } else {
    fill("red")
    textSize(40);
    strokeWeight(3);
    text("GAME OVER", 300, 400)
  }

   ground.display();
}