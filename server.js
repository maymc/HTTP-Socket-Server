const net = require("net");

const server = net.createServer(client => {
  //"Connect" listener
  console.log("Client connected!");
  client.write("hi");

  client.on("data", data => {
    console.log(data.toString());
    let msg = data.toString();
  });

});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
});


