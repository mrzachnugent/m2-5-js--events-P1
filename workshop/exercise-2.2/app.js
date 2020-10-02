const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("div")[0];
const style = document.getElementsByTagName("style")[0];
const styleTextNode = document.createTextNode(
  ".toggle {background:#005900 !important;}"
);
style.appendChild(styleTextNode);

body.style.cssText = "margin: 25 auto; max-width: 1050px; text-align:center;";

for (i = 1; i < 21; i++) {
  let button = main.appendChild(document.createElement("button"));
  button.setAttribute("class", "sqr-btn");
  button.textContent = `${i}`;
  button.style.cssText =
    "width: 150px; height: 150px; color: #fff; font-size: 50px; font-weight: 600; border: 2px solid #fff;";
  button.style.background = "#990000";
  button.addEventListener("click", () => {
    button.classList.toggle("toggle");
  });
}
