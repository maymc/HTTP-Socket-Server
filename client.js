const net = require("net");

//Set the variables
console.log("\nprocess.argv:", process.argv);
let host = process.argv[2];
console.log("host:", process.argv[2]);
let port = process.argv[3];
console.log("port:", process.argv[3]);
let path = process.argv[4];
console.log("path:", process.argv[4]);

//Create client connection to server
const client = net.createConnection(port, host, () => {

  //Get a new date
  let date = new Date();

  //Node command is able to take in a single argument with host and URI (Uniform Resource Identifier) to request a resource
  if (path && host) {
    client.write("GET " + path + " HTTP/1.1" + "\nDate: " + date + "\nHost: " + host + "\nUser-Agent: DevLeagueClient");
  }
  //Else, if node client is run with no arguments then display a help message that explains how to use your client, including all available options
  else {
    client.write("\nHelp/Usage:\nTo use this client, please run the client.js file with nodemon and add a host/path.");
    client.write("\n(ie: nodemon client.js localhost 8080 yourPathName)\n");
  }

  //Get the server's response to the client's request
  client.on("data", data => {
    let msgFromServer = data.toString();
    console.log("\nmsgFromServer:\n", msgFromServer);
  });

  process.stdin.pipe(client);
});