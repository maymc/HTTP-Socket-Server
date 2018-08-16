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



//Transmit 'standard' HTTP Headers to the client. (So this is the response to client's request). HTTP Response is the server replying to the client's original HTTP Request with a message and the requested resource.
//HTTP Response includes a response message which is made with : A status line and response headers



//create the server
//important: socket.on is when data comes in
//when data comes in from the browser, it'll have request line, request header, request body
//need to put an if statement to catch it and send data back
//need to parse it out /apply and isolate it. A request isn't static, not always slash. If it is a slash, put this in header, insert in index, etc
//then after you create the server, you listen
//need to end the request after each if statement

//need to be able to handle 2 requests
//uses same origin that the file comes from




//////////////////////////////////////////////
// const net = require("net");
// const { index, css } = require('./markup');

// const server = net.createServer(socket => {
//   console.log("new connection detected");

//   socket.on('data', data => {
//     console.log('From Client: ', data.toString());
//     const reqDataArr = data.toString().split('\n');
//     const reqLine = reqDataArr[0];
//     const reqUrl = reqLine.split(' ')[1];

//     if (reqUrl === '/') {
//       socket.write(`HTTP/1.1 200 OK\n\n${index}`);
//       socket.end();
//     }
//     else if (reqUrl === 'css/styles.css') {
//       socket.write(`HTTP/1.1 200 OK\n\n${css}`);
//       socket.end();
//     }
//   });
// });

// server.listen(6969, () => {
//   console.log('Server listening on 6969');
// })