const year = document.querySelector(".year");
const month = document.querySelector(".month");
const hour = document.querySelector(".hour");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const targetDate = document.querySelector(".target");

function countDown() {

    const targetDateValue = targetDate.value;

    if(!targetDateValue){
        return;
    }

    const currentDate = new Date();
    const targetDateObj = new Date(targetDateValue);

    if (targetDateObj < currentDate) {
        window.alert("Insert a valid date!");
        targetDate.value = "";
        window.location.reload(); 
        return;
    }

    const totalSeconds = (targetDateObj - currentDate)/1000;

    const years = Math.floor(totalSeconds / (3600 * 24 * 365));
    const months = Math.floor((totalSeconds % (3600 * 24 * 365)) / (3600 * 24 * 30));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds/3600) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    year.textContent = format(years);
    month.textContent = format(months);
    hour.textContent = format(hours);
    min.textContent = format(minutes);
    sec.textContent = format(seconds) 
}

function format(time){
    return time < 10? `0${time}` : time; 
}

targetDate.addEventListener('change', countDown);
setInterval(countDown, 1000);