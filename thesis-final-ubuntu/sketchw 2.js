let img,img1,img2,img3,img4,img5; // Declare variable 'img'.
var balls = [];
var NOB;
let splitString;
let message =[];
let result;
let evar;
let convar=0;
let pconvar=0;
 let table;
 var input;
var button;
var first=0;
var dbmessage="Seached For: qualia"

 //https://www.highviewapps.com/blog/how-to-create-a-csv-or-excel-direct-download-link-in-google-sheets/
 // let tsvID="https://docs.google.com/spreadsheets/d/1raMTK0mm2PpueS4HhPXpb3YHebN3MyF0QF4mvKhSXdw/export?format=tsv&gid=0"
function preload() {
    img = loadImage('assets/slimetech1.jpg'); // Load the image
  img4 = loadImage('assets/image4.jpg'); // Load the image

  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('assets/sowers.tsv', 'tsv', 'header');
  table = loadTable("https://docs.google.com/spreadsheets/d/1yqJ6v_cXj7rSGbMZPasTkcnPthvwrDH7ny4pIVa_obw/export?format=tsv&gid=0",
                   "tsv", "header");
  console.log(table);
  for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 0; c < table.getColumnCount(); c++) {
      //consol.log(table.getString(r, c));
    }


  // var txtFile = DriveApp.getFileById(tsvID),
  //     fileTextObj = txtFile.getAs('text/plain'),
  //     fileText = fileTextObj.getDataAsString(),
  //     lines = fileText.split('\n'),
  //     lines2DArray = [];
  // lines.forEach(function (line) {
  //                 lines2DArray.push(line.split('\t'));
  //                 console.log(line) 
  //              });
  //the file can be remote
  
}

function loaddata() {

    

}

function setup() {
  // getTsvFileAsArrayOfArays(1raMTK0mm2PpueS4HhPXpb3YHebN3MyF0QF4mvKhSXdw);



  createCanvas(windowWidth, 1500);
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
 evar=int(random(0, table.getRowCount()));
  NOB=int(table.getRowCount());

  // for (let r = 0; r < table.getRowCount(); r++)
  //   for (let c = 0; c < table.getColumnCount(); c++) {
  //     print(table.getString(r, c));
  //   }
 for (let r = 0; r < table.getRowCount(); r++)
    for (let c = 2; c < table.getColumnCount(); c++) {
      message.push(table.getString(r, c));

    }

  for (var i = 0; i < NOB; i++) {
    balls.push(new Ball());
  }
email();
}



setInterval(function(){ 
if (convar!=pconvar){
    console.log("kkk")
    
    evar=int(random(0, table.getRowCount()));
convar=0;
  }
   }, 10000);


function drawName() {
  // background(255,255,0);
  // textSize(30);
  // var name = input.value();
  // for (var i=0; i < 30; i++) {
  //   fill(random(255));
  //   text(name, random(width), random(height));
  // }
  first=1;
  emailserver(str(input.value()));
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }

}

function email(){
background(255,255,0)
print ("sss"+ str(first))
  if(first==0){
 input = createInput();
  input.position(windowWidth/2-100, 300);
  button = createButton("submit");
  button.position(windowWidth/2+60, 300);
  button.mousePressed(drawName);
  text("enter your email to participate or submit to view", windowWidth/2-125, 290);

  } 

  
}


function draw() {
  if(first==1){
input.hide();
button.hide();

print (convar);
background(255,255,0)
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  // image(img, 0, 0, img.width / 2, img.height / 2);

  for (var i = 0; i < balls.length; i++) {
    for (var j = 0; j < balls.length; j++) {
      if (i != j) {
        balls[i].connect(balls[j]);
//balls[i].disconnect(balls[j]);
      }
    }
  }



// for (var i = 0; i < balls.length; i++) {
//     for (var j = 0; j < balls.length; j++) {
//       if (i != j) {
// //         balls[i].connect(balls[j]);
// balls[i].disconnect(balls[j]);
//       }
//     }
//   }


  for (var a = 0; a < balls.length; a++) {
    balls[a].move();
    balls[a].disp();
  }
//console.log(evar)
let s = str(dbmessage);
fill(0,0,0,200);
rect(windowWidth/2-200, 50, 400, 1050,10);
textSize(16);
fill(255,255,0);
text(s, windowWidth/2-150, 100, 300, 1000); //  
// text(splitString[0], 5, 30);
// text(splitString[1], 5, 50);
// text(splitString[2], 5, 70);
//image(img4, windowWidth/2-150, 400, 300,200);
}


}
  



