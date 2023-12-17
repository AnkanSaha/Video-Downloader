const express = require("express");
const app = express.Router();
const RateLimit = require("express-rate-limit");

// Importing Custom Modules
const YouTubeDownloadFeatures = require("../Download/YouTube");

// Implementing Rate Limiter
const limiter = new RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // 10 requests,
    message: "Too many requests, please try again later.",
    headers: true,
    standardHeaders: true,
    legacyHeaders: false
});

app.use(limiter);
// API EndPoints
app.post("/YouTubeMusic", (request, response) => {
    var TempUserLink = request.body.link;
    YouTubeDownloadFeatures.YouTubeMusicDownload(TempUserLink, response, request);
});

app.post("/YouTubeVideo", (request, response) => {
    var TempUserLink = request.body.link;
    (TempUserLink);
    YouTubeDownloadFeatures.YouTubeVideoDownload(TempUserLink, response, request);
});
module.exports = app;
