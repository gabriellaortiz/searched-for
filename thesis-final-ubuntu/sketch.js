let numBalls = 13;
let spring = 0.05;
let gravity = 0.03;
let friction = 0;
let balls = [];
 let img;
// var pulse=[];

function setup() {
  createCanvas(2000, 1500);
  //createCanvas(windowWidth, windowHeight);
    img = loadImage('assets/slimetech1.jpg'); // Load the image

  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(
      random(width),
      random(height),
      random(30, 70),
      i,
      balls
    );
  }
  noStroke();
  //fill(255, 204);
}

function draw() {


  image(img, 0, 0);

for (var i = 0; i < balls.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      if (i != j) {
        balls[i].connect(balls[j]);
      }
    }
  }

  balls.forEach(ball => {
    ball.collide();
    ball.move();
    ball.display();
  });
}


function mousePressed() {
  for(var i = 0; i < balls.length; i++){
    balls[i].clicked();
  }
}
// function mousePressed(){
//   var d=random(100,200);
//   balls.push(new Ball(width/2, height/2, d,d));
//   console.log("pushing");
// }

class Ball {
  constructor(xin, yin, din, idin, oin) {
    this.x = xin;
    this.y = yin;
    this.vx = 0;
    this.vy = 0;
    this.col = color('hsba(100, 100%, 50%, 0.5)');
    this.diameter = din;
    this.id = idin;
    this.others = oin;
  }

  collide() {
    for (let i = this.id + 1; i < numBalls; i++) {
      // console.log(others[i]);
      let dx = this.others[i].x - this.x;
      let dy = this.others[i].y - this.y;
      let distance = sqrt(dx * dx + dy * dy);
      let minDist = this.others[i].diameter / 2 + this.diameter / 2;
      //   console.log(distance);
      //console.log(minDist);
      if (distance < minDist) {
        //console.log("2");
        let angle = atan2(dy, dx);
        let targetX = this.x + cos(angle) * minDist;
        let targetY = this.y + sin(angle) * minDist;
        let ax = (targetX - this.others[i].x) * spring;
        let ay = (targetY - this.others[i].y) * spring;
        this.vx -= ax;
        this.vy -= ay;
        this.others[i].vx += ax;
        this.others[i].vy += ay;
      }
    }
  }

connect(other) {

    if (dist(this.x, this.y, other.x, other.y) < 100) {
      stroke(255,255,0);
      strokeWeight(5);
      beginShape();
      vertex(this.x, this.y);
      vertex(other.x, other.y);
      endShape();
      //line(this.xPos,this.yPos,other.xPos,other.yPos);
    }
  }

  move() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    if (this.x + this.diameter / 2 > width) {
      this.x = width - this.diameter / 2;
      this.vx *= friction;
    } else if (this.x - this.diameter / 2 < 0) {
      this.x = this.diameter / 2;
      this.vx *= friction;
    }
    if (this.y + this.diameter / 2 > height) {
      this.y = height - this.diameter / 2;
      this.vy *= friction;
    } else if (this.y - this.diameter / 2 < 0) {
      this.y = this.diameter / 2;
      this.vy *= friction;
    }
  }

  display() {
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  clicked() {
  
    var d = dist(mouseX, mouseY, this.diameter, this.diameter);

    if(d < this.diameter/2){
      console.log(d);
      console.log("dd");
       this.col = color('hsba(50, 100%, 50%, 0.5)');

    }
  }
}
