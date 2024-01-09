"use strict";

const http = require("node:http");

// const app = http.createServer((request, response) => {
//   response.end("<h1>wellcome to nodejs server</h1>");
// });

// app.listen(8000, () => console.log("server runned : http://127.0.0.1:8000"));

// const app = http
//   .createServer((request, response) => {
//     console.log(request);

//     if (request.url == "/") {
//       response.end("Main page");
//     } else if (request.url == "/second") {
//       response.end("Second page");
//     } else {
//       response.end("Server is running");
//     }

//     response.end("Server is running");
//   })
//   .listen(8000, console.log("server runned : http://127.0.0.1:8000"));

http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.statusCode = 404;

      res.statusMessage = "Not Found";
      res.setHeader("Content Type", "text/html");
      res.write("Main Page");
      res.end("Main path");
    } else if (req.url == "/api") {
      if (req.method == "GET") {
        res.end("GET");
      } else {
        res.end("Not Supporting different method.");
      }
    } else {
      res.end("Server is running");
    }
  })
  .listen(8000, () => console.log("http://127.0.0.1:8000"));
