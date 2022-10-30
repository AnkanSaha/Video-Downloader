console.log('Javascript is enabled')
let D = new Date()
document.getElementById('sendbutton').addEventListener('click', ()=>{
    console.log('Sending in progress');
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Queries = document.getElementById('queries').value
    var Date = D
    var Complete_Message = `Hello Sir, i am ${Name} . my email address is ${Email} . I have a query, my query is - ${Queries} . Sir, Please contact with me . My Email Address is ${Email} .`
    console.log('Data Produced for sending')
    var Final_Message = {
        Message: {
            Date:Date,
            UserMessage : Complete_Message
        }
    }
    var parameters = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(Final_Message)
    }
    console.log('Data Ready for action')
    fetch('/ContactMessage', parameters).then(response=>{
        response.json().then(data=>{
            console.log('Data Send To Server and Saved To Server')
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('queries').value = ''
            alert(data.Status)
        })
    })
})