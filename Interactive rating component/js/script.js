const submitBtn = document.querySelector(".submit-button");
const ratingDetails = document.querySelector(".rating-details");
const thankyou = document.querySelector(".thank-you");
const allRating = document.querySelectorAll(".rating");

function reatinghandleToClick(event) {
  allRating.forEach(function (element) {
    element.classList.remove("selected-rating");
  });
  event.currentTarget.classList.toggle("selected-rating");
}

allRating.forEach((rating) => {
  rating.addEventListener("click", reatinghandleToClick);
});

function submitBtnHandleToClick(event) {
  const selectedRating = document.querySelector(".selected-rating");
  if (selectedRating != null) {
    ratingDetails.classList.remove("active");
    thankyou.classList.remove("deactive");
    ratingDetails.classList.add("deactive");
    thankyou.classList.add("active");
    const givenRating = document.querySelector(".given-rating");
    givenRating.innerHTML = selectedRating.value;
  } else {
    alert("Please select a rating from the list 1 to 5");
  }
}

submitBtn.addEventListener("click", submitBtnHandleToClick);
