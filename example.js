// index.js
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/products",function(req,res){
  // req.body is alll the info coming in from the form
  // we need to get name, color , and price out of req.body
  var name = req.body.name;
  var color = req.body.color;
  var price = req.body.price;

  var product = {name: name, color: color, price: price};

  res.json(product);

  console.log("This ",name," is ", color, " and costs ",price);
});


app.post("/mtb", function(req, res){
  var brand = req.body.brand;
  var model = req.body.model;
  var build = req.body.build;

  var mtb = {brand: brand, model: model, build: build};
  res.json(mtb);
  console.log("I wants a ", brand, " ",model," with a ",build," build.");
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
