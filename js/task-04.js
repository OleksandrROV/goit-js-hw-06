let counterValue = 0;

const counterEl = document.querySelector("#value");
const decrButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrButton = document.querySelector(
  'button[data-action="increment"]'
);

decrButton.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.innerHTML = counterValue;
});
incrButton.addEventListener("click", () => {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
});
