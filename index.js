// index.js
var express = require("express");
var app = express();

app.get("/greeting", function(req, res){
  res.send("Wahoo you found the greeting end point!")
});

app.get("/greeting/:name", function(req, res){
  var yourName = req.params.name;
  res.send("Nice to meet you "+ yourName)
});

app.get("/greeting/color/:color", function(req, res){
  var favColor = req.params.color;
  res.send("This is your fav color "+ favColor)
});


app.get("/wazzup", function(req, res){
  res.send("You kind of get this, but not really!")
});



app.listen(3000, function(){
  console.log("Listening on port 3000");
});
