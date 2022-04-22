var bGround = require('fcc-express-bground');
var express = require('express');
var app = express();

bGround.log("Hello World");
console.log("Hello World");

// app.get("/", function(req, res){
//   res.send("Hello Express");
// });

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});
  
app.use("/public", express.static(__dirname + "/public"));
