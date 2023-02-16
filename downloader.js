const env = require("dotenv").config();
const express = require("express"); // Importing Express JS
const app = express(); //Initelizing Express JS
const BodyParser = require("body-parser"); // Importing Body-Parser Module
const port = process.env.PORT || 5500; // Default Port No For App Start
const cors = require("cors"); // Importing CORS for Browser Error
const Postrouting = require("./PostRouteConfig");
const GetRouting = require("./GetRouteConfig");

// Allowed URLS
const allowedOrigins = ["localhost:5500", 'theankan.live' ,'www.theankan.live', '10downloader.me', 'www.10downloader.me', 'watchlur.online', 'www.watchlur.online', 'y2meta.site', 'www.y2meta.site', 'ytmp3.software', 'www.ytmp3.software', 'www.vidbuddy.live', 'vidbuddy.live', 'downloader.up.railway.app', 'www.downloader.up.railway.app'];

// App configurations
app.use("/static", express.static("static")); // static file configuration
app.use(BodyParser.json()); // for get data from custom post request
app.use(BodyParser.urlencoded({ extended: true })); // for get data from form submission request
app.use(cors({ origin: "*" })); // Solve The CORS Error in Browser
app.use(Postrouting);
app.use(GetRouting);

//server listening
app.listen(port, () => {
  console.log(`Server Started on Port No ${port}`);
});

module.exports.allowedOrigins = allowedOrigins;