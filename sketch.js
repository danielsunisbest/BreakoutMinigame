var paddle, ball, grass;
var paddleImg, ballImg, grassImg;
var obImg
var ob1, ob2, ob3, ob4, ob5, ob6,
    ob7, ob8,ob9, ob10, ob11, ob12;
var edge;

var obsDestroyed = 0;

var gameState = "start";

function setup() {
  createCanvas(800,600);

  paddleImg = loadImage("Paddle.png");
  ballImg = loadImage("Ball.png");
  grassImg = loadImage("Grass.png");

  obImg = loadImage("R.png");

  paddle = createSprite(200, 450, 100, 20);
  ball = createSprite(random(100,700), 350, 20, 20);
  grass = createSprite(400, 400, 790, 20);

  ob1 = createSprite(85, 50, 50, 50);
  ob2 = createSprite(210, 50, 50, 50);
  ob3 = createSprite(335, 50, 50, 50);
  ob4 = createSprite(460, 50, 50, 50);
  ob5 = createSprite(585, 50, 50, 50);
  ob6 = createSprite(710, 50, 50, 50);
  ob7 = createSprite(85, 170, 50, 50);
  ob8 = createSprite(210, 170, 50, 50);
  ob9 = createSprite(335, 170, 50, 50);
  ob10 = createSprite(460, 170, 50, 50);
  ob11 = createSprite(585, 170, 50, 50);
  ob12 = createSprite(710, 170, 50, 50);

  ob1.addImage("Rock", obImg);
  ob2.addImage("Rock", obImg);
  ob3.addImage("Rock", obImg);
  ob4.addImage("Rock", obImg);
  ob5.addImage("Rock", obImg);
  ob6.addImage("Rock", obImg);
  ob7.addImage("Rock", obImg);
  ob8.addImage("Rock", obImg);
  ob9.addImage("Rock", obImg);
  ob10.addImage("Rock", obImg);
  ob11.addImage("Rock", obImg);
  ob12.addImage("Rock", obImg);

  paddle.addImage("paddle", paddleImg);
  ball.addImage("ball", ballImg);
  grass.addImage("grass", grassImg);

  paddle.scale = 0.2;
  ball.scale = 0.1;

  ob1.scale = 0.05;
  ob2.scale = 0.05;
  ob3.scale = 0.05;
  ob4.scale = 0.05;
  ob5.scale = 0.05;
  ob6.scale = 0.05;
  ob7.scale = 0.05;
  ob8.scale = 0.05;
  ob9.scale = 0.05;
  ob10.scale = 0.05;
  ob11.scale = 0.05;
  ob12.scale = 0.05;

  edge = createEdgeSprites();

  createEdgeSprites();
}

function draw() {
  background(190,255,255);  
  paddle.x = mouseX;


  if(gameState = "start"){
    text("Press Space to Start",350, 590);
    text("Blocks Destroyed:",350,500);
    text((obsDestroyed),450,500);
    if(keyDown("space")){
      gameState = "play";
      ball.setVelocity(15,-10);
    }
  }
  if(gameState = "play"){
    ball.bounceOff(edge);
    ball.bounceOff(paddle);

    if(ball.isTouching(ob1)){
      ball.bounceOff(ob1);
      ob1.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob2)){
      ball.bounceOff(ob2);
      ob2.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob3)){
      ball.bounceOff(ob3);
      ob3.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob4)){
      ball.bounceOff(ob4);
      ob4.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob5)){
      ball.bounceOff(ob5);
      ob5.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob6)){
      ball.bounceOff(ob6);
      ob6.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob7)){
      ball.bounceOff(ob7);
      ob7.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob8)){
      ball.bounceOff(ob8);
      ob8.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob9)){
      ball.bounceOff(ob9);
      ob9.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob10)){
      ball.bounceOff(ob10);
      ob10.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob11)){
      ball.bounceOff(ob11);
      ob11.destroy();
      obsDestroyed = obsDestroyed + 1
    }

    if(ball.isTouching(ob12)){
      ball.bounceOff(ob12);
      ob12.destroy();
      obsDestroyed = obsDestroyed + 1
     }

    if(obsDestroyed == 12){
      gameState = "End"
    }
   

   if(gameState == "End"){
    textFont(70);
    text("You Win!",350,200);
    paddle.destroy();
    ball.destroy();
   }
  }
  drawSprites();
}