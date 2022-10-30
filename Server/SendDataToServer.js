const { default: mongoose } = require('mongoose');
const backup = require('../backup/backup');
function SendDownloadInfo(Link, videoID, Feature, status, Downloadlink, IpAddress, Protocol){
    var mongoose = require('mongoose')
    var MongoModel = require('../Server/MongoModel');
    // connecting mongoDB
    mongoose.connect('mongodb://localhost:27017/Information').then(()=>{
        console.log('Server Database Connected Successfully')
            // Making Final Data 
            var Datas = {
                VideoLink:Link,
                VideoID:videoID,
                FeatureName:Feature,
                Status:status,
                DownloadLink:Downloadlink,
                Date: new Date(),
                IpAddress:IpAddress,
                Protocol:Protocol
            }
        var Final_Data = new MongoModel.video(Datas)
        // saving Data
        Final_Data.save().then(()=>{
            backup.downloadInfo(Datas)
            console.log('Data Saved Successfully')
            mongoose.connection.close().then(()=>{
                console.log('Successfully Disconnected From Server Database')
            }).catch((DisconnectionError)=>{
                console.log('Unable To Disconnect From Server Database')
                throw DisconnectionError
            })
        }).catch((SaveError)=>{
            console.log('Unable To save Data To Server')
            throw SaveError
        })

    }).catch((Connectionerr)=>{
        console.log('Unable to Connect with Server Database');
        throw Connectionerr
    })
}

// Saving User Data To Database 
function UserDataSend(Platform, ClipboardText, Engine, OnlineStatus, Language, BrowserName, BrowserVersion, request, response){
    var mongoose = require('mongoose');
    var MongoModel = require('../Server/MongoModel')
    var ConnectionUrl = 'mongodb://localhost:27017/Information'

    // Connecting Database 
    mongoose.connect(ConnectionUrl).then(()=>{
        console.log('database connected');
        // making Final Data 
        var datas ={
            Date:new Date(),
            Plartform:Platform,
            ClipboardText:ClipboardText,
            Engine:Engine,
            OnlineStatus:OnlineStatus,
            Language:Language,
            BrowserName:BrowserName,
            BrowserVersion:BrowserVersion
        } 
        console.log(datas)
       var Final_data = new MongoModel.UserData(datas)
    //    Saving Data 
    Final_data.save().then(()=>{
        backup.SaveUserData(datas)
        console.log('Data Saved To Database')
        //Getting All Data from Database
        MongoModel.UserData.find().then(all_data=>{
        console.log(all_data)
        request.body.Date = new Date()
        request.body.savedData = all_data
        request.body.Status ="Thank You for sending data"
        response.json(request.body)
        //Closing Connection with Database
        mongoose.connection.close().then(()=>{
            console.log('Connection End Successfully');
        }).catch(CloseConnectionError=>{
            console.error(CloseConnectionError)
        })
        }).catch(DataFetchError=>{
            console.log(DataFetchError)
        })
    }).catch(SaveError=>{
        console.error(SaveError)
    })
    }).catch(CreateConnectionerror=>{
        console.error(CreateConnectionerror)
    })
}
// contact us
function SaveUserRequest(Date, Messsage, request, response){
    var MongoModel = require('../Server/MongoModel')
    var Mongoose = require('mongoose')
    var Connection_URL = 'mongodb://localhost:27017/Information'
    mongoose.connect(Connection_URL).then(()=>{
        console.log('Database Connected')
        var Semi_Final_Request = {
            Date:Date,
            UserMessage:Messsage
        }
        var Final_requst = new MongoModel.Request(Semi_Final_Request)
        console.log('Data is Ready')
        Final_requst.save().then(()=>{
            backup.UserRequest(Semi_Final_Request)
            console.log('Data Saved Successfully')
            MongoModel.Request.find().then(Findedata =>{
                request.body.SavedData = Findedata
                request.body.Status = "Thank You, Your Message has Rechived To Admin's Server"
                response.json(request.body)
                mongoose.connection.close().then(()=>{
                    console.log('Successfully Disconnected With Database')
                }).catch(CloseConnectionError=>{
                    console.log(CloseConnectionError)
                })
            }).catch(FindError=>{
                console.log(FindError)
                request.body.Status = "501: Internal Server Error, Please Try Again"
                response.json(request.body)
            })
        }).catch(SaveError=>{
            console.log(SaveError)
            request.body.Status = "402: Unable To Save Request in Database, Please Try Again"
            response.json(request.body)
        })
    }).catch(Connectionerr=>{
        console.log(Connectionerr)
        request.body.Status = "485: Unable To Connect With Database, Please Try Again"
        response.json(request.body)
    })
}
module.exports.SendToServer = SendDownloadInfo
module.exports.SaveUserData = UserDataSend
module.exports.SaveUserRequest = SaveUserRequest