const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".inner-navbar");

hamburger.addEventListener("click", () => {
  hamburger.querySelectorAll("span").forEach(span => span.classList.toggle("show"));
  nav.classList.toggle("active");
});