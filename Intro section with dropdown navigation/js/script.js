const allMenu = document.querySelectorAll(".dropdown");
const arrowSelection = document.querySelectorAll(".arrow");
const navLink = document.querySelectorAll(".nav-link");

console.log(arrowSelection);

function handleOnClick(event) {
  event.stopPropagation();
  event.preventDefault();
  const classList = event.currentTarget.classList;
  const isOpen = classList.contains("dropdown--open");

  arrowSelection.forEach(function (element) {
    element.src = "./images/icon-arrow-down.svg";
  });

  allMenu.forEach(function (element) {
    element.classList.remove("dropdown--open");
  });

  if (isOpen) {
    classList.remove("dropdown--open");
    event.currentTarget.querySelector(".arrow").src =
      "./images/icon-arrow-down.svg";
  } else {
    classList.add("dropdown--open");
    event.currentTarget.querySelector(".arrow").src =
      "./images/icon-arrow-up.svg";
  }
}

allMenu.forEach((element) => element.addEventListener("click", handleOnClick));
document.body.addEventListener("click", function (event) {
  arrowSelection.forEach(function (element) {
    element.src = "./images/icon-arrow-down.svg";
  });

  allMenu.forEach(function (element) {
    if (element.classList.contains("dropdown--open")) {
      element.classList.remove("dropdown--open");
    }
  });
});
