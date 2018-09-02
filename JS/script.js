const $ = query => document.querySelector(query);
const $all = query => document.querySelectorAll(query);

const colorUpdate = (color1, color2) => {
  $(
    "body"
  ).style.background = `linear-gradient(to right, ${color1}, ${color2})`;
};
const updateText = (content, color1, color2) => {
  content.textContent = `Color 1: ${color1}, Color 2: ${color2}`;
};
$(".color-pickers").addEventListener("input", e => {
  if (e.target.classList.contains("color-item")) {
    let colors = $all(".color-item");
    let color1 = colors[0].value;
    let color2 = colors[1].value;
    let colorContent = $("#color-content");
    // Update the colors
    colorUpdate(color1, color2);
    updateText(colorContent, color1, color2);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  colorUpdate("#DDD", "#FFF");
});
