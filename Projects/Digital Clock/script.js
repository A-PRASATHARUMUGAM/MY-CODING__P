                                    // Digital Clock Project 
const Hours=document.querySelector(".hours");
const Minutes=document.querySelector(".minutes");
const Seconds=document.querySelector(".seconds");
const AmPm=document.querySelector(".ampm");



function displayTime(){
    const dataTime=new Date()
    let hr =dataTime.getHours(); 
    let min =dataTime.getMinutes();
    let sec =dataTime.getSeconds();
    if(hr>12){
        hr = hr - 12;
        AmPm.innerHTML='PM'
    }
    Hours.innerHTML = padZero(hr);
    Minutes.innerHTML = padZero(min);
    Seconds.innerHTML = padZero(sec);
}

function padZero(num){
    return num>10?num:"0"+num; 
}
setInterval(displayTime,500);