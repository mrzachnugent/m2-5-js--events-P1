const body = document.getElementsByTagName("body")[0];
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  `*{margin: 0; padding: 0; box-sizing: border-box;} 
  body {background: #ececec; min-height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center;}
  main { height: 500px; width: 700px; background: #fff; box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.2); border-radius: 10px; display: flex; justify-content: center; align-items: center; background: linear-gradient(143.08deg, #2CEFFC -8.53%, #019DF4 64.56%); }
  #time-p {font-size: 70px; font-family: monospace; color: #ff0000; background: #000; padding: 40px; width: 605px; border-radius: 15px; text-align: center; box-shadow: 2px 8px 8px rgba(0,0,0,0.5);}`
);
style.appendChild(styleTextNode);

const clockContainer = document.createElement("main");
body.prepend(clockContainer);

const p = document.createElement("p");
p.setAttribute("id", "time-p");
clockContainer.appendChild(p);

startTime();

function startTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById(
    "time-p"
  ).innerHTML = `${hour} : ${minutes} : ${seconds}`;
  setTimeout(startTime, 100);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
