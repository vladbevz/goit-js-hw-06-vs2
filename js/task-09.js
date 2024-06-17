function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const backgroundSpace = document.querySelector("body");

changeColorBtn.addEventListener("click", onchangeColorBtn);

function onchangeColorBtn() {
  const randomColor = getRandomHexColor();
  backgroundSpace.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
}
