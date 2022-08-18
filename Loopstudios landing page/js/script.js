const btnMobileNav = document.querySelector(".btn-mobile-nav");
const navBar = document.querySelector(".nav-bar");
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  });
  if (link.classList.contains("nav-link-header")) {
    navBar.classList.toggle("nav--open");
  }
});

document.querySelector(".current-year").textContent = new Date().getFullYear();

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
document
  .querySelector(".mobile-nav-icon-close")
  .addEventListener("click", function (event) {
    navBar.classList.remove("nav--open");
  });
