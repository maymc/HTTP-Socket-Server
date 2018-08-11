const net = require("net");


const client = net.createConnection(8080, "0.0.0.0", () => {

  client.on("data", data => {
    console.log(data.toString());
    let msgFromServer = data.toString();
    console.log("\nmsgFromServer:\n", msgFromServer);

    if (process.argv[2] === undefined) {
      client.write("\nHelp/Usage:\nTo use this client, please run the client.js file with nodemon and add a host/path.");
      client.write("\n(ie: nodemon client.js localhost:8080/yourPathName)\n");
    }
    else {
      console.log("\nprocess.argv:\n", process.argv[2]);
      let slashIndex = process.argv[2].indexOf("/");
      let host = process.argv[2].slice(0, slashIndex);
      let path = process.argv[2].slice(slashIndex);
      client.write("GET " + path + " HTTP/1.1\nhost: " + host);
    }
  });
  process.stdin.pipe(client);
});
