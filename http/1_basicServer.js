const http = require("http");
const sample = require("./sample.json");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  if (req.url == "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(sample, null, 2));
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is API development");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log("Server running on port ", port);
});
