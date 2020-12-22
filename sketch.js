var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 


var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState ="start";

var YellowBoi;

function setup() {

    createCanvas(480, 750);

    engine = Engine.create();
    world = engine.world;

        
    

    border1 = new Ground(240, 748, 480, 15,"Green");
    border2 = new Ground(2, 375, 15, 750,"Red");
    border3 = new Ground(478, 375, 15, 750,"Red");

    YellowBoi = line(240,375,480,15);

    for (var i = 0; i <= 480; i = i + 80) 
    {
        divisions.push(new Bar(i, 750 - 300 / 2, 10, 300));
    }


    for (var k = 40; k <= 480; k = k + 50) 
    {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= 400; k = k + 50) 
    {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= 480; k = k + 50) 
    {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= 400; k = k + 50)
    {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background(0);
    textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 100 ", 160, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 200 ", 400, 550);
    Engine.update(engine);
    border1.display();
    border2.display();
    border3.display();


    if ( gameState =="end") {
    //stroke has itentionally been put here to give aspooky effect
        stroke("Red");
        strokeWeight(10);
        textSize(30);
        text("GameOver", 150, 250);
      }
    


    for (var m = 0; m < divisions.length; m++) {

      divisions[m].display();
  }
  for (var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
  }
  for (var m = 0; m < divisions.length; m++) {

    divisions[m].display();
}
for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
}

if(particle!=null)
    {
       particle.display();
        if (particle.body.position.y>530)
        {
              if (particle.body.position.x < 160) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x >= 160 && particle.body.position.x < 320 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x >= 320 && particle.body.position.x < 480 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
  
      }

}


function mousePressed()
{
    if(gameState!=="end")
    {
        
        count++;
       particle=new Particle(mouseX, 10, 10, 10); 
       console.log(particle.y);

    }   
}