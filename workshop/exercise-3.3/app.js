const playButton = document.getElementsByClassName("sound-btn")[0];
const sample = document.getElementById("audio");

playButton.addEventListener("mousedown", () => {
  if (sample.paused === true) {
    sample.play();
  } else if (sample.paused === false) {
    sample.currentTime = 0;
    sample.play();
  }
});
