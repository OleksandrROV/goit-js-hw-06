const logForm = document.querySelector(".login-form");
logForm.addEventListener("submit", onLogSubmit);

function onLogSubmit(event) {
  event.preventDefault();
  const logFormElements = event.currentTarget.elements;
  const mail = logFormElements.email.value;
  const password = logFormElements.password.value;

  if (!mail || !password) {
    alert('All inputs must not be empty');
  } else {
    const elementsData = { mail, password };
    console.log(elementsData);
    logForm.reset();
  }
}

