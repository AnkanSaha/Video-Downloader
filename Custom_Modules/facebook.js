const FacebookVideoDownloader = (Link, responses, requests) => {
  var Downloader = require("social-downloader-cherry");
  var SendDataToServer = require("../Server/SendDataToServer");
  Downloader.Facebook.getVideo(Link).then((DownloadableLink) => {
    (DownloadableLink);
    if (
      DownloadableLink.data.errorMessage !=
      "Wrong link or video not found / is private."
    ) {
      var Final_data = {
        DownloadLink: DownloadableLink.data.body.videoHD,
        ststus: 200,
        Format: "MP4",
      };
      SendDataToServer.SendToServer(
        Link,
        "No Video ID",
        "Facebook Video Downloader",
        Final_data.ststus,
        DownloadableLink.data.body.videoHD,
        requests.ip,
        requests.protocol
      );
      responses.status(Final_data.ststus).json(Final_data);
    } else if (
      DownloadableLink.data.errorMessage ==
      "Wrong link or video not found / is private."
    ) {
      var Error_data = {
        DownloadLink: DownloadableLink.data.errorMessage,
        ErrorDescription: DownloadableLink.data.errorDescription,
        ErrorCode: DownloadableLink.data.errorCode,
      };
      responses.status(Error_data.ErrorCode).json(Error_data);
    }
  });
};

module.exports.VideoDownload = FacebookVideoDownloader;
