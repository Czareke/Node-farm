const http = require("http");
const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/dev-data//data.json`, "utf-8");

const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathname = req.url;
  if (pathname === "/" || pathname === "/overview") {
    res.end("This is the Overview");
  } else if (pathname === "/product") {
    res.end("This is your products");
  } else if (pathname === "/Api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404,{"Content-type":'text.html'});
    res.end("<h1>Page not found!</h1>")
  }
  //   res.end("Hi from the server");
});
const port = 3000;
server.listen(port, "127.0.0.1", () => {
  console.log(`Listen on port ${port}`);
});
// Creating a server shortly
// const express = require('express')
// const app = express()
// app.get('./', function(req,res){
//     res.send("hii")

// })
// app.listen(3000)