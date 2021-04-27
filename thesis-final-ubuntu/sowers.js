var express = require('express');
const tsv = require('csv-parser');
const fs = require('fs');
var http = require('http');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var nodemailer = require('nodemailer');
//var semail="slimetechlab@gmail.com";
var semail="datamemory2@gmail.com";
var table;
var nodemailer = require('nodemailer');
var download = require('download-file')
const requesttsv = require('request');
var db;
var tbodyin =""
var messagedb=[];
var feelings = [];
var feelings_singular = [];

// var urltsv = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRDxhmVYPGwGHT9n5MV1BvooDyehfEPdcQpUHC4kIn5aaf2Tvrg5UXtk1rnkUv5lUEhYAFF2fEwcGL0/pub?gid=0&single=true&output=tsv"
 
//  var optionstsv = {
//     directory: "/spreadsheets/d/e/2PACX-1vRDxhmVYPGwGHT9n5MV1BvooDyehfEPdcQpUHC4kIn5aaf2Tvrg5UXtk1rnkUv5lUEhYAFF2fEwcGL0/pub?gid=0&single=true&output=tsv",
//     filename: "db.tsv"
// }

// converts from google spreadsheet to STV
var options = {
  host: 'https://docs.google.com',
  // put id here below
  path: '/spreadsheets/d/1yqJ6v_cXj7rSGbMZPasTkcnPthvwrDH7ny4pIVa_obw/export?format=tsv&gid=0'
};
 //let tsvID="https://docs.google.com/spreadsheets/d/1raMTK0mm2PpueS4HhPXpb3YHebN3MyF0QF4mvKhSXdw/export?format=tsv&gid=0"
//setting middleware
// able to view webpage on http://localhost:8000
server.listen(8000);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'index.html');
});

io.on('connection', function (socket) {
// table = loadTable('assets/sowers.tsv', 'tsv', 'header');
setInterval(function(){
requesttsv('https://docs.google.com/spreadsheets/d/1yqJ6v_cXj7rSGbMZPasTkcnPthvwrDH7ny4pIVa_obw/export?format=tsv&gid=0', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  db=""
  db=body
  // this reads the next submission, perhaps instead of reading this new column, create new row
  var tbody=db.split('~#~')
  console.log(tbody.length); // Print the HTML for the Google homepage.
  // adds all info from sheet to array
for (var i=0; i<tbody.length-1; i++){
tbodyin=tbody[i].split('\t')

messagedb[i]=""
// this is what column is printed
// timestamp i=0, searches i=1, elaboration i=2, category lower i=3 category upper i=4
messagedb[i]=tbodyin[0]+"——"+tbodyin[6]+"\n"+"\n"+tbodyin[2]+"\n"+"\n"+tbodyin[4];

// //adding each feeling to the array, if they are not already included
// if (feelings.includes(tbodyin[3])) {
//   console.log("do nothing");
// } else {
//   feelings[i]=tbodyin[3];
//   console.log("added feeling to array");
// }

  // if(tbody[i]!="~#~"){console.log(tbody[i])}
  // if(tbody[i]=="~#~"){console.log('\n')}
}
});
}, 5000);

// socket.io sends messages back and forth from server and client
// socket below sends data to 

// socket.on('emailserver', function (data) {
//     if (data.b!=""){console.log(data);
//     sendemail(data.b)}
// });

socket.on('heart', function (data) {
    console.log(data);
});

// this msg is a click from the client side browser
// randomly from the array created, the message is pulled and displayed on the site
socket.on('msgdb', function (data) {
  socket.emit('msgscreen', { b:messagedb[Math.floor(Math.random() * messagedb.length) + 1],s:"data.s",l:"data.l" }); 
console.log("linked")
});

setInterval(function(){
	      socket.emit('toscreen', { b:"data.b",s:"data.s",l:"data.l" }); 
}, 3000);



});


// function sendemail(i){

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'slimetechlab@gmail.com',
//     pass: 'Ashley1Ayo2'
//   }
// });

// var mailOptions = {
//   from: 'slimetechlab@gmail.com',
//   to: semail,
//   subject: 'SlimeTech Lab',
//   text: i
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
// }
