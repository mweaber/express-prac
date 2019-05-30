// Require/importing http 
var http = require("http");

// Define the two ports for incoming requests
var PORT_ONE = 7000;
var PORT_TWO = 7500;

// Function to handle req/res
function expressRequests(req, res) {
    //Send the following to the client for the user to see
    res.end("Success!! Path hitting: " + req.url);
}

// Node http package to create server, pass the function.
var server_one = http.createServer(expressRequests);
const server_two = http.createServer(expressRequests);

// Start the server
server_one.listen(PORT_ONE, function() {
    console.log(motivation[random_number] + " Server now listening on http://localhost:" + PORT_ONE);
});

server_two.listen(PORT_TWO, function() {
    console.log(more_motivation[random_number] + " Check server listening on http://localhost:" + PORT_TWO)
});


// BONUS ATTEMPTS
const motivation = ["Congrats!","Good Job!", "Proud of you!"];
const more_motivation = ["Keep Going!","You're doing great!","You got this!"];
let random_number = Math.floor(Math.random() * 2);

// console.log(motivation[random_number]);