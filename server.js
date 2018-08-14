const net = require("net");
const module404 = require("./404");
const heliumModule = require("./helium");
const hydrogenModule = require("./hydrogen");
const indexModule = require("./index");
const stylesModule = require("./css/styles");
let requestedURI = null;

const server = net.createServer(client => {
  //"Connect" listener
  console.log("Client connected!\n");

  //Process.argv prints out on server side when the client.write above goes through on the client side.
  // console.log("process.argv:\n", process.argv);

  client.on("data", data => {
    //console.log(data.toString());
    let msgFromClient = data.toString();
    console.log("\nmsgFromClient:\n", msgFromClient);
    let msgElements = msgFromClient.split(" ");

    //console.log(msgFromClient.split(" "));
    requestedURI = msgElements[1];
    console.log("Requested URI: ", requestedURI);
  });

  //Transmit 'standard' HTTP Headers to the client. (So this is the response to client's request). HTTP Response is the server replying to the client's original HTTP Request with a message and the requested resource.
  //HTTP Response includes a response message which is made with : A status line and response headers

  //If path is not found in your routes, return 404 status code and output some text/html content
  let date = new Date();

  if (requestedURI === "/") {
    client.write("HTTP/1.0 404 Not Found\nDate: " + date + "\nServer: DevLeagueServer\n\n");
  }
  else {
    client.write("HTTP/1.0 404 Not Found\nDate: " + date + "\nServer: DevLeagueServer\n\n");
  }

});

//Server listens on port 8080
server.listen(8080, () => {
  console.log("Server listening on port 6969");
});


