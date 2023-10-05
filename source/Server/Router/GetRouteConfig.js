const { Router } = require("express");
const Routes = Router()
const RateLimit= require("express-rate-limit");

// Implementing Rate Limiter
const limiter = new RateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 10, // 10 requests,
    message: "Too many requests, please try again later.",
    headers: true,
    standardHeaders: true,
    legacyHeaders: false
});

Routes.use(limiter);

// File Send EndPoints
Routes.get("/", (request, response) => {
    response.status(200).sendFile('home.html', {root: `source/static/html/General`});
}); // For Home File

Routes.get("/About", (request, response) => {
    response.status(200).sendFile('AboutUs.html', {root: `source/static/html/General`});
}); // For About File

Routes.get("/YoutubeMusicDownload", (request, response) => {
    response.status(200).sendFile(`YouTubeMusic.html`, {root: `source/static/html/YouTube`});
}); // For Youtube Music Download

Routes.get("/YoutubeVideoDownload", (request, response) => {
    response.status(200).sendFile(`YouTubeVideo.html`, {root: `source/static/html/YouTube`});
}); // For Youtube Video Download


module.exports = Routes;
