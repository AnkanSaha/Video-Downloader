console.log('YouTube Music Downloader Client Side JavaScript has enabled')
const SubmitButton = document.getElementById('UserSubmit');
SubmitButton.addEventListener('click', ()=>{
    var UserLink = document.getElementById('UserInputedLink').value

    if(UserLink !=''){
        document.getElementById('downloadLink').style.display = 'none'
        document.getElementById('ErrorMsg').style.display = 'none'
        document.getElementById('MusicTitle').style.display = 'none'
        document.getElementById('spinner').style.display = 'block'
        document.getElementById('UserSubmit').innerText = 'Checking ...'
    var FinalUserLinkData = {link:UserLink}
    console.log('Data Ready To Send To Server')
    fetch('/YouTubeMusic', {
        method:'post',
        body:JSON.stringify(FinalUserLinkData),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json()).then(json =>{
        document.getElementById('UserSubmit').innerText = 'Link Setting Up ...'
        console.log('Data Processing Completed')
        if(json.DownloadLink !='Unknown error in server'){
        document.getElementById('UserInputedLink').value = ''
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('downloadButton').href = json.DownloadLink
        document.getElementById('downloadLink').style.display = 'block'
        document.getElementById('FinalErrorMsg').innerText = 'Download Button Ready For Download'
        document.getElementById('MusicTitle').innerText = json.title
        document.getElementById('MusicTitle').style.display = 'block'
        document.getElementById('ErrorMsg').style.display = 'block'
        document.getElementById('MusicProtocol').innerText = `Protocol : ${json.Protocol}`
        document.getElementById('MusicProtocol').style.display = 'block'
        document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        }
        else if(json.DownloadLink == 'Unknown error in server'){
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('FinalErrorMsg').innerText = json.DownloadLink
            document.getElementById('ErrorMsg').style.display = 'block'
            document.getElementById('UserInputedLink').value = ''
        }
    })
}
else if(UserLink == ''){
    document.getElementById('ErrorMsg').style.display = 'none'
    document.getElementById('downloadButton').style.display = 'none'
    alert('Please Paste Any YouTube Video Link For Get YouTube Music')
    document.getElementById('UserSubmit').classList.remove('btn-primary')
    document.getElementById('UserSubmit').classList.add('btn-warning')
    setTimeout(() => {
        document.getElementById('UserSubmit').classList.remove('btn-warning')
        document.getElementById('UserSubmit').classList.add('btn-primary')
    }, 5000);
}
})