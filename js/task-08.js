const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", onLogSubmit);

function onLogSubmit(event) {
  event.preventDefault();
  const logFormElements = event.currentTarget.elements;
  const mail = logFormElements.email.value;
  const password = logFormElements.password.value;

  const elementsData = {
    mail,
    password,
  };
  event.currentTarget.reset();
  console.log(elementsData);
}
