const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("div")[0];
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  ".toggle{background:#005900 !important;}"
);
style.appendChild(styleTextNode);

body.style.cssText =
  "margin: 0; padding: 0; box-sizing: border-box; height: 100vh; width: 100vw;";

for (i = 1; i < 21; i++) {
  const button = main.appendChild(document.createElement("button"));
  button.innerText = `${i}`;
  let randoX = Math.floor(Math.random() * (window.innerWidth - 90));
  let randoY = Math.floor(Math.random() * (window.innerHeight - 90));
  button.style.position = "absolute";
  button.style.left = `${randoX}px`;
  button.style.top = `${randoY}px`;
  button.style.width = "90px";
  button.style.height = "90px";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.color = "#fff";
  button.style.background = "#990000";
  button.style.fontSize = "45px";
  button.style.fontWeight = "700";
  button.addEventListener("click", () => {
    button.classList.toggle("toggle");
  });
}
