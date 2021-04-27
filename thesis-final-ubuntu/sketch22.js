//This example uses a simple class with 4 arguments
 let img;
var pulse=[];
 
function setup() {
  createCanvas(2000, 1500);
  //createCanvas(windowWidth, windowHeight);
    img = loadImage('assets/slimetech1.jpg'); // Load the image

  background(100);
 
  //fill array
  for(var i=0;i<2;i++){ //loop 5 times
    //put an object in the array for each loop
    var d=random(100,200);
    pulse[i] = new Pulser(width/2, height/2, d,d); 
 
  }
  noStroke();
}
 
function draw() {
  image(img, 0, 0);
for (var i = 0; i < pulse.length; i++) {
    for (var j = 0; j < pulse.length; j++) {
      if (i != j) {
        pulse[i].connect(pulse[j]);
      }
    }
  }
  
  for(var i=0;i<pulse.length;i++){ //loop 5 times
    pulse[i].display(); //run the display function of the object
    pulse[i].move();
    pulse[i].connect();
  }
}
 
//ADD an object to the array when mouse is clicked
function mousePressed(){
  var d=random(100,200);
  pulse.push(new Pulser(width/2, height/2, d,d));
  console.log("pushing");
}
 
//class in p5js
 
class Pulser {
 
    //The constructor (note no variable declarations above the constructor)  
    constructor(x, y, w, h) { //pulser has 4 arguments 
    this.xPos = x; //this refers to the variables in the class. Need to use this in front of all variables.
    this.yPos = y;
    this.w = w;
    this.h = h;
    this.d = 20;
    this.color = "red";
    this.n=random(2);//generate a random starting noise variable; 
    this.p=0; //position variable
    this.inc=0.005; //noise variable increment
    this.xPosf = random(0.1, 10);
  this.yPosf = random(0.1, 10);
  }

//  connect() {

//     if (dist(this.xPos, this.yPos, other.xPos, other.yPos) < 100) {
//       stroke(255,255,0);
//       strokeWeight(5);
//       beginShape();
//       vertex(this.xPos, this.yPos);
//       vertex(other.xPos, other.yPos);
//       endShape();
//       //line(this.xPos,this.yPos,other.xPos,other.yPos);
//     }
//   }



// collide() {
//     for (let i = this.id + 1; i < pulse.length; i++) {
//       // console.log(others[i]);
//       let dx = this.others[i].xPos - this.xPos;
//       let dy = this.others[i].yPos - this.yPos;
//       let distance = sqrt(dx * dx + dy * dy);
//       let minDist = this.others[i].d / 2 + this.d / 2;
        
//       console.log(minDist);
//       if (distance < minDist) {
//         //console.log("2");
//         console.log("collide");
//         let angle = atan2(dy, dx);
//         let targetX = this.xPos + cos(angle) * minDist;
//         let targetY = this.yPos + sin(angle) * minDist;
//         let ax = (targetX - this.others[i].xPos) * spring;
//         let ay = (targetY - this.others[i].yPos) * spring;
//         this.vx -= ax;
//         this.vy -= ay;
//         this.others[i].vx += ax;
//         this.others[i].vy += ay;
//       }
//     }
//   }
 
connect(other) {

    if (dist(this.xPos, this.yPos, other.xPos, other.yPos) < 100) {
      stroke(255,255,0);
      strokeWeight(5);
      beginShape();
      vertex(this.xPos, this.yPos);
      vertex(other.xPos, other.yPos);
      endShape();
      //line(this.xPos,this.yPos,other.xPos,other.yPos);
    }
  }

   //Functions 
  display() {
    fill(255, 0, 0,100);
    ellipse(this.xPos, this.yPos, this.w, this.h); 
  // this.w += random(-1, 1);
  //   this.h += random(-1, 1);
 
  }
 
 
  move() {
     this.xPos += this.xPosf;
    this.yPos += this.yPosf;

    if (this.xPos > width - this.d / 2 || this.xPos < this.d / 2) {
      this.xPosf = this.xPosf * -1;
console.log("over")
    }
    if (this.yPos > height - this.d / 2 || this.yPos < this.d / 2) {
      this.yPosf = this.yPosf * -1;
    }
   // this.p=noise(this.n);
   // this.xPos=map(this.p,0,1,0,width); 
   // this.n=this.n+this.inc;
  }
}