function windowResized() {
  resizeCanvas(windowWidth, 1500);
}

// function mousePressed(){
//   var d=random(100,200);
//   balls.push(new Ball(width/2, height/2, d,d));
//   console.log("pushing");
// }

function mousePressed() {

  for(var i = 0; i < balls.length; i++){
    // if (balls[i].con){
    balls[i].clicked();
  // }
  }
}

function Ball() {
  this.con = false;
this.d = 40;
  this.xPos = random(this.d, width - this.d / 2);
  this.yPos = random(this.d, height - this.d / 2);
  this.xPosf = random(0.1, 1);
  this.yPosf = random(0.1, 1);
this.col = color('hsba(160, 100%, 50%, 0.125)');


this.connect = function(other) {

    if (dist(this.xPos, this.yPos, other.xPos, other.yPos) < 100) {
      stroke(255,255,0);
      strokeWeight(5);
      beginShape();
      vertex(this.xPos, this.yPos);
      vertex(other.xPos, other.yPos);
      endShape();

this.con=true;
other.con=true;
setTimeout(function(){ 
 this.con=false;
other.con=false;
this.col = color('hsba(160, 100%, 50%, 0.125)');
other.col = color('hsba(160, 100%, 50%, 0.125)'); 
}, 10000);
// convar=1;
// this.col=color('hsba(50, 100%, 50%, 0.5)');
      //line(this.xPos,this.yPos,other.xPos,other.yPos);
//setTimeout(function(){ evar=int(random(0, table.getRowCount())); }, 3000);
    }
}
 

this.disconnect = function(other) {
if (this.con==true){
    if (dist(this.xPos, this.yPos, other.xPos, other.yPos) > 150) {
//      
// this.con=false;
this.col = color('hsba(160, 100%, 50%, 0.125)');
      //line(this.xPos,this.yPos,other.xPos,other.yPos);
//setTimeout(function(){ evar=int(random(0, table.getRowCount())); }, 3000);
    }
  }
con=false
}


  this.disp = function() {
  // evar=int(random(0, table.getRowCount()));
  
    fill(this.col);
    noStroke();
    ellipse(this.xPos, this.yPos, this.d, this.d);
fill(this.col);
ellipse(this.xPos, this.yPos, this.d+20, this.d+20);
fill(this.col);
ellipse(this.xPos, this.yPos, this.d+40, this.d+40);
fill(this.col);
ellipse(this.xPos, this.yPos, this.d+60, this.d+60);
// fill(this.col);
// ellipse(this.xPos, this.yPos, this.d+80, this.d+80);
  }

  this.move = function() {
    this.xPos += this.xPosf;
    this.yPos += this.yPosf;

    if (this.xPos > width - this.d / 2 || this.xPos < this.d / 2) {
      this.xPosf = this.xPosf * -1;
this.col = color('hsba(160, 100%, 50%, 0.125)');
this.con=false;

    }
    if (this.yPos > height - this.d / 2 || this.yPos < this.d / 2) {
      this.yPosf = this.yPosf * -1;
this.col = color('hsba(160, 100%, 50%, 0.125)');
this.con=false;
    }

  }

// if the item is clicked, show an entry from the site
 this.clicked = function() {
 	//console.log("dd");
  if (this.con==true){
    var d = dist(mouseX, mouseY, this.xPos, this.yPos);
    if(d < this.d/2*2){
      msgdb()
       this.col = color('hsba(50, 100%, 50%, 0.5)');
    }
  }
  };

  
}
