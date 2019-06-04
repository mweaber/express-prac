// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
// 

app.use(express.json());

// 

// This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
// Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option. 
// This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, 
// the Content-Type was not matched, or an error occurred.

// Data
var characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

// Routes
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// Displays all characters
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or shows "No character found"
app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.send("No character found");

});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  var newcharacter = req.body;
  // req.body makes key/value pairs

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// POSTMAN NOTES 

// UNDER POST
  // Select "body", "raw", and make sure "JSON" is selected so app knows what
  // to send the response back as. 