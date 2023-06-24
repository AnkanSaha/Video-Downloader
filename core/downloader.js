const Cluster = require('cluster');
let allCores = require('os').cpus().length;

if (Cluster.isMaster) {
  while (allCores > 0){
    Cluster.fork();
    allCores--;
  }
  Cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    Cluster.fork();
  });
}
else{
const GlobalData = require('./keys/keys'); // Importing Global Data
const express = require("express"); // Importing Express JS
const Server = express(); //Initializing Express JS
const port = process.env.PORT || 5500; // Default Port No For App Start
const cors = require("cors"); // Importing CORS for Browser Error
const Post_Routing = require("../Router/PostRouteConfig");
const Get_Routing = require("../Router/GetRouteConfig");

// App configurations
Server.use("/static", express.static("static")); // static file configuration
Server.use(express.json()); // for get data from custom post request
Server.use(express.urlencoded({ extended: true })); // for get data from form submission request
Server.use(cors({ origin:GlobalData.CORS.AllowedOrigins })); // Solve The CORS Error in Browser
Server.use(Post_Routing);
Server.use(Get_Routing);

//server listening
Server.listen(port, () => {
  console.log(`Server Started on Port No ${port}`);
});
}
