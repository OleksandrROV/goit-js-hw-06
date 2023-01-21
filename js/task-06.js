const inputValidation = document.getElementById(
  "validation-input"
);

inputValidation.addEventListener("blur", () => {
  const inputValue = inputValidation.value.length;
  const elChecked =
    inputValidation.getAttribute("data-length");

  if (inputValue == elChecked) {
    inputValidation.classList.add("valid");
    inputValidation.classList.remove("invalid");
  } else {
    inputValidation.classList.add("invalid");
    inputValidation.classList.remove("valid");
  }
});
