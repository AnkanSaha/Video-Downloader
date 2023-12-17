const Cluster = require('cluster');
const {green, red} = require('outers'); // Outers is a module that is installed in the project
let allCores = require('os').cpus().length;

if (Cluster.isMaster) {
  while (allCores > 0){
    Cluster.fork();
    allCores--;
  }
  Cluster.on('exit', (worker) => {
    red(`Worker ${worker.process.pid} died`);
    Cluster.fork();
  });
}
else{
const GlobalData = require('./keys/keys'); // Importing Global Data
const express = require("express"); // Importing Express JS
const Server = express(); //Initializing Express JS
const cors = require("cors"); // Importing CORS for Browser Error
const Post_Routing = require("../Router/PostRouteConfig");
const Get_Routing = require("../Router/GetRouteConfig");

// App configurations
Server.set("trust proxy", () => true) // for getting ip address of client
Server.use("/static", express.static("./source/static")); // static file configuration
Server.use(express.json()); // for get data from custom post request
Server.use(express.urlencoded({ extended: true })); // for get data from form submission request
Server.use(cors({ origin:GlobalData.CORS.AllowedOrigins })); // Solve The CORS Error in Browser
Server.use(Post_Routing); // Linking Post Routing
Server.use(Get_Routing); // Linking Get Routing

//server listening
Server.listen(GlobalData.PORT, () => {
  green(`Server Started on Port No ${GlobalData.PORT}`);
});
}
