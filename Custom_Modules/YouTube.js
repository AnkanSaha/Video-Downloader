const YouTubeDownloaderMusic = (Link, responses, requests) => {
  var SendDataToServer = require("../Server/SendDataToServer");
  var VideoIDer = require("get-youtube-id");
  var Video_ID = VideoIDer(Link);
  (Video_ID);
  // requesting server to get download link
  const axios = require("axios");
  const options = {
    method: "GET",
    url: "https://youtube-mp3-download1.p.rapidapi.com/dl",
    params: { id: `${Video_ID}` },
    headers: {
      "X-RapidAPI-Key": "aefb3fa51fmsha59d973a9f83424p149b2bjsn70bd6dd35de3",
      "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
    },
  };
  axios.request(options).then((response) => {
    (response);
    if (response.data.msg == "success") {
      var FinalResult = {
        DownloadLink: response.data.link,
        Status: 200,
        Format: "MP3",
        Size: "as per network",
        Protocol: "Blockchain",
        title: response.data.title,
      };
      SendDataToServer.SendToServer(
        Link,
        Video_ID,
        "YouTube Music",
        FinalResult.Status,
        FinalResult.DownloadLink,
        requests.ip,
        requests.protocol
      );
      responses.status(FinalResult.Status).json(FinalResult);
    } else if (response.data.msg == "fail") {
      var ErrorResult = {
        DownloadLink: "Unknown error in server",
        status: 404,
        Protocol: "Blockchain",
      };
      responses.status(ErrorResult.status).json(ErrorResult);
    } else if (response.data.msg == "in progress") {
      var ErrorResult = {
        DownloadLink: "Video is too long to download",
        status: 404,
        Protocol: "Blockchain",
      };
      responses.status(ErrorResult.status).json(ErrorResult);
    } else {
      var ErrorResult = {
        DownloadLink: "Unknown error in server",
        status: 404,
        Protocol: "Blockchain",
      };
      responses.status(ErrorResult.status).json(ErrorResult);
    }
  });
};

const YouTubeDownloaderVideo = (Link, responses, requests) => {
  var getvideoIDer = require("get-youtube-id");
  var requester = require("axios");
  var SendDataToServer = require("../Server/SendDataToServer");
  var VideoID = getvideoIDer(Link);
  (VideoID);
  const options = {
    method: "GET",
    url: "https://youtube-video-download-info.p.rapidapi.com/dl",
    params: { id: `${VideoID}` },
    headers: {
      "X-RapidAPI-Key": "aefb3fa51fmsha59d973a9f83424p149b2bjsn70bd6dd35de3",
      "X-RapidAPI-Host": "youtube-video-download-info.p.rapidapi.com",
    },
  };
  //   requesting
  requester
    .request(options)
    .then(function (response) {
      (response.data);
      if (response.data.status == "ok") {
        let responsedddata = response.data;
        var FinalData = {
          DownloadLink: responsedddata.link["22"][0],
          status: 200,
          Quality: responsedddata.link["247"][3],
          Name: responsedddata.title,
          ContentLength: responsedddata.link["247"].length,
          Audio_Available: responsedddata.link["247"][2],
          File_Extension: responsedddata.link["247"][4],
          Protocol: "Blockchain",
          thumbnail: responsedddata.thumb,
        };
        SendDataToServer.SendToServer(
          Link,
          "No Video ID",
          "YouTube Video",
          FinalData.status,
          FinalData.DownloadLink,
          requests.ip,
          requests.protocol
        );
        responses.status(FinalData.status).json(FinalData);
      } else if (response.data.status != "ok") {
        var ErrorResult = {
          DownloadLink: "Unknown error in server",
          status: 404,
          Protocol: "Blockchain",
        };
        responses.status(ErrorResult.status).json(ErrorResult);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

// Module Export
module.exports.YouTubeMusicDownload = YouTubeDownloaderMusic;
module.exports.YouTubeVideoDownload = YouTubeDownloaderVideo;
