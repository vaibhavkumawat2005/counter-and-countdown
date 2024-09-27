let counter = 0;
const counterDisplay = document.getElementById("counterDisplay");
document.getElementById("incrementbtn").addEventListener("click", () =>
{   
    counter = counter + 1;
    counterDisplay.textContent = counter;
});

document.getElementById("decrementbtn").addEventListener("click", () => {
    if(counter <= 0){
            
    } 
    else{
    counter--;
     counterDisplay.textContent =counter;
    }
} )

document.getElementById("resetbtn").addEventListener("click", () =>{
    counter = 0;
    counterDisplay.textContent= counter;
} )


// countdown
let countdown = 10;
let countDownInterval;
const countdownDisplay = document.getElementById("countdownDisplay");
const customInput = document.getElementById("countdownInput");

function startCounter(){
    if(countDownInterval) clearInterval(countDownInterval);
    countdownDisplay.textContent = countdown;
    countDownInterval =setInterval(() => {
        countdown--;
        countdownDisplay.textContent= countdown
        changeBackground();
        if (countdown<=0){
            clearInterval(countDownInterval);
            countdownDisplay.textContent = "Time's Up";
            document.body.style.backgroundColor = "black";
    
        }
    }, 1000);
}

function changeBackground(){
    const intensity = Math.floor((countdown / 10) *225);
    document.body.style.backgroundColor = `rbg(255, ${intensity},${intensity})`;
    
}

document.getElementById("startbtn").addEventListener("click",() => {
    const customValue = parseInt(customInput.value);
    countdown = customValue > 0 ? customValue : countdown; 
    startCounter();

});

document.getElementById("stopbtn").addEventListener ("click" ,() => {
    clearInterval(countDownInterval);
});

document.getElementById("restbtn").addEventListener ("click" ,() => {
    clearInterval(countDownInterval);
          countdown = 10;
          countdownDisplay.textContent = countdown;
          document.body.style.backgroundColor = "white";
          alert("Time reset")
});