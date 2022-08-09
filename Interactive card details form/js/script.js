const btnConfirm = document.querySelector(".btn-confirm");

const cardholder_Name = document.querySelector("#cardholder-name");
const card_Number = document.querySelector("#card-number");
const exp_manth = document.querySelector("#exp-manth");
const exp_year = document.querySelector("#exp-year");
const cvc = document.querySelector("#cvc");

const errorMessageCardholderName = document.querySelector(
  ".error-message-cardholder-name"
);
const errorMessageCardNumber = document.querySelector(
  ".error-message-card-number"
);
const errorMessageExpDate = document.querySelector(".error-message-exp-date");
const errorMessagecvc = document.querySelector(".error-message-cvc");

const thankYouMessage = document.querySelector(".thank-you-message");
const callToActionForm = document.querySelector(".call-to-action-form");

function chekIsInputValid(
  cardholderName,
  cardNumber,
  expMonth,
  expYear,
  cvcNumber
) {
  let validationResult = false;
  const formatSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  const formatOnlyNumber = /^[0-9]*$/g;

  const specialCharResultCardholderName =
    formatSpecialChar.test(cardholderName);
  const OnlyNumberResultcardNumber = formatOnlyNumber.test(cardNumber);

  if (cardholderName === "") {
    cardholder_Name.classList.add("invalid-focus");
    errorMessageCardholderName.innerHTML = "Can't be blank";
    validationResult = false;
  } else if (specialCharResultCardholderName === true) {
    cardholder_Name.classList.add("invalid-focus");
    errorMessageCardholderName.innerHTML = "Special xhar are not allowed";
    validationResult = false;
  } else {
    cardholder_Name.classList.remove("invalid-focus");
    errorMessageCardholderName.innerHTML = "";
    validationResult = true;
  }

  if (cardNumber === "") {
    card_Number.classList.add("invalid-focus");
    errorMessageCardNumber.innerHTML = "Can't be blank";
    validationResult = false;
  } else if (
    OnlyNumberResultcardNumber === true ||
    cardNumber.length !== 19 ||
    cardNumber.replace(/ /g, "") * 1 === 0
  ) {
    card_Number.classList.add("invalid-focus");
    errorMessageCardNumber.innerHTML = "Wrong format";
    validationResult = false;
  } else {
    card_Number.classList.remove("invalid-focus");
    errorMessageCardNumber.innerHTML = "";
    validationResult = true;
  }

  if (expMonth === "") {
    exp_manth.classList.add("invalid-focus");
    errorMessageExpDate.innerHTML = "Can't be blank";
    validationResult = false;
  } else if (expMonth === "00" || expMonth === 0 || expMonth > 12) {
    exp_manth.classList.add("invalid-focus");
    errorMessageExpDate.innerHTML = "Wrong format";
    validationResult = false;
  } else if (expMonth > 0 && expMonth <= 9 && expMonth.length === 1) {
    exp_manth.value = "0" + expMonth;
    exp_manth.classList.remove("invalid-focus");
    errorMessageExpDate.innerHTML = "";
    validationResult = true;
  } else {
    exp_manth.classList.remove("invalid-focus");
    errorMessageExpDate.innerHTML = "";
    validationResult = true;
  }

  if (expYear === "") {
    exp_year.classList.add("invalid-focus");
    errorMessageExpDate.innerHTML = "Can't be blank";
    validationResult = false;
  } else if (expYear === "00" || expYear === 0) {
    exp_year.classList.add("invalid-focus");
    errorMessageExpDate.innerHTML = "Wrong format";
    validationResult = false;
  } else if (expYear > 0 && expYear <= 9 && expYear.length === 1) {
    exp_year.value = "0" + expYear;
    exp_year.classList.remove("invalid-focus");
    errorMessageExpDate.innerHTML = "";
    validationResult = true;
  } else {
    exp_year.classList.remove("invalid-focus");
    errorMessageExpDate.innerHTML = "";
    validationResult = true;
  }

  if (cvcNumber === "") {
    cvc.classList.add("invalid-focus");
    errorMessagecvc.innerHTML = "Can't be blank";
    validationResult = false;
  } else if (
    cvcNumber === "0" ||
    cvcNumber === "00" ||
    cvcNumber === "000" ||
    cvcNumber.length !== 3
  ) {
    cvc.classList.add("invalid-focus");
    errorMessagecvc.innerHTML = "Wrong format";
    validationResult = false;
  } else {
    cvc.classList.remove("invalid-focus");
    errorMessagecvc.innerHTML = "";
    validationResult = true;
  }

  return validationResult;
}

function handleToClick() {
  const validation_result = chekIsInputValid(
    cardholder_Name.value.trim(),
    card_Number.value.trim(),
    exp_manth.value.trim(),
    exp_year.value.trim(),
    cvc.value.trim()
  );
  console.log(validation_result);
  if (validation_result === true) {
    thankYouMessage.style.display = "flex";
    callToActionForm.style.display = "none";
  } else {
    thankYouMessage.style.display = "none";
    callToActionForm.style.display = "flex";
  }
}

card_Number.addEventListener("keyup", function (e) {
  if (e.keyCode !== 8) {
    if (
      this.value.length === 4 ||
      this.value.length === 9 ||
      this.value.length === 14
    ) {
      this.value = this.value += " ";
    }
  }
});

btnConfirm.addEventListener("click", handleToClick);
