const downloadInfoBackup = "backup/downloads.json";
const UserDataBackup = "backup/Userdata.json";
const UserRequestBackup = "backup/SaveUserRequest.json";

function SaveDownloadjson(Downloaddata) {
  var name = Downloaddata.VideoLink;
  var fs = require("fs");
  fs.readFile(downloadInfoBackup, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log(data);
      var json = JSON.parse(data);
      console.log(json);
      json[`${name}`] = Downloaddata;
      console.log(json);
      fs.writeFile(downloadInfoBackup, JSON.stringify(json), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Data Saved locally");
        }
      });
    }
  });
}

function SaveUserDataSend(UserData) {
  var name = UserData.Date;
  var fs = require("fs");
  fs.readFile(UserDataBackup, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log(data);
      var json = JSON.parse(data);
      json[`${name}`] = UserData;
      console.log(json);
      fs.writeFile(UserDataBackup, JSON.stringify(json), "utf-8", (err) => {
        if (err) {
          console.log("Data not saved locally");
        } else {
          console.log("Data Saved Locally");
        }
      });
    }
  });
}
function SaveUserRequest(UserRequest) {
  var name = UserRequest.Date;
  var fs = require("fs");
  fs.readFile(UserRequestBackup, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      console.log(data);
      var json = JSON.parse(data);
      json[`${name}`] = UserRequest;
      console.log(json);
      fs.writeFile(UserRequestBackup, JSON.stringify(json), "utf-8", (err) => {
        if (err) {
          console.log("request Not Saved Locally");
        } else {
          console.log("request Saved Locally");
        }
      });
    }
  });
}
// exporting function
module.exports = {
  downloadInfo: SaveDownloadjson,
  SaveUserData: SaveUserDataSend,
  UserRequest: SaveUserRequest,
};
