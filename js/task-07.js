const textInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

textInput.addEventListener("input", () => {
  textOutput.style.fontSize = `${textInput.value}px`;
});
