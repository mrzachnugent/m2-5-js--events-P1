//existing elements
const body = document.getElementsByTagName("body")[0];
const main = document.querySelector(".main");
//CSS in head
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  `* { margin: 0; padding: 0; box-sizing: border-box }
  body { padding-top: 100px; height: 100vh; width: 100%; background: #ececec; display: flex; justify-content: center; align-items: center; }
  header { position: absolute; top: 0; left: 0; height: 100px; width: 100%; background: linear-gradient(#555, #aaa); 
  box-shadow: inset 2px 2px 9px rgba(0, 0, 0, 0.4), inset -4px -4px 15px rgba(255, 255, 255, 0.3), 2px 2px 25px rgba(0, 0, 0, 0.7);
              display: flex; justify-content: center; align-items: center}
  .start-btn { width: 200px; height: 60px; border: none; border-radius: 4px; font-size: 27px; font-family: monospace; font-weight: 700;
              background: linear-gradient(#2CEFFC, #019DF4); box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.5), inset -4px -4px 8px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1);
              color: #fff; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);}
  .start-btn:focus, .game-button:focus {outline:none;}
  .start-btn, .game-button {cursor: pointer}
  .start-btn:focus, .game-button:focus {box-shadow: -4px -4px 8px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1); transform: scale(0.98); opacity: 0.95}
  .main { height: 700px; width: 900px; background: #fff; position: relative;
               box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);}
  .game-button {position: absolute; width: 50px; height: 50px; border-radius: 50%; border: none; font-size: 18px; font-weight: 700; color: #fff;
               box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.5), inset -4px -4px 8px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1);
               }
  .toggled {background: #005900 !important}
  #countdown { font-size: 52px; color: #fff; font-weight: 600; font-family: monospace; display: none;}
  .container-result {height: 300px; width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); outline: 10000px solid rgba(0, 0, 0, 0.5); display: flex; justify-content: center; align-items: center}
  h1 {color: #fff; font-size: 67px;}`
);
style.appendChild(styleTextNode);

//create new header and start button
const header = document.createElement("header");
body.prepend(header);

const startBtn = document.createElement("button");
startBtn.setAttribute("class", "start-btn");
startBtn.textContent = "START";
header.appendChild(startBtn);

//start button on click event
const clickStart = () => {
  startBtn.style.display = "none";
  span.style.display = "block";
  gameHandler();
};
startBtn.addEventListener("click", clickStart);

//generate random number of buttons
let randoButtons = Math.floor(Math.random() * 10) + 1;

//create empty array for all of the buttons so that later I can use it in the gameHandler function
let btnArr = [];

//create loop for buttons, puts them in random locations, ignore btnArr
for (let i = 1; i < randoButtons + 1; i++) {
  const gameButton = main.appendChild(document.createElement("button"));
  gameButton.setAttribute("class", "game-button");
  gameButton.setAttribute("id", `btn${i}`);
  btnArr.push(gameButton.id);
  gameButton.textContent = `${i}`;
  const randoX = Math.floor(Math.random() * 850);
  const randoY = Math.floor(Math.random() * 650);
  gameButton.style.left = `${randoX}px`;
  gameButton.style.top = `${randoY}px`;
}

//create result containers
const containerResultWin = document.createElement("div");
containerResultWin.setAttribute("class", "container-result");
containerResultWin.style.background = "green";
const containerResultLose = document.createElement("div");
containerResultLose.setAttribute("class", "container-result");
containerResultLose.style.background = "red";
const resultWin = document.createElement("h1");
const resultLose = document.createElement("h1");
const winTextNode = document.createTextNode("You win!!!");
const loseTextNode = document.createTextNode("You Lose...");
resultWin.appendChild(winTextNode);
resultLose.appendChild(loseTextNode);
containerResultWin.appendChild(resultWin);
containerResultLose.appendChild(resultLose);

//since the gameButton in the for loop's scope. I had to create a new one.
let gameButton = document.querySelectorAll(".game-button");

//Changing to green adds element to the array, changing to red, removes element from array. This way is the length of the array is the same as the number of buttons it means they are all green 8-)
let numClicks = [];

//sets the background color of each gameButton
gameButton.forEach((node) => {
  node.style.background = "#990000";
});

//Selects random time from 3 seconds to 6 seconds
const randoTime = Math.floor(Math.random() * 4) + 3;

//span
const span = document.createElement("span");
span.setAttribute("id", "countdown");
let seconds = (span.textContent = `${randoTime}`);
header.appendChild(span);

//this converts the node list to an array. Unfortunaly it's not great for the elements' style.
const gameButtonList = Array.from(gameButton);

//this event handler is called when the start button is clicked
const gameHandler = () => {
  //change background of gameButton and numClicks event starts only when game starts
  gameButton.forEach((node) => {
    node.addEventListener("click", () => {
      if (node.style.background === "rgb(153, 0, 0)") {
        node.style.background = "rgb(0, 89, 0)";
        numClicks.push(1);
      } else if (node.style.background === "rgb(0, 89, 0)") {
        node.style.background = "rgb(153, 0, 0)";
        numClicks.pop();
      }
    });
  });
  let countdown = setInterval(() => {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (numClicks.length === btnArr.length) {
      clearInterval(countdown);
      body.appendChild(containerResultWin);
    }
    if (seconds < 0) {
      span.style.display = "none";
      gameButton.forEach((node) => {
        node.style.display = "none";
      });
    }
    if (seconds <= -1) {
      clearInterval(countdown);
      body.appendChild(containerResultLose);
    }
  }, 1000);
};
