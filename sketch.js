var score = 0;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function preload() 
{
   polygonIma = loadImage("hexagon.png");
   getTime(); 
}

function setup()
{
    var canvas = createCanvas(1600,750);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,2000,20);
    log1 = new Ground(810,600,300,10);
    log2 = new Ground(1200,450,200,10);
   
   
    box1 = new Box(900,570,30,50);
    box2 = new Box(870,570,30,50);
    box3 = new Box(840,570,30,50);
    box4 = new Box(810,570,30,50);
    box5 = new Box(780,570,30,50);
    box6 = new Box(750,570,30,50);
    box7 = new Box(720,570,30,50);

    box8 = new Box(1259,420,30,50);
    box9 = new Box(1229,420,30,50);
    box10 = new Box(1199,420,30,50);
    box11 = new Box(1169,420,30,50);
    box12 = new Box(1139,420,30,50);

    box13 = new Box(870,520,30,50);
    box14 = new Box(840,520,30,50);
    box15 = new Box(810,520,30,50);
    box16 = new Box(780,520,30,50);
    box17 = new Box(750,520,30,50);
    box18 = new Box(1200,320,30,50);

    box19 = new Box(840,470,30,50);
    box20 = new Box(810,470,30,50);
    box21 = new Box(780,470,30,50);
    box22 = new Box(1229,370,30,50);
    box23 = new Box(1199,370,30,50);
    box24 = new Box(1169,370,30,50);

    box25 = new Box(810,420,30,50);

    //polygon holder with slings
    polygon = Bodies.circle(200,468,20);
    World.add(world,polygon);
   
    slingshot = new SlingShot(this.polygon,{x:200, y:470});
}

function draw()
{
    if(backgroundImg) 
    background(backgroundImg);
   
    Engine.update(engine);
    textSize(22);
    fill("red")
    text("Score:"+score,750,40)
    fill(135,206,234)
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

    fill(255,192,203);
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    fill(63,224,208);
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    fill(128,128,128);
    box25.display();

    imageMode(CENTER)
    image(polygonIma,polygon.position.x-5,polygon.position.y,40,40)
   

    slingshot.display();
    log1.display();
    log2.display();
    ground.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
   

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32)
    {
        Matter.Body.setPosition(this.polygon,{x:200,y:468})
        slingshot.attach(this.polygon);
       
        
    }
}

async function getTime()
{
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
        
    }

    

    backgroundImg = loadImage(bg);
   
    console.log(backgroundImg);
}