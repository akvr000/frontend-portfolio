// // added back to top button functionality

const topButton = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
  topButton.classList.toggle("show", window.scrollY > 60);
});

topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
})
