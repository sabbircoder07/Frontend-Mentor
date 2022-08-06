const allMenu = document.querySelectorAll(".dropdown");
const arrowSelection = document.querySelectorAll(".arrow");
const navLink = document.querySelectorAll(".nav-link");

function handleOnClick(event) {
  event.stopPropagation();
  event.preventDefault();
  const classList = event.currentTarget.classList;
  const isOpen = classList.contains("dropdown--open");

  allMenu.forEach(function (element) {
    element.classList.remove("dropdown--open");
  });

  if (isOpen) {
    classList.remove("dropdown--open");
  } else {
    classList.add("dropdown--open");
  }
}

allMenu.forEach((element) => element.addEventListener("click", handleOnClick));
document.body.addEventListener("click", function (event) {
  allMenu.forEach(function (element) {
    if (element.classList.contains("dropdown--open")) {
      element.classList.remove("dropdown--open");
    }
  });
});
