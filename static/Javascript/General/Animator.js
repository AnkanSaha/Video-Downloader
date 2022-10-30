function colorchange(id){
    var date = new Date();
    console.log(date)
    var Day = date.getDay()
    console.log(Day)

    if(Day == 0){
        document.getElementById(id).classList.add('bg-primary')
        console.log('primary')
    }
    else if(Day == 1){
        document.getElementById(id).classList.add('bg-success')
        console.log('success')
    }
    else if(Day == 2){
        document.getElementById(id).classList.add('bg-secondary')
        console.log('secondary')
    }
    else if(Day == 3){
        document.getElementById(id).classList.add('bg-warning')
        console.log('warning')
    }
    else if(Day == 4){
        document.getElementById(id).classList.add('bg-info')
        console.log('info')
    }
    else if(Day == 5){
        document.getElementById(id).classList.add('bg-danger')
        console.log('danger')
    }
    else if(Data == 6){
        document.getElementById(id).classList.add('bg-black')
        console.log('black')
    }
    else{
        document.getElementById(id).classList.add('bg-success')
        console.log('By Default Color')  
    }
}