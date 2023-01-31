const express = require("express");
const app = express.Router();
const EntryPoint = require("./downloader");
// Global variables
const DefPath = `${__dirname}/static/html/`;

// File Send EndPoints
app.get("/", (request, response) => {
  var Hostname = request.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
    response.status(200).sendFile(`${DefPath}General/home.html`);
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Home File

app.get("/YoutubeMusicDownload", (request, response) => {
  var Hostname = request.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
    response.status(200).sendFile(`${DefPath}YouTube/YouTubeMusic.html`);
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Youtube Music Download

app.get("/YoutubeVideoDownload", (request, response) => {
  var Hostname = request.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
    response.status(200).sendFile(`${DefPath}YouTube/YouTubeVideo.html`);
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Youtube Video Download

app.get("/InstagramVideoDownload", (request, response) => {
  var Hostname = request.headers.host;
  if(EntryPoint.allowedOrigins.includes(Hostname)){
    response.status(200).sendFile(`${DefPath}Instagram/InstagramVideo.html`);
  }
  else{
    response.status(405).send("You are not allowed to access this site.")
  }
}); // For Instagram Video Download

app.get("/FacebookVideoDownload", (request, response) => {
  response.status(200).sendFile(`${DefPath}Facebook/FacebookVideo.html`);
}); // For Facebook Video Download

app.get("/About", (request, response) => {
  response.status(200).sendFile(`${DefPath}General/aboutus.html`);
}); // For About Us

app.get("/ContactUs", (request, response) => {
  response.status(200).sendFile(`${DefPath}General/contact.html`);
}); // For Contact Us
module.exports = app;
