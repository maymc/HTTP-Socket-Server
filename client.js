const net = require("net");

const client = net.createConnection(8080, "0.0.0.0", () => {

  client.on("data", data => {
    let msgFromServer = data.toString();
    console.log("\nmsgFromServer:\n", msgFromServer);

    //console.log(process.argv);
    //If node client is run with no arguments then display a help message that explains how to use your client, including all available options
    if (process.argv[2] === undefined) {
      client.write("\nHelp/Usage:\nTo use this client, please run the client.js file with nodemon and add a host/path.");
      client.write("\n(ie: nodemon client.js localhost:8080/yourPathName)\n");
    }
    else {
      //Else, node command is able to take in a single argument with host and URI (Uniform Resource Identifier) to request a resource.
      //Get the URI and separate the host and path out
      console.log("\nprocess.argv[2]:", process.argv[2]);
      let slashIndex = process.argv[2].indexOf("/");
      let host = process.argv[2].slice(0, slashIndex);
      let path = process.argv[2].slice(slashIndex);

      //Transmits 'standard' HTTP headers to the server (Header Request Line: GET /index.html HTTP/1.1 ; Header: any host)
      let date = new Date();

      client.write("GET " + path + " HTTP/1.1" + "\nDate: " + date + "\nHost: " + host + "\nUser-Agent: DevLeagueClient");
    }
  });
  process.stdin.pipe(client);
});
