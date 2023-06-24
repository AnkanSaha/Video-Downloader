const { Router } = require("express");
const Routes = Router()
const GlobalDetails = require("../core/keys/keys"); // Importing Global Details

// File Send EndPoints
Routes.get("/", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    response.status(200).sendFile('home.html', {root: `static/html/General`});
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Home File

Routes.get("/About", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    response.status(200).sendFile('AboutUs.html', {root: `static/html/General`});
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For About File

Routes.get("/YoutubeMusicDownload", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    response.status(200).sendFile(`YouTubeMusic.html`, {root: `static/html/YouTube`});
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Youtube Music Download

Routes.get("/YoutubeVideoDownload", (request, response) => {
  var Hostname = request.headers.host;
  if(GlobalDetails.AllowedURLS.includes(Hostname)){
    response.status(200).sendFile(`YouTubeVideo.html`, {root: `static/html/YouTube`});
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Youtube Video Download


module.exports = Routes;
