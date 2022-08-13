const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".nav-bar");

function handleOnClick(event) {
  event.stopPropagation();
  event.preventDefault();

  const isOpen = navBar.classList.contains("nav--open");
  navBar.classList.remove("nav--open");

  if (isOpen) {
    navBar.classList.remove("nav--open");
  } else {
    navBar.classList.add("nav--open");
  }
}

btnMobileNav.addEventListener("click", handleOnClick);
document.body.addEventListener("click", function (event) {
  navBar.classList.remove("nav--open");
});
