const express = require("express");
const app = express.Router();
const GlobalDetails = require("../core/keys/keys"); // Importing Global Details

// Importing Custom Modules
const YouTubeDownloadFeatures = require("../Download/YouTube");

// Global variables
// API EndPoints
app.post("/YouTubeMusic", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    var TempUserLink = request.body.link;
    (request.body);
    YouTubeDownloadFeatures.YouTubeMusicDownload(TempUserLink, response, request);
  }
  else{
    response.status(405).send("You are not allowed to access this API.");
  }
});

app.post("/YouTubeVideo", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    var TempUserLink = request.body.link;
    (TempUserLink);
    YouTubeDownloadFeatures.YouTubeVideoDownload(TempUserLink, response, request);
  }
  else{
    response.status(405).send("You are not allowed to access this API.");
  }
});
module.exports = app;
