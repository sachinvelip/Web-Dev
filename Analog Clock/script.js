const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');



setInterval(startAnalogClock,1000);

function startAnalogClock(){
    const date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();

    rotateHour=(30*h)+(m/2);
    rotateMinute=6*m;
    rotateSecond=6*s;

    hour.style.transform=`rotate(${rotateHour}deg)`;
    minute.style.transform=`rotate(${rotateMinute}deg)`;
    second.style.transform=`rotate(${rotateSecond}deg)`;
    
}
