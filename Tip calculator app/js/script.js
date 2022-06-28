const resetBtn = document.querySelector(".btn-reset");
const allTipRate = document.querySelectorAll(".tip-rate");
let customTrip = document.querySelector("#custom-trip");
let totalBill = document.querySelector("#total-bill");
let totalPerson = document.querySelector("#total-person");
let selectedTip = document.querySelector(".selected-tip");
let errorMessagePerson = document.querySelector(".error-message-person");
let errorMessageTotal = document.querySelector(".error-message-total");

function finalInitiaLizeComponentValue() {
  selectedTip = document.querySelector(".selected-tip");
  customTrip = document.querySelector("#custom-trip");
  totalBill = document.querySelector("#total-bill");
  totalPerson = document.querySelector("#total-person");
  errorMessagePerson = document.querySelector(".error-message-person");
  errorMessageTotal = document.querySelector(".error-message-total");
}

function tipCalculation(event) {
  event.preventDefault();
  finalInitiaLizeComponentValue();
  errorMessagePerson.innerHTML = "";
  errorMessageTotal.innerHTML = "";
  totalBill.classList.remove("zero-value");
  totalPerson.classList.remove("zero-value");
  if (
    !!totalBill.value &&
    !!totalBill.value * 1 > 0 &&
    !!selectedTip.value &&
    !!totalPerson.value &&
    totalPerson.value * 1 > 0 &&
    Number.isInteger(totalPerson.value * 1) === true
  ) {
    errorMessagePerson.innerHTML = "";
    totalBill.classList.remove("zero-value");
    totalPerson.classList.remove("zero-value");

    let finalTotalBill = Number(totalBill.value * 1).toFixed(2);
    let finalSelectedTip = Number(selectedTip.value * 1).toFixed(2);
    let finaltotalPerson = Number(totalPerson.value * 1).toFixed(2);

    const perPersonTrip =
      (finalTotalBill * finalSelectedTip) / 100 / finaltotalPerson;
    document.querySelector(".tip-amount").innerHTML =
      "$" + Number(perPersonTrip * 1).toFixed(2);
    const perPersonBill = finalTotalBill / finaltotalPerson;
    const totalPerPersonBill =
      Number(perPersonBill).toFixed(2) * 1 +
      Number(perPersonTrip).toFixed(2) * 1;
    document.querySelector(".total-amout").innerHTML =
      "$" + Number(totalPerPersonBill).toFixed(2);
  }
  if (
    totalPerson.value == "" ||
    totalPerson.value * 1 == 0 ||
    Number.isInteger(totalPerson.value * 1) === false
  ) {
    errorMessagePerson.innerHTML = "Can't be Zero,Empty,Fraction";
    totalPerson.classList.add("zero-value");
    totalPerson.focus();
  }

  if (totalBill.value === "" || totalBill.value * 1 === 0) {
    console.log(totalBill.value + "First");
    errorMessageTotal.innerHTML = "Can't be Zero,Empty";
    totalBill.classList.add("zero-value");
    totalBill.focus();
  }
}

function tipHandleToClick(event) {
  allTipRate.forEach(function (element) {
    element.classList.remove("selected-tip");
    customTrip.value = "";
  });
  event.currentTarget.classList.add("selected-tip");
  event.currentTarget.addEventListener("click", tipCalculation);
}

allTipRate.forEach((tip) => {
  tip.addEventListener("click", tipHandleToClick);
});

function handleReset() {
  location.reload(true);
}

totalBill.addEventListener("focusout", tipCalculation);
customTrip.addEventListener("focusout", tipCalculation);
totalPerson.addEventListener("focusout", tipCalculation);
totalBill.addEventListener("change", tipCalculation);
customTrip.addEventListener("change", tipCalculation);
totalPerson.addEventListener("change", tipCalculation);
resetBtn.addEventListener("click", handleReset);
