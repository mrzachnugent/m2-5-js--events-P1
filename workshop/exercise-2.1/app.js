const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("div")[0];

body.style.cssText =
  "text-align: center; max-width: 1050px; margin: 25px auto;";

for (i = 1; i < 21; i++) {
  let button = main.appendChild(document.createElement("button"));
  button.setAttribute("class", "square-btn");
  button.textContent = `${i}`;
  button.style.cssText =
    "width: 150px; height: 150px; background: #990000; color: #fff; font-size: 50px; font-weight: 600; border: 2px solid #fff;";
  button.addEventListener("click", () => {
    button.style.background = "#005900";
  });
}
