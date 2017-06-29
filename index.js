var express = require("express");
var bodyParser = require("body-parser");
var makeDate = require("./dateMaker");
var app = express();

console.log(makeDate(10));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/instagrams", function(req, res){
  res.send("Oh no mine is Very different from that");
})

app.post("/instagrams", function(req, res){
  res.send("I call it Exchangogram - post");
});

var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});
