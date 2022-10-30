console.log('YouTube Music Downloader Client Side JavaScript has enabled')
const SubmitButton = document.getElementById('UserSubmit');
SubmitButton.addEventListener('click', ()=>{
    var UserLink = document.getElementById('UserInputedLink').value
    if(UserLink !=''){
        document.getElementById('downloadLink').style.display = 'none'
        document.getElementById('ErrorMsg').style.display = 'none'
        document.getElementById('spinner').style.display = 'block'
    var FinalUserLinkData = {link:UserLink}
    console.log('Data Ready To Send To Server')
    fetch('/instavidodwnlod', {
        method:'post',
        body:JSON.stringify(FinalUserLinkData),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(json =>{
        console.log('Data Processing Completed')
        if(json.DownloadLink !='Unable To Get Video from server'){
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('downloadButton').href = json.DownloadLink
        document.getElementById('downloadLink').style.display = 'block'
        document.getElementById('FinalErrorMsg').innerText = 'Download Button Ready For Download'
        document.getElementById('ErrorMsg').style.display = 'block'
        }
        else if(json.DownloadLink == 'Unable To Get Video from server'){
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('FinalErrorMsg').innerText = json.DownloadLink
            document.getElementById('ErrorMsg').style.display = 'block'
        }
    })
}
else if(UserLink == ''){
    alert('Please Paste Any Instagram Video Link')
}
})