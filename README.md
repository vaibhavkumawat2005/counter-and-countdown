<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <div class="container">
        <h1>Counter and Countdown</h1>



    <div>
        <h2>Counter</h2>
        <div class="counter-display" id="counterDisplay">0</div>
        <button id="incrementbtn" >Increment</button>
        <button id="decrementbtn" >Decrement</button>
        <button id="resetbtn">Reset</button>

    </div>

    <div>
        <h2>Countdown</h2>
        <div class="countdown-display" id="countdownDisplay">10</div>
        <input type="number" class="input-field" id = "countdownInput" min="1">
        <button id="startbtn">Start</button>
        <button id="stopbtn">Stop</button>
        <button id="restbtn">Reset</button>
    </div>
</div>
    <script src="script.js"></script>
</body>
</html>


body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
     background: rgb(122,65,32);background: linear-gradient(90deg, rgba(122,65,32,1) 0%, rgba(137,88,58,1) 100%);
  }
  .container {
    text-align: center;
    background: rgb(0,0,0);background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(136,47,47,1) 50%, rgba(252,176,69,1) 100%);
    /* background: rgb(112,104,104);background: linear-gradient(99deg, rgba(112,104,104,1) 0%, rgba(41,82,111,1) 55%); */
    padding: 50px;
    border-radius: 20px;
    color: white;
    box-shadow: 0px 10px 16px rbga(0, 0, 0, 0.2);
  }

  h1 {
    margin-bottom: 20px;
  }

  .counter-display,
  .countdown-display {
    font-size: 40px;
    margin: 20px 0;
  }

  button,
  input {
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    color: #778da9;
    margin: 10px;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: #778da9;
    color: black;
  }

  .input-field {
    width: 60px;
    text-align: center;
    font-size: 18px;
    margin-right: 10px;
  }


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
