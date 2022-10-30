const submitbtn = document.getElementById('UserSubmit');
submitbtn.addEventListener('click', ()=>{
    var UserLink = document.getElementById('UserInputedLink').value
    if(UserLink !=''){
        document.getElementById('downloadLink').style.display = 'none'
        document.getElementById('ErrorMsg').style.display = 'none'
        document.getElementById('spinner').style.display = 'block'
    var FinalUserLinkData = {link:UserLink}
    console.log('Data Ready To Send')
    fetch('/fbvideodownload', {
        method:'post',
        body:JSON.stringify(FinalUserLinkData),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(json =>{
        console.log('Data Processing Completed')
        if(json.DownloadLink !='Wrong link or video not found / is private.'){
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('downloadButton').href = json.DownloadLink
        document.getElementById('downloadLink').style.display = 'block'
        document.getElementById('FinalErrorMsg').innerText = 'Download Button Ready For Download'
        document.getElementById('ErrorMsg').style.display = 'block'
        }
        else if(json.DownloadLink == 'Wrong link or video not found / is private.'){
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('FinalErrorMsg').innerText = json.DownloadLink
            document.getElementById('ErrorMsg').style.display = 'block'
        }
    })
}
else if(UserLink == ''){
    alert('Please Paste Any Facebook Video Link')
}
})