
console.log('YouTube Video Downloader Client Side JavaScript has enabled');
const SubmissionBtn = document.getElementById('UserSubmit');
SubmissionBtn.addEventListener('click', ()=>{
    var UserLink = document.getElementById('UserInputedLink').value
    if(UserLink !=''){
        document.getElementById('downloadLink').style.display = 'none'
        document.getElementById('MusicTitle').style.display = 'none'
        document.getElementById('ErrorMsg').style.display = 'none'
        document.getElementById('spinner').style.display = 'block'
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
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('downloadButton').href =response.DownloadLink
        document.getElementById('downloadLink').style.display = 'block'
        document.getElementById('MusicTitle').innerText = response.Name
        document.getElementById('MusicTitle').style.display = 'block'
        document.getElementById('FinalErrorMsg').innerText = 'Download Button Ready For Download'
        document.getElementById('ErrorMsg').style.display = 'block'
        document.getElementById('thumbnail').src = response.thumbnail
        }
        else if(response.DownloadLink == 'Unknown error in server'){
            document.getElementById('spinner').style.display = 'none'
            document.getElementById('FinalErrorMsg').innerText = response.DownloadLink
            document.getElementById('ErrorMsg').style.display = 'block'
        }
    })
}
else if(UserLink ==''){
    alert('Please Give any YouTube link To Get Video To Download')
}
})