const express = require("express"); // Importing Express JS
const app = express(); //Initelizing Express JS
const BodyParser = require("body-parser"); // Importing Body-Parser Module
const port = 5500; // Default Port No For App Start
const cors = require("cors"); // Importing CORS for Browser Error
const Postrouting = require("./PostRouteConfig");
const GetRouting = require("./GetRouteConfig");
const helmet = require('helmet');

// App configurations
app.use("/static", express.static("static")); // static file configuration
app.use(BodyParser.json()); // for get data from custom post request
app.use(BodyParser.urlencoded({ extended: true })); // for get data from form submission request
app.use(cors({ origin: "*" })); // Solve The CORS Error in Browser
app.use(Postrouting);
app.use(GetRouting);
app.use(helmet())

//server listening
app.listen(port, () => {
  console.log(`Server Started on Port No ${port}`);
});
