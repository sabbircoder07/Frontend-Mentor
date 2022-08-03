const allMenu = document.querySelectorAll(".dropdown");
const arrowSelection = document.querySelectorAll(".arrow");
const navLink = document.querySelectorAll(".nav-link");
console.log(navLink);

function handleOnClick(event) {
  event.stopPropagation();
  event.preventDefault();
  const classList = event.currentTarget.classList;
  const isOpen = classList.contains("dropdown--open");
  const classListLink = event.currentTarget.classList;
  const isActiveLink = classList.contains("nav-link-extend");

  allMenu.forEach(function (element) {
    element.classList.remove("nav-link-extend");
    element.classList.remove("dropdown--open");
  });

  if (isActiveLink) {
    classListLink.remove("nav-link-extend");
  } else {
    classListLink.add("nav-link-extend");
  }
  if (isOpen) {
    classList.remove("dropdown--open");
  } else {
    classList.add("dropdown--open");
  }
}

allMenu.forEach((element) => element.addEventListener("click", handleOnClick));
document.body.addEventListener("click", function (event) {
  allMenu.forEach(function (element) {
    if (
      element.classList.contains("dropdown--open") &&
      element.classList.contains("nav-link-extend")
    ) {
      element.classList.remove("nav-link-extend");
      element.classList.remove("dropdown--open");
    }
  });
});
