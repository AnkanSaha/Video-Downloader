const downloadInfoBackup = "backup/downloads.json";
const UserDataBackup = "backup/Userdata.json";
const UserRequestBackup = "backup/SaveUserRequest.json";
const { green, red } = require("outers"); // Outers is a module that is installed in the project

function SaveDownloadjson(Downloaddata) {
  var name = Downloaddata.VideoLink;
  var fs = require("fs");
  fs.readFile(downloadInfoBackup, "utf-8", (err, data) => {
    if (err) {
      (err);
    } else if (data) {
      (data);
      var json = JSON.parse(data);
      (json);
      json[`${name}`] = Downloaddata;
      (json);
      fs.writeFile(downloadInfoBackup, JSON.stringify(json), (err) => {
        if (err) {
          (err);
        } else {
          green("Data Saved locally");
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
      (err);
    } else if (data) {
      (data);
      var json = JSON.parse(data);
      json[`${name}`] = UserData;
      (json);
      fs.writeFile(UserDataBackup, JSON.stringify(json), "utf-8", (err) => {
        if (err) {
          red("Data not saved locally");
        } else {
          green("Data Saved Locally");
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
      (err);
    } else if (data) {
      (data);
      var json = JSON.parse(data);
      json[`${name}`] = UserRequest;
      (json);
      fs.writeFile(UserRequestBackup, JSON.stringify(json), "utf-8", (err) => {
        if (err) {
          ("request Not Saved Locally");
        } else {
          ("request Saved Locally");
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
