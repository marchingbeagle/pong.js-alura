// Ball Position
let xBall = 300
let yBall = 200

// Speeds
let xSpeed = 5
let ySpeed = 6
let playerSpeed = 8

// Player1
let yPlayer1 = 150
let xPlayer1 = 5
let player1Points = 0

// Player2
let yPlayer2 = 150
let xPlayer2 = 585
let player2Points = 0

// Ball size
let ballDiameter = 25
let ballRadious = ballDiameter/2

// Canvas size
let canvasWidht = 600
let canvasHeight = 400

// Player size
let playerWidht = 10
let playerHeight = 90

function setup() {
  createCanvas(canvasWidht, canvasHeight);
}

function draw() {
  background(0);
  drawPlayers(xPlayer1,yPlayer1);
  drawPlayers(xPlayer2,yPlayer2);
  canvasLimit();
  drawBall();
  points();
  showPoints();
  ballColision();
  ballMovement();
  playerCollision();
  player1Movement();
  player2Movement();
  
}

function drawBall(){
  circle(xBall,yBall,ballDiameter);
}

function drawPlayers(x,y){
  rect(x, y, playerWidht, playerHeight);
}

function player2Movement(){
  if(keyIsDown(UP_ARROW)){
    yPlayer2 -= playerSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    yPlayer2 += playerSpeed;
  }
}

function player1Movement(){
  if(keyIsDown(87)){
    yPlayer1 -= playerSpeed;
  }
  if(keyIsDown(83)){
    yPlayer1 += playerSpeed;
  }
}

function ballColision(){
  if(xBall > canvasWidht - ballRadious || xBall - ballRadious < 0){
    xBall = 300
    yBall = 200
    xSpeed *= -1;
  }
  if(yBall > canvasHeight - ballRadious || yBall - ballRadious < 0){
    ySpeed *= -1;
  }
}

function ballMovement(){
  xBall += xSpeed
  yBall += ySpeed
}

function playerCollision(){
  if(xBall - ballRadious < xPlayer1 + playerWidht && yBall - ballRadious < yPlayer1 + playerHeight && yBall + ballRadious > yPlayer1){
    xSpeed *= -1;
  }
  if(xBall + ballRadious > xPlayer2 + playerWidht && yBall - ballRadious < yPlayer2 + playerHeight && yBall + ballRadious > yPlayer2)
    xSpeed *= -1;
}

function showPoints(){
  textSize(20);
  textAlign(CENTER);
  fill(color(255,140,0))
  rect(130,10,40,20);
  rect(430,10,40,20);
  fill(255);
  text(player1Points, 150, 27);
  text(player2Points, 450, 27);
}

function points(){
  if(xBall > canvasWidht - ballRadious){
    player1Points += 1;
  }
  if(xBall - ballRadious< 0){
    player2Points += 1;
  }
}

function canvasLimit(){
  if(yPlayer1 < 0){
    yPlayer1 = 0;
  }
  if(yPlayer1 > 400 - playerHeight){
    yPlayer1= 400 - playerHeight;
  }
  
  if(yPlayer2 < 0){
    yPlayer2 = 0;
  }
  if(yPlayer2 > 400 - playerHeight){
    yPlayer2= 400 - playerHeight;
  }
}
