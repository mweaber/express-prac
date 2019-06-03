// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do?
// ANSWER: I believe this will make a route on /api/characters that will return the characters object.
// The return stops the function. 
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});


// What does this route do?
// ANSWER: This make a route along /api/characters/:charater that has a req.param in the url route.
app.get("/api/characters/:character", function(req, res) {
  // What does this code do?
  // ANSWER: This is setting up a variable that is equal to what the user requested in the url route.
  var chosen = req.params.character;
  console.log(chosen);

  // What does this code do?
  // ANSWER: Making a for loop that checks the name searched in the :character param against what is in the character array
  // of objects and returns that to the user.
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  // ANSWER: Sends a message to the front end if nothing found.
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//  ============================ return ==============
// Once the return triggers it will end the function. It is same as a break in a switch statement and 
// can help to keep things DRY. In this example it helps us to not have to make a route for each character. 
