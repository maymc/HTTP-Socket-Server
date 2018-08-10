const http = require("http");

// const server = http.createServer(client => {
//   //"Connect" listener
//   console.log("Client connected!");
//   client.write("hi");

//   client.on("data", data => {
//     console.log(data.toString());
//     let msg = data.toString();
//   });

// });

const hostname = "0.0.0.0";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'test/plain');
  res.end('Hello World\n');
})


server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname + ':' + port + '/');
});