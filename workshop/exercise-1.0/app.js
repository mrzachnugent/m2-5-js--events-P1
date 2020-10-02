// Exercise 1.0
// ------------
//Select body element
const body = document.querySelector("body");

//Select style element and add inline css
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  "* { margin: 0; padding: 0; } body { width: 100vw; height: 100vh; }"
);
style.appendChild(styleTextNode);

//Create p element with You Win! text inside of it
const p = document.createElement("p");
const pTextNode = document.createTextNode("You Win!");
p.appendChild(pTextNode);

//Create function: show the p element
const youWin = () => {
  body.appendChild(p);
};

//Add event listener to body. When clicked, it will call the youWin function and show the p element inside of the body
body.addEventListener("click", youWin);
