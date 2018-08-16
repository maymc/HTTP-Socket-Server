const net = require("net");

console.log("\nprocess.argv:", process.argv);

let host = process.argv[2];
console.log("host:", process.argv[2]);
let port = process.argv[3];
console.log("port:", process.argv[3]);
let path = process.argv[4];
console.log("path:", process.argv[4]);

const client = net.createConnection(port, host, () => {
  let date = new Date();

  //If node client is run with no arguments then display a help message that explains how to use your client, including all available options
  if (process.argv[2] === undefined) {
    client.write("\nHelp/Usage:\nTo use this client, please run the client.js file with nodemon and add a host/path.");
    client.write("\n(ie: nodemon client.js localhost:8080/yourPathName)\n");
  }
  //Else, node command is able to take in a single argument with host and URI (Uniform Resource Identifier) to request a resource.
  else {
    client.write("GET " + path + " HTTP/1.1" + "\nDate: " + date + "\nHost: " + host + "\nUser-Agent: DevLeagueClient");
  }

  //This is after because this is the server's response
  client.on("data", data => {
    let msgFromServer = data.toString();
    console.log("\nmsgFromServer:\n", msgFromServer);
  });
  process.stdin.pipe(client);

});