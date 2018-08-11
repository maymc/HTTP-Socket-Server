const net = require("net");

const server = net.createServer(client => {
  //"Connect" listener
  console.log("Client connected!");
  client.write("HTTP/1.x 200 OK\nServer: Ubuntu Server");
  client.on("data", data => {
    console.log(data.toString());
    let msgFromClient = data.toString();
  });

});

server.listen(8080, () => {
  console.log("Server listening on port 6969");
});


