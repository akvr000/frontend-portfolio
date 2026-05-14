// added hamburger menu functionality

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".inner-navbar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");

});

