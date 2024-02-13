function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successAlert = document.getElementById("successAlert");
  const errorAlert = document.getElementById("errorAlert");

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  messageError.innerHTML = "";
  successAlert.classList.add("d-none");
  errorAlert.classList.add("d-none");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email address";
    return;
  }

  if (!name.trim()) {
    nameError.innerHTML = "Name is required";
  }

  if (!message.trim()) {
    messageError.innerHTML = "Message is required";
  }

  if (
    nameError.innerHTML === "" &&
    emailError.innerHTML === "" &&
    messageError.innerHTML === ""
  ) {
    successAlert.classList.remove("d-none");
    resetForm();
  } else {
    errorAlert.classList.remove("d-none");
  }
}

function resetForm() {
  document.getElementById("contactForm").reset();
}
