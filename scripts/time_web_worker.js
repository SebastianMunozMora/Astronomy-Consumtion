var d,hours, mins, secs;
function timedClock(){
    d = new Date();
    hours = clockFormat(d.getHours());
    mins = d.getMinutes();
    secs = d.getSeconds();
    time =  numberFormat(hours) + ":" + numberFormat(mins) + ":" + numberFormat(secs);
    setTimeout("timedClock()",500);
    postMessage(time);
}
timedClock();
function numberFormat(num){
    if(num < 10){
        num = "0" + num; 
    }
    return num;
}
function clockFormat(hour){
    if (hour > 12){
        hour -=12;
    }
    return hour;
}


    