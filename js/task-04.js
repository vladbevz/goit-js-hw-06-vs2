const decrementBtn = document.querySelector('button[data-action ="decrement"]');
const incrementBtn = document.querySelector('button[data-action ="increment"]');
const counterValue = document.querySelector("#value");
let currentValue = 0;

function onDecrementBtnClick() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}

function onIncrementBtnClick() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
