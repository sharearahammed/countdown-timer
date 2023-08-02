const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');


const newYears = "1 jan 2024";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds) % 60;

    

    dayEl.innerHTML = formtTime(days);
    hoursEl.innerHTML = formtTime(hours);
    minsEl.innerHTML = formtTime(mins);
    secondsEL.innerHTML = formtTime(seconds);
}
function formtTime(time){
    return time < 10 ? (`0${time}`):time;
}

countdown();
setInterval(countdown, 1000); 