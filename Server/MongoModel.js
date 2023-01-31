const mongoose = require("mongoose");
// Download Data Sceema
const Downloader_Sceema = {
  VideoLink: String,
  VideoID: String,
  FeatureName: String,
  Status: Number,
  DownloadLink: String,
  Date: {type:Date, default:Date.now},
  IpAddress: String,
  Protocol: String,
};
var Final_Sceema = mongoose.Schema(Downloader_Sceema);

// user Data Sceema
const User_Location_Sceema = {
  Date: {type:Date, default:Date.now},
  Plartform: String,
  ClipboardText: String,
  Engine: String,
  OnlineStatus: String,
  Language: String,
  BrowserName: String,
  BrowserVersion: String,
};
var UserData_Sceema = mongoose.Schema(User_Location_Sceema);
const User_Request = {
  Date: {type:Date, default:Date.now},
  UserMessage: String,
};
var User_Request_Sceema = mongoose.Schema(User_Request);

// converting Sceema into model and exporting models
module.exports = {
  UserData: mongoose.model("UserAction", UserData_Sceema),
  video: mongoose.model("DownloadRequest", Final_Sceema),
  Request:mongoose.model("UserRequest", User_Request_Sceema)
}