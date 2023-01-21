const inputBox = document.querySelector(
  "#font-size-control"
);
const spanText = document.querySelector("#text");

inputBox.addEventListener("input", onInputRange);
function onInputRange(event) {
  spanText.style.fontSize =
    event.currentTarget.value + "px";
}
