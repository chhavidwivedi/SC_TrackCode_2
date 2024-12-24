let timerDisplay=
document.getElementById("timer");
let startBtn=
document.getElementById("startBtn");
let stopBtn=
document.getElementById("stopBtn");
let resetBtn=
document.getElementById("resetBtn");

let timerInterval;
let seconds=0;

function updateTimerDisplay(){
    let hrs=Math.floor(seconds/3600);
    let mins=Math.floor((seconds%3600)/60);
    let secs=seconds%60;
     
    timerDisplay.textContent=${String(hrs).padStart(2,"0")}: ${String(mins).padStart(2,"0")} : ${String(secs).padStart(2,"0")};
}

startBtn.addEventListener("click",()=>{
    if(!timerInterval){
        timerInterval=setInterval(() =>{
            seconds++;
            updateTimerDisplay();
        },1000);
   }
});

stopBtn.addEventListener("click",()=>{
    clearInterval(timerInterval);
    timerInterval=null;
});
 
resetBtn.addEventListener("click",() => {
    clearInterval(timerInterval);
    timerInterval=null;
    seconds=0;
    updateTimerDisplay();
});

//initialize the timer display
updateTimerDisplay();