const net = require("net");

console.log(process.argv[2]);
let slashIndex = process.argv[2].indexOf("/");
let host = process.argv[2].slice(0, slashIndex);
let path = process.argv[2].slice(slashIndex);
const client = net.createConnection(8080, "0.0.0.0", () => {
  // client.write("GET /index.html HTTP/1.1\nhost: www.devleague.com");
  //this is inputted host and path from user

  //LOOKS LIKE THIS ON SERVER
  //GET /index.html HTTP/1.1
  //host: localhost:8080

  //DO THIS ON CLIENT:
  //Use process.argv to get the host/path you entered in in terminal (ie: node client.js localhost:8080/blahblahblah)
  //1. Split the string into host and path and store it in variables
  //2. concat the host and path
  //3. then client write it

  // client.write("GET /index.html HTTP/1.1\nhost: www.devleague.com");
  client.write("GET " + path + " HTTP/1.1\nhost: " + host);
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});
