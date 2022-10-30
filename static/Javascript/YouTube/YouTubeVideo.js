console.log('YouTube Video Downloader Client Side JavaScript has enabled');
const SubmissionBtn = document.getElementById('UserSubmit');
SubmissionBtn.addEventListener('click', ()=>{
    var UserLink = document.getElementById('UserInputedLink').value
    if(UserLink !=''){
        document.getElementById('downloadLink').style.display = 'none'
        document.getElementById('MusicTitle').style.display = 'none'
        document.getElementById('ErrorMsg').style.display = 'none'
        document.getElementById('spinner').style.display = 'block'
        document.getElementById('UserSubmit').disabled = true;
        document.getElementById('UserSubmit').innerText = 'Checking ...'
    var FinalReqData = {link:UserLink}
    console.log('Data Ready To Send To Server')
    fetch('/YouTubeVideo',{
        method:'POST',
        body:JSON.stringify(FinalReqData),
        headers:{
            'content-type':'application/json'
        }
    }).then(response=> response.json()).then(response=>{
        console.log(response)
        if(response.DownloadLink != 'Unknown error in server'){
            document.getElementById('UserSubmit').disabled = false;
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('downloadButton').href =response.DownloadLink
        document.getElementById('downloadLink').style.display = 'block'
        document.getElementById('MusicTitle').innerText = response.Name
        document.getElementById('MusicTitle').style.display = 'block'
        document.getElementById('ErrorMsg').style.display = 'block'
        document.getElementById('thumbnail').src = response.thumbnail
        document.getElementById('UserInputedLink').value = ''
        document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        }
        else if(response.DownloadLink == 'Unknown error in server'){
            document.getElementById('UserSubmit').disabled = false;
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('MusicTitle').innerText = response.DownloadLink
            document.getElementById('MusicTitle').style.display = 'block'
            document.getElementById('ErrorMsg').style.display = 'block'
            document.getElementById('UserInputedLink').value = ''
            document.getElementById('UserSubmit').innerText = 'Check Video Availity'
        }
    })
}
else if(UserLink ==''){
    document.getElementById('ErrorMsg').style.display = 'none'
    alert('Please Give any YouTube link To Get Video To Download');
    document.getElementById('downloadButton').style.display = 'none'
    document.getElementById('UserSubmit').classList.remove('btn-primary')
    document.getElementById('UserSubmit').classList.add('btn-warning')
    document.getElementById('UserSubmit').innerText = 'Link Field is Empty'
    document.getElementById('UserSubmit').disabled = true;
    setTimeout(() => {
        document.getElementById('UserSubmit').classList.remove('btn-warning')
        document.getElementById('UserSubmit').classList.add('btn-primary')
        document.getElementById('UserSubmit').disabled = false;
        document.getElementById('UserSubmit').innerText = 'Check Video Availity'
    }, 5000);
}
})