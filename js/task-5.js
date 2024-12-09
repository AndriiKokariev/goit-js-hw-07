function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector(".color");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");

function handler() {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

button.addEventListener("click", handler);
