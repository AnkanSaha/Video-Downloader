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
    document.getElementById('UserSubmit').disabled = true;
    document.getElementById('UserSubmit').innerText = 'Checking ...'
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
        document.getElementById('UserSubmit').disabled = false;
        document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        document.getElementById('UserInputedLink').value =''
        }
        else if(json.DownloadLink == 'Unable To Get Video from server'){
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('FinalErrorMsg').innerText = json.DownloadLink
            document.getElementById('ErrorMsg').style.display = 'block'
            document.getElementById('UserInputedLink').value =''
            document.getElementById('UserSubmit').disabled = false;
            document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        }
    })
}
else if(UserLink == ''){
    alert('Please Paste Any Instagram Video Link')
    document.getElementById('UserInputedLink').value =''
    document.getElementById('UserSubmit').classList.remove('btn-primary');
    document.getElementById('UserSubmit').classList.add('btn-warning');
    document.getElementById('UserSubmit').innerText = 'Link Field is Empty'
    document.getElementById('UserSubmit').disabled = true;
    setTimeout(()=>{
        document.getElementById('UserSubmit').classList.remove('btn-warning');
        document.getElementById('UserSubmit').classList.add('btn-primary');
        document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        document.getElementById('UserSubmit').disabled = false;
    }, 5000)
}
})