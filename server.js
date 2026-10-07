// server.js
// A basic HTTP server using the core "http" module with multiple routes

const http = require("http");
const logger = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  logger.log(`Incoming request: ${req.method} ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.end("Welcome to Node Server");
      break;

    case "/about":
      res.statusCode = 200;
      res.end("About Page");
      break;

    case "/contact":
      res.statusCode = 200;
      res.end("Contact Page");
      break;

    default:
      res.statusCode = 404;
      res.end("404 - Page Not Found");
      break;
  }
});

server.listen(PORT, () => {
  logger.log(`Server is running at http://localhost:${PORT}/`);
});

// Run with: node server.js
// Then visit:
//   http://localhost:3000/
//   http://localhost:3000/about
//   http://localhost:3000/contact
//   http://localhost:3000/anything-else (404)
