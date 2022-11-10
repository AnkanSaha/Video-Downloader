const express = require("express");
const app = express.Router();
const BodyParser = require("body-parser");
// Global variables
const DefPath = `${__dirname}/static/html/`;

// File Send EndPoints
app.get("/", (request, response) => {
  response.status(200).sendFile(`${DefPath}General/home.html`);
}); // For Home File
app.get("/YoutubeMusicDownload", (request, response) => {
  response.status(200).sendFile(`${DefPath}YouTube/YouTubeMusic.html`);
});
app.get("/YoutubeVideoDownload", (request, response) => {
  response.status(200).sendFile(`${DefPath}YouTube/YouTubeVideo.html`);
});
app.get("/InstagramVideoDownload", (request, response) => {
  response.status(200).sendFile(`${DefPath}Instagram/InstagramVideo.html`);
});
app.get("/FacebookVideoDownload", (request, response) => {
  response.status(200).sendFile(`${DefPath}Facebook/FacebookVideo.html`);
});
app.get("/About", (request, response) => {
  response.status(200).sendFile(`${DefPath}General/aboutus.html`);
});
app.get("/ContactUs", (request, response) => {
  response.status(200).sendFile(`${DefPath}General/contact.html`);
});
module.exports = app;
