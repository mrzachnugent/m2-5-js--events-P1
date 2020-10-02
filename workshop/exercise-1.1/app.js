// Exercise 1.1
// ------------
//Select the body element
const body = document.getElementsByTagName("body")[0];

//Select the style element and give it some style
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  " * { margin : 0; padding: 0; box-sizing: border-box;} body {min-height: 100vh; width: 100%; background: radial-gradient(#01C9F7, #02002A); font-family: arial;} h2{color: #fff; font-size: 36px; padding: 20px;} h1{color: #FF20FF; font-size: 199px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); text-align: center;} .you-win {display:none} .you-loose {display:none}"
);
style.appendChild(styleTextNode);

//create h2 : Be a quicker click!
const h2 = document.createElement("h2");
const h2TextNode = document.createTextNode("Be a quicker clicker!");
h2.appendChild(h2TextNode);
body.appendChild(h2);

//create h1: you win/loose
const h11 = document.createElement("h1");
const h12 = document.createElement("h1");
const h1WinTextNode = document.createTextNode("You Win!");
const h1LooseTextNode = document.createTextNode("You Loose!");
h11.appendChild(h1WinTextNode);
h11.classList.add("you-win");
h12.classList.add("you-loose");
h12.appendChild(h1LooseTextNode);
body.appendChild(h11);
body.appendChild(h12);

const youWinDisplay = () => {
  h11.style.display = "block";
};

body.addEventListener("click", youWinDisplay);

const youLoseDisplay = () => {
  if (h11.style.display !== "block") {
    h12.style.display = "block";
    body.removeEventListener("click", youWinDisplay);
  }
};

//

setTimeout(youLoseDisplay, 1000);
