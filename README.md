## Intro To Node

__Node.js®__ is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

A __node_module__ is basically a lego block of code.   Everything in a node application is modular, meaning it is made up of many different smaller parts that work towards the end functionality

__NPM__ stands for Node Package Manager - It's just a tool that allows us to easily access the Node module ecosystem and ad them to our project.

Example node_module: [Moment.js](https://momentjs.com/)

Every node app has a __package.json__, which is the master file that keeps track of all node modules your project cares about.

To add a `package.json` to your project, run the command `npm init`, and accept all defaults.

-----
### Commit your code
`git add -A`

`git commit -m "push message"`

`git push origin master`

------

### Node HTTP Server

We used the node module HTTP to build a simple web server, that we can then run and connect to using the web address: `http://localhost:3000/`. To run the server use the command `node index.js`

```js
var http = require("http");

http.createServer(function (request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World!");
}).listen(3000,function(){
  console.log("App is listening on port 3000")
});
```

###Express Web Server

Express API

To add express node module to our application:

npm install --save express

To ensure it was added successfully, check your `package.json` for:
```js
"dependencies": {
  "express": "^4.15.3"
}
```
This also gives us a ton of code we do not care to track in our Github, in the node_modules/ folder. To ignore this code:

`touch .gitignore` add `node_modules/` to `.gitignore`

__express server__
```js
var express = require("express");
var app = express();

app.get("/greeting", function(req, res){
  res.send("Wahoo you found the greeting end point!")
});

app.get("/wazzup", function(req, res){
  res.send("You kind of get this, but not really!")
});


app.listen(3000, function(){
  console.log("Listening on port 3000");
});
```
## Request Parameter -
This is a way to pass data from the URL to the page/ `index.js`
Here is a block of the code for example:

```js

app.get("/greeting/:name", function(req, res){
  var yourName = req.params.name;
  res.send("Nice to meet you "+ yourName)
});

app.get("/greeting/color/:color", function(req, res){
  var favColor = req.params.color;
  res.send("This is your fav color "+ favColor)
});
```

## NodeMon

This makes it so I do not have to `node index.js` every time to restart the server.  It auto updates everytime.  I just need to make sure I start the process which each new "session"
`nodemon index.js`

note - - the terminal will continue to run on its own, but if you need to type in the terminal you will need to Control C it and terminate the server.  This was confusing at first - I get it now 


## Adding new endpoints to pass data from form:
here is the JS
```js
app.post("/mtb", function(req, res){
  var brand = req.body.brand;
  var model = req.body.model;
  var build = req.body.build;

  var mtb = {brand: brand, model: model, build: build};
  res.json(mtb);
  console.log("I wants a ", brand, " ",model," with a ",build," build.");
});
```
Using the `req.body.KEY` where the KEY is defined right now by the user- we are using Postman to look at this right now.  So if I put "brand" as the KEY and "Santa Cruz" as the VALUE the `res` / `var brand` would be "Santa Cruz" in the above example.  
