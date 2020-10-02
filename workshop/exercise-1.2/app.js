// Exercise 1.2
// ------------
//Select the body
const body = document.getElementsByTagName("body")[0];

//Select and write the css
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  "*{margin:0;padding:0;box-sizing:border-box;}body{min-height:100vh;width:100%;background:radial-gradient(#02002A,#01C9F7); font-family:arial;}.time-text{color:#fff;font-size:36px;padding:20px;font-weight:600;}.result{font-weight:700;color:#FF20FF;font-size:199px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-shadow:2px 2px 5px rgba(0,0,0,0.5);text-align:center;}#time{color: #FFEF00; font-size: 50px;}"
);
style.appendChild(styleTextNode);

const result = document.querySelector("#result");
const youWinTextNode = document.createTextNode("You Win!");
const youLooseTextNode = document.createTextNode("You Loose!");
const timeSpan = document.getElementById("time");

const timeCalc = Math.floor(Math.random() * 5) + 1;
console.log(timeCalc);

let seconds = (document.getElementById("time").textContent = timeCalc);
let countdown = setInterval(() => {
  seconds--;
  document.getElementById("time").textContent = seconds;
  if (seconds <= 0) {
    result.appendChild(youLooseTextNode);
    body.removeEventListener("click", youWin);
    clearInterval(countdown);
  }
}, 1000);

const youWin = () => {
  result.appendChild(youWinTextNode);
  clearInterval(countdown);
};

body.addEventListener("click", youWin);

// timeSpan.appendChild(timeTextNode);
