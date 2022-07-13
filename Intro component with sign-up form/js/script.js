const btnSignUp = document.querySelector(".btn-sign-up");

const errorIconEmail = document.querySelector(".error-icon-email");
const errorIconFirstName = document.querySelector(".error-icon-first-name");
const errorIconLastName = document.querySelector(".error-icon-last-name");
const errorIconPassword = document.querySelector(".error-icon-password");

const errorMessageEmail = document.querySelector(".error-message-email");
const errorMessageFirstName = document.querySelector(
  ".error-message-first-name"
);
const errorMessageLastName = document.querySelector(".error-message-last-name");
const errorMessagePassword = document.querySelector(".error-message-password");

const emailID = document.querySelector("#email-id");
const first_Name = document.querySelector("#first-name");
const last_Name = document.querySelector("#last-name");
const _password = document.querySelector("#password");

function isInputValidate(firstName, lastName, email, password) {
  let validationResult = false;
  const formatSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const specialCharResultFirstName = formatSpecialChar.test(firstName);
  if (firstName === "" || specialCharResultFirstName === true) {
    first_Name.classList.add("invalid-focus");
    errorIconFirstName.style.display = "block";
    errorMessageFirstName.innerHTML = "First name can not be empty.";
    validationResult = false;
  } else {
    first_Name.classList.remove("invalid-focus");
    errorIconFirstName.style.display = "none";
    errorMessageFirstName.innerHTML = "";
    validationResult = true;
  }

  const specialCharResultLastName = formatSpecialChar.test(lastName);
  if (lastName === "" || specialCharResultLastName === true) {
    last_Name.classList.add("invalid-focus");
    errorIconLastName.style.display = "block";
    errorMessageLastName.innerHTML = "Last name can not be empty";
    validationResult = false;
  } else {
    last_Name.classList.remove("invalid-focus");
    errorIconLastName.style.display = "none";
    errorMessageLastName.innerHTML = "";
    validationResult = true;
  }

  if (password === "") {
    _password.classList.add("invalid-focus");
    errorIconPassword.style.display = "block";
    errorMessagePassword.innerHTML = "Password can not be empty";
    validationResult = false;
  } else {
    _password.classList.remove("invalid-focus");
    errorIconPassword.style.display = "none";
    errorMessagePassword.innerHTML = "";
    validationResult = true;
  }

  const rex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = rex.test(String(email).toLowerCase().trim());
  if (result === true) {
    errorIconEmail.style.display = "none";
    errorMessageEmail.innerHTML = "";
    emailID.classList.remove("invalid-focus");
    validationResult = true;
  } else {
    emailID.classList.add("invalid-focus");
    errorIconEmail.style.display = "block";
    errorMessageEmail.innerHTML = "Please enter a valid email address";
    validationResult = false;
  }
  return validationResult;
}

function handleToClick() {
  const validation_result = isInputValidate(
    first_Name.value.trim(),
    last_Name.value.trim(),
    emailID.value.trim(),
    _password.value.trim()
  );
  console.log(validation_result);
}

btnSignUp.addEventListener("click", handleToClick);
emailID.addEventListener("focusout", handleToClick);
emailID.addEventListener("change", handleToClick);
first_Name.addEventListener("focusout", handleToClick);
first_Name.addEventListener("change", handleToClick);
last_Name.addEventListener("focusout", handleToClick);
last_Name.addEventListener("change", handleToClick);
_password.addEventListener("focusout", handleToClick);
_password.addEventListener("change", handleToClick);
