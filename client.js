// const http = require("http");

// const client = net.createConnection(8080, "0.0.0.0", () => {
//   client.write("User");
//   client.on("data", data => {
//     console.log(data.toString());
//   });
//   process.stdin.pipe(client);
// });

const http = require('http');
const options = {
  host: 'www.devleague.com/apply',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
  const ip = '0.0.0.0';
  const port = 8080;
  console.log(`Your IP address is ${ip} and your source port is ${port}.`);
  // consume response object
});