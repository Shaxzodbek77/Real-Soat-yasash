
function getTime () {
    let date  = new Date();

    let hours = date.getHours(); 
    let minutes = date.getMinutes(); 
    let seconds = date.getSeconds();
    
    hours.toString().length < 2 ? hours = "0" + hours : hours;
    document.getElementById('hours').innerHTML = hours;
    
    minutes.toString().length < 2 ? minutes = "0" + minutes : minutes;
    document.getElementById('minutes').innerHTML = minutes;

    seconds.toString().length < 2 ? seconds = "0" + seconds : seconds;
    document.getElementById('seconds').innerHTML = seconds;

    
};


getTime();
setInterval(getTime, 1000);