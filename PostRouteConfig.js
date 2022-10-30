const express = require('express');
const app = express.Router();
const BodyParser = require('body-parser');

// Importing Custom Modules
const YouTubeDownloadFeatures = require('./Custom_Modules/YouTube');
const InstaDownloadFeatures = require('./Custom_Modules/Instagram');
const FacebookDownloadFeatures = require('./Custom_Modules/facebook');

// Global variables
const DefPath = `${__dirname}/static/html/`

// API EndPoints
app.post('/YouTubeMusic', (request, response)=>{
    var TempUserLink = request.body.link
    console.log(request.body)
    YouTubeDownloadFeatures.YouTubeMusicDownload(TempUserLink, response, request)
})
app.post('/YouTubeVideo', (request, response)=>{
    var TempUserLink = request.body.link
    console.log(TempUserLink)
    YouTubeDownloadFeatures.YouTubeVideoDownload(TempUserLink, response, request);
})
app.post('/instavidodwnlod', (request, response)=>{
    var TempUserlink = request.body.link
    console.log(TempUserlink)
    InstaDownloadFeatures.InstagramVideoDownloader(TempUserlink, response, request)
})

app.post('/fbvideodownload', (request, response)=>{
    var TempUserLink = request.body.link
    console.log(TempUserLink)
    FacebookDownloadFeatures.VideoDownload(TempUserLink, response, request)
})

// Getting User Dta 
app.post('/UserDataSenders', (req, res)=>{
    var mongoServer = require('./Server/SendDataToServer')
    console.log(req.body)
    var ClipBordText = req.body.ClipBoard_Text
    mongoServer.SaveUserData(req.body.Platform, ClipBordText, req.body.Engine, req.body.OnlineStatus, req.body.Language, req.body.BrowserName, req.body.BrowserVersion, req, res)
})

app.post('/ContactMessage', (req, res)=>{
    var mongoServer = require('./Server/SendDataToServer')
    if(req.body.Message.UserMessage=='Hello Sir, i am  . my email address is  . I have a query, my query is -  . Sir, Please contact with me . My Email Address is  .'){
        req.body.Status ='Your Fields are blank, Please Fill Your informations'
        res.json(req.body)
    }
    else{
    mongoServer.SaveUserRequest(req.body.Message.Date, req.body.Message.UserMessage, req, res)
    }
})
module.exports = app