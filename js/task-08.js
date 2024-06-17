const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();
  const formEls = event.currentTarget.elements;
  const email = formEls.email.value;
  const password = formEls.password.value;
  if (email === "" || password === "") {
    return alert("Всі поля мають бути заповненні");
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);

  event.currentTarget.reset();
}
