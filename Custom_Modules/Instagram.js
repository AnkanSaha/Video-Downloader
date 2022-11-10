function InstaVideoDownloader(Link, responses, requests) {
  var instaVideoDownload = require("social-downloader-cherry");
  var SendDataToServer = require("../Server/SendDataToServer");
  instaVideoDownload.Instagram.getAny(Link)
    .then((DownloadableLink) => {
      console.log(DownloadableLink);
      var Final_Data = {
        DownloadLink: DownloadableLink.data.body.link,
        status: 200,
        Format: "MP4",
        Protocol: "Blockchain",
      };
      SendDataToServer.SendToServer(
        Link,
        "No Video ID",
        "Instagram Video Downloader",
        Final_Data.status,
        Final_Data.DownloadLink,
        requests.ip,
        requests.protocol
      );
      responses.status(Final_Data.status).json(Final_Data);
    })
    .catch((Error) => {
      console.log(Error);
      var Error_Data = {
        DownloadLink: "Unable To Get Video from server",
        status: 500,
        Format: "MP4",
        Protocol: "Blockchain",
      };
      responses.status(Error_Data.status).json(Error_Data);
    });
}
module.exports.InstagramVideoDownloader = InstaVideoDownloader;
