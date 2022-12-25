const { default: mongoose } = require("mongoose");
const Mongo_Config = require('../Server/Mongo_Config.js')
const backup = require("../backup/backup");
function SendDownloadInfo(
  Link,
  videoID,
  Feature,
  status,
  Downloadlink,
  IpAddress,
  Protocol
) {
  var mongoose = require("mongoose");
  var MongoModel = require("../Server/MongoModel");
  // connecting mongoDB
  mongoose
    .connect(Mongo_Config.url)
    .then(() => {
      ("Server Database Connected Successfully");
      // Making Final Data
      var Datas = {
        VideoLink: Link,
        VideoID: videoID,
        FeatureName: Feature,
        Status: status,
        DownloadLink: Downloadlink,
        Date: new Date(),
        IpAddress: IpAddress,
        Protocol: Protocol,
      };
      var Final_Data = new MongoModel.video(Datas);
      // saving Data
      Final_Data.save()
        .then(() => {
          backup.downloadInfo(Datas);
          ("Data Saved Successfully");
          mongoose.connection
            .close()
            .then(() => {
              ("Successfully Disconnected From Server Database");
            })
            .catch((DisconnectionError) => {
              ("Unable To Disconnect From Server Database");
              throw DisconnectionError;
            });
        })
        .catch((SaveError) => {
          ("Unable To save Data To Server");
          throw SaveError;
        });
    })
    .catch((Connectionerr) => {
      ("Unable to Connect with Server Database");
      throw Connectionerr;
    });
}

// Saving User Data To Database
function UserDataSend(
  Platform,
  ClipboardText,
  Engine,
  OnlineStatus,
  Language,
  BrowserName,
  BrowserVersion,
  request,
  response
) {
  var mongoose = require("mongoose");
  var MongoModel = require("../Server/MongoModel");
  var ConnectionUrl = Mongo_Config.url;

  // Connecting Database
  mongoose
    .connect(ConnectionUrl)
    .then(() => {
      ("database connected");
      // making Final Data
      var datas = {
        Date: new Date(),
        Plartform: Platform,
        ClipboardText: ClipboardText,
        Engine: Engine,
        OnlineStatus: OnlineStatus,
        Language: Language,
        BrowserName: BrowserName,
        BrowserVersion: BrowserVersion,
      };
      (datas);
      var Final_data = new MongoModel.UserData(datas);
      //    Saving Data
      Final_data.save()
        .then(() => {
          backup.SaveUserData(datas);
          ("Data Saved To Database");
          //Getting All Data from Database
          MongoModel.UserData.find()
            .then((all_data) => {
              (all_data);
              request.body.Date = new Date();
              request.body.savedData = all_data;
              request.body.Status = "Thank You for sending data";
              response.json(request.body);
              //Closing Connection with Database
              mongoose.connection
                .close()
                .then(() => {
                  ("Connection End Successfully");
                })
                .catch((CloseConnectionError) => {
                  console.error(CloseConnectionError);
                });
            })
            .catch((DataFetchError) => {
              (DataFetchError);
            });
        })
        .catch((SaveError) => {
          console.error(SaveError);
        });
    })
    .catch((CreateConnectionerror) => {
      console.error(CreateConnectionerror);
    });
}
// contact us
function SaveUserRequest(Date, Messsage, request, response) {
  var MongoModel = require("../Server/MongoModel");
  var Mongoose = require("mongoose");
  var Connection_URL = Mongo_Config.url;
  mongoose
    .connect(Connection_URL)
    .then(() => {
      ("Database Connected");
      var Semi_Final_Request = {
        Date: Date,
        UserMessage: Messsage,
      };
      var Final_requst = new MongoModel.Request(Semi_Final_Request);
      ("Data is Ready");
      Final_requst.save()
        .then(() => {
          backup.UserRequest(Semi_Final_Request);
          ("Data Saved Successfully");
          MongoModel.Request.find()
            .then((Findedata) => {
              request.body.SavedData = Findedata;
              request.body.Status =
                "Thank You, Your Message has Rechived To Admin's Server";
              response.json(request.body);
              mongoose.connection
                .close()
                .then(() => {
                  ("Successfully Disconnected With Database");
                })
                .catch((CloseConnectionError) => {
                  (CloseConnectionError);
                });
            })
            .catch((FindError) => {
              (FindError);
              request.body.Status =
                "501: Internal Server Error, Please Try Again";
              response.json(request.body);
            });
        })
        .catch((SaveError) => {
          (SaveError);
          request.body.Status =
            "402: Unable To Save Request in Database, Please Try Again";
          response.json(request.body);
        });
    })
    .catch((Connectionerr) => {
      (Connectionerr);
      request.body.Status =
        "485: Unable To Connect With Database, Please Try Again";
      response.json(request.body);
    });
}
module.exports.SendToServer = SendDownloadInfo;
module.exports.SaveUserData = UserDataSend;
module.exports.SaveUserRequest = SaveUserRequest;
