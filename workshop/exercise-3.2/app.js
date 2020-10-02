//target elements
const minute = document.getElementsByClassName("minutes-text")[0];
const seconds = document.getElementsByClassName("seconds-text")[0];
const startBtn = document.getElementsByClassName("btn-start")[0];
const stopBtn = document.getElementsByClassName("btn-stop")[0];

const start = () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startBtn.style.opacity = 0.5;
  startBtn.style.cursor = "default";
  stopBtn.style.opacity = 1;
  stopBtn.style.cursor = "pointer";

  minute.innerHTML = "00";
  let secondValue = "59";
  seconds.innerHTML = secondValue;
  const secondsDown = setInterval(() => {
    stopBtn.addEventListener("click", () => {
      clearInterval(secondsDown);
      startBtn.innerHTML = "Restart";
      startBtn.disabled = false;
      startBtn.style.opacity = 1;
      startBtn.style.cursor = "pointer";
      stopBtn.disabled = true;
      stopBtn.style.opacity = 0.5;
      stopBtn.style.cursor = "default";
      stopBtn.style.opacity = 0.5;
      stopBtn.style.cursor = "default";
    });
    secondValue--;
    seconds.innerHTML = secondValue;
    if (secondValue < 10) {
      seconds.innerHTML = "0" + secondValue;
    }
    if (secondValue == 0) {
      clearInterval(secondsDown);
      seconds.innerHTML = "00";
      startBtn.innerHTML = "Restart";
      startBtn.disabled = false;
      startBtn.style.opacity = 1;
      startBtn.style.cursor = "pointer";
      stopBtn.disabled = true;
      stopBtn.style.opacity = 0.5;
      stopBtn.style.cursor = "default";
      stopBtn.style.opacity = 0.5;
      stopBtn.style.cursor = "default";
    }
  }, 1000);
};

startBtn.addEventListener("click", start);
