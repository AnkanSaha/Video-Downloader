const express = require("express");
const app = express.Router();
const EntryPoint = require("./downloader");

// Importing Custom Modules
const YouTubeDownloadFeatures = require("./Custom_Modules/YouTube");

// Global variables
const DefPath = `${__dirname}/static/html/`;
// API EndPoints
app.post("/YouTubeMusic", (request, response) => {
  var Hostname = request.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
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
  if(EntryPoint.allowedOrigins.includes(Hostname)){
    var TempUserLink = request.body.link;
    (TempUserLink);
    YouTubeDownloadFeatures.YouTubeVideoDownload(TempUserLink, response, request);
  }
  else{
    response.status(405).send("You are not allowed to access this API.");
  }
});

// Getting User Dta
app.post("/UserDataSenders", (req, res) => {
  var Hostname = req.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
  var mongoServer = require("./Server/SendDataToServer");
  (req.body);
  var ClipBordText = req.body.ClipBoard_Text;
  mongoServer.SaveUserData(
    req.body.Platform,
    ClipBordText,
    req.body.Engine,
    req.body.OnlineStatus,
    req.body.Language,
    req.body.BrowserName,
    req.body.BrowserVersion,
    req,
    res
  );
  }
  else{
  response.status(405).send("You are not allowed to access this API.")
  }
});

app.post("/ContactMessage", (req, res) => {
  var Hostname = req.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
  var mongoServer = require("./Server/SendDataToServer");
  if (
    req.body.Message.UserMessage ==
    "Hello Sir, i am  . my email address is  . I have a query, my query is -  . Sir, Please contact with me . My Email Address is  ."
  ) {
    req.body.Status = "Your Fields are blank, Please Fill Your informations";
    res.json(req.body);
  } else {
    mongoServer.SaveUserRequest(
      req.body.Message.Date,
      req.body.Message.UserMessage,
      req,
      res
    );
  }
}
else{
  response.status(405).send("You are not allowed to access this API.");
}
});
module.exports = app;
