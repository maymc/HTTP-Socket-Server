// //One piece of the process of the API
// console.log(process.argv);

const net = require('net');
const port = 8080;

//Object destructuring, an object taking from page. A tool fomr ES6. Most common way to pass objects. So { homepage } is an object
const { home } = require('./homepage.js');
const { helium } = require("../helium.js");
const { styles } = require("../css/styles.js");

const server = net.createServer(socket => {

  socket.on("data", data => {
    //Set encoding UTF-8 is basically the same thing as data.toString()
    console.log(data.toString());
    let clientRequest = data.toString().split('\n');
    console.log(clientRequest);

    //Get the request line and URI
    let reqLine = clientRequest[0].split(" "); //["GET", "/"];
    console.log("Request Line:", reqLine);

    let uri = reqLine[1]; // " / "
    console.log("URI:", uri);

    let date = new Date();
    const status = "HTTP/1.1 200 OK";
    const serverName = "devLeagueServer";

    //Conditional statements depending on what URI is
    if (uri === '/home') {
      let msg = `${status}\nDate: ${date} \nServer: ${serverName}\nContent-Type: *\n\n ${home}`;
      console.log(msg);
      socket.write(msg);
      socket.end();
    }
    else if (uri === '/helium') {
      let msg = `${status}\nDate: ${date} \nServer: ${serverName}\nContent-Type: *\n\n ${helium}`;
      console.log(msg);
      socket.write(msg);
      socket.end();
    }
    else if (uri === '/css/styles.css') {
      let msg = `${status}\nDate: ${date} \nServer: ${serverName}\nContent-Type: text/css\n\n ${styles}`;
      console.log(msg);
      socket.write(msg);
      socket.end();
    }
    else {
      console.log("uri here: ", uri);
      console.log("Not found");
    }



  });
});

server.listen(port, () => {
  console.log("Server listening on port 8080");
})

//how do I get headers?
// ---> need to send it from the client
//Need to run server.js and then localhost:8080 on browser



//Notes from Raymond
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