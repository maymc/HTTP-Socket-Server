const net = require("net");
const port = 8080;
const { error404 } = require("./404.js");
const { styles } = require("./css/styles.js");
const { helium } = require("./helium.js");
const { hydrogen } = require("./hydrogen.js");
const { index } = require("./index.js");

const server = net.createServer(socket => {

  socket.on("data", data => {
    let msgFromClient = data.toString().split('\n');
    console.log("\nmsgFromClient:\n", msgFromClient);

    //Get the request line and URI
    let reqLine = msgFromClient[0].split(" ");
    console.log("Request Line: ", reqLine);

    let uri = reqLine[1];
    console.log("URI:", uri);

    let status = "HTTP/1.1 200 OK";
    let date = new Date();
    let serverName = "DevLeagueServer";

    if (uri === "/css/styles.css") {
      socket.write(`${status}\nDate: ${date}\nServer: ${serverName}\nContent-Type: text/css\n\n${styles}`);
      socket.end();
    }
    else if (uri === "/helium") {
      socket.write(`${status}\nDate: ${date}\nServer: ${serverName}\nContent-Type: *\n\n${helium}`);
      socket.end();
    }
    else if (uri === "/hydrogen") {
      socket.write(`${status}\nDate: ${date}\nServer: ${serverName}\nContent-Type: *\n\n${hydrogen}`);
      socket.end();
    }
    else if (uri === "/" || uri === "/index") {
      socket.write(`${status}\nDate: ${date}\nServer: ${serverName}\nContent-Type: *\n\n${index}`);
      socket.end();
    }
    else {
      console.log("Not Found");
      socket.write(`${status}\nDate: ${date}\nServer: ${serverName}\nContent-Type: *\n\n${error404}`);
      socket.end();
    }

  });
});

//Server listens on port 8080
server.listen(port, () => {
  console.log("Server listening on port 8080");
});









