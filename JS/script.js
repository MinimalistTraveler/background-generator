const $ = query => document.querySelector(query);
const $all = query => document.querySelectorAll(query);

const colorUpdate = (color1, color2, dir = "right") => {
  let colorContent = $("#color-content");
  $(
    "body"
  ).style.background = `linear-gradient(to ${dir}, ${color1}, ${color2})`;
  colorContent.textContent = `background: linear-gradient(to ${dir},${color1}, ${color2});`;
};

$(".color-pickers").addEventListener("input", e => {
  if (e.target.classList.contains("color-item")) {
    let colors = $all(".color-item");
    let color1 = colors[0].value;
    let color2 = colors[1].value;

    // Update the colors
    colorUpdate(color1, color2);
  }
});
document.addEventListener("keypress", e => {
  let colors = $all(".color-item");
  let color1 = colors[0].value;
  let color2 = colors[1].value;
  const keyCodes = {
    top: 38,
    bottom: 40,
    left: 37,
    right: 39
  };
  const targetKey = Object.values(keyCodes).find(key => key === e.keyCode);
  if (!targetKey) {
    return;
  }
  // Check if the keyCodes value match the target value
  const targetKeyArr = Object.entries(keyCodes).find(
    key => targetKey === key[1]
  );
  colorUpdate(color1, color2, targetKeyArr[0]);
});
document.addEventListener("DOMContentLoaded", () => {
  let colors = $all(".color-item");
  colorUpdate("#FFF", "#EEE");
  colors[0].value = "#FFF";
  colors[1].value = "#EEE";
});
