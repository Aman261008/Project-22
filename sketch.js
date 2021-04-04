var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	Music=loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800,750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy=createSprite(400,375);
	fairy.addAnimation("walk",fairyImg);
	fairy.scale=0.3;

	engine = Engine.create();
	world = engine.world;
options={
	isStatic:true
}
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	fairyBody=Bodies.rectangle(400,375,5,5,options);
	World.add(world,fairyBody);
	Engine.run(engine);

}


function draw() {
  background(bgImg);
Engine.update(engine);
  star.x= starBody.position.x 
  star.y= starBody.position.y 
fairy.x=fairyBody.position.x
fairy.y=fairyBody.position.y
  console.log(star.y);

  //write code to stop star in the hand of fairy
 if(star.y>320&&starBody.position.y>320){
	 Matter.Body.setStatic(starBody,true);
 }
 
 
  rectMode(CENTER);
  rect(fairyBody.x, fairyBody.y,5,5);
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyCode===LEFT_ARROW){
		fairyBody.position.x=fairyBody.position.x-50;
	}
	if(keyCode===RIGHT_ARROW){
		fairyBody.position.x=fairyBody.position.x+50;
	}
}
