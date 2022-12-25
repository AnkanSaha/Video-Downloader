const submitbtn = document.getElementById("UserSubmit");
submitbtn.addEventListener("click", () => {
  let UserLink = document.getElementById("UserInputedLink").value;
  if (UserLink != "") {
    document.getElementById("UserInputedLink").value = "";
    document.getElementById("downloadLink").style.display = "none";
    document.getElementById("ErrorMsg").style.display = "none";
    document.getElementById("spinner").style.display = "block";
    document.getElementById("UserSubmit").disabled = true;
    let FinalUserLinkData = { link: UserLink };
    ("Data Ready To Send");
    fetch("/fbvideodownload", {
      method: "post",
      body: JSON.stringify(FinalUserLinkData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        ("Data Processing Completed");
        if (
          json.DownloadLink != "Wrong link or video not found / is private."
        ) {
          document.getElementById("spinner").style.display = "none";
          document.getElementById("downloadButton").href = json.DownloadLink;
          document.getElementById("downloadLink").style.display = "block";
          document.getElementById("FinalErrorMsg").innerText =
            "Download Button Ready For Download";
          document.getElementById("ErrorMsg").style.display = "block";
          document.getElementById("UserInputedLink").value = "";
          document.getElementById("UserSubmit").disabled = false;
        } else if (
          json.DownloadLink == "Wrong link or video not found / is private."
        ) {
          document.getElementById("spinner").style.display = "none";
          document.getElementById("FinalErrorMsg").innerText =
            json.DownloadLink;
          document.getElementById("ErrorMsg").style.display = "block";
          document.getElementById("UserInputedLink").value = "";
          document.getElementById("UserSubmit").disabled = false;
        }
      });
  } else if (UserLink == "") {
    alert("Please Paste Any Facebook Video Link");
    document.getElementById("UserInputedLink").value = "";
    document.getElementById("UserSubmit").classList.remove("btn-primary");
    document.getElementById("UserSubmit").classList.add("btn-warning");
    document.getElementById("UserSubmit").innerText = "Link Field is Empty";
    document.getElementById("UserSubmit").disabled = true;
    document.getElementById("ErrorMsg").style.display = "none";
    document.getElementById("downloadLink").style.display = "none";
    setTimeout(() => {
      document.getElementById("UserSubmit").classList.remove("btn-warning");
      document.getElementById("UserSubmit").classList.add("btn-primary");
      document.getElementById("UserSubmit").innerText = "Check Video Availity";
      document.getElementById("UserSubmit").disabled = false;
    }, 5000);
  }
});
