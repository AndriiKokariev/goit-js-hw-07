const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
function handler() {
  const trimmedInput = input.value.trim();
  if (trimmedInput === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = trimmedInput;
  }
}
input.addEventListener("input", handler);
