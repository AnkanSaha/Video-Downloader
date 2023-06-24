require('dotenv').config(); // Environment Variables

// Allowed URLS
const AllowedURLS = ['video.theankan.live', 'theankan.live', 'localhost:5500'];

const PORT =    Number(process.env.PORT) || 5500; // Default Port No For App Start

// Allowed Origins
const CORS = {
    AllowedOrigins: String(process.env.CORSALLOWEDURL)
}; // CORS Allowed Origins

const RapidAPI = {
    RapidAPIKey: String(process.env.RAPIDAPIKEY),
    YouTubeMusic_Link: String(process.env.YTMUSICURL),
    YouTubeMusic_HOST: String(process.env.YTMUSICHOST),
    YoutubeVideo_Link: String(process.env.YTVIDEOURL),
    YoutubeVideo_HOST: String(process.env.YTVIDEOHOST),
}

// Module Export
module.exports = {
    AllowedURLS: AllowedURLS,
    CORS : CORS,
    RapidAPIDetails: RapidAPI,
    PORT: PORT
}
