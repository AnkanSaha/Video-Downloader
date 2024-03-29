/* eslint-disable no-undef */
require('dotenv').config(); // Environment Variables

const PORT =    Number(process.env.PORT) || 5500; // Default Port No For App Start

// Allowed Origins
const CORS = {
    AllowedOrigins: String(process.env.CORSALLOWEDURL)
}; // CORS Allowed Origins

// RapidAPI Details
const RapidAPI = {
    RapidAPIKey: String(process.env.RAPIDAPIKEY),
    YouTubeMusic_Link: String(process.env.YTMUSICURL),
    YouTubeMusic_HOST: String(process.env.YTMUSICURL.split("https://").join("").split('/dl').join('')),
    YoutubeVideo_Link: String(process.env.YTVIDEOURL),
    YoutubeVideo_HOST: String(process.env.YTVIDEOURL.split("https://").join("").split('/dl').join('')),
}

// Module Export
module.exports = {
    CORS : CORS,
    RapidAPIDetails: RapidAPI,
    PORT: PORT
}
