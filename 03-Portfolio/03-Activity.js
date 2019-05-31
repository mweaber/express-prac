const http = require("http");

const PORT = 8080;

const server = http.createServer(handleExpress);

// Starting the server
    server.listen(PORT, function() {
        console.log("Server now listening at http://localhost:" + PORT);
    });

// Create the function which will handle the incoming request and sends responses
function handleExpress(req, res) {

    //Capturing the URL the request is made to
    const path = req.url;
    console.log(path);

    // Setting up a switch to display different pages
    // based on the route hit.
    switch (path) {

        // Home route that'll display root page
        case "/":
            return displayRoot(path, req, res);

        // Portfolio route that'll display portfolio
        case "/portfolio":
            return displayPortfolio(path, req, res);
        
        // Default to 404 page
        default: 
            return display404(path, req, res);

    }
}

// When someone visit http://localhost8080/ path, this will be the funciton that runs 
// and what will end up displaying to the client.
function displayRoot(url, req, res) {
    const myHTML = "<html>" + 
    "<body><h1>Home Page</h1>" +
    "<a href='/portfolio'>Portfolio</a>" + 
    "</body></html>";

    // Configuring the response from server (200) all ok.
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the myHTML code to the client.
    res.end(myHTML);
}

// When someone visit http://localhost8080/portfolio path, this will be the funciton that runs 
// and what will end up displaying to the client.
function displayPortfolio(url, req, res) {
    const myHTML = "<html>" + 
    "<body><h1>Home Page</h1>" +
    "<a href='/'>Go Home</a>" + 
    "</body></html>";

    // Configuring the response from server (200) all ok.
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the myHTML code to the client.
    res.end(myHTML);
}

// When someone visit a path that is not specified, this will be the funciton that runs 
// and what will end up displaying to the client.
function display404(url, req, res) {
    const myHTML = "<html>" + 
    "<body><h1>404 Page Not Found</h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "<a href='/'>Go Home</a>" + 
    "</body></html>";

    // Configuring the response from server (200) all ok.
    res.writeHead(200, { "Content-Type": "text/html" });

    // End the response by sending the myHTML code to the client.
    res.end(myHTML);
}


