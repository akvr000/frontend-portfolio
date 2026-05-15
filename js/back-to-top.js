// added back to top button functionality

const topButton = document.getElementById("back-to-top");

function handleScroll() {
  if (window.scrollY > 60) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
}

// Run on load to set correct initial state
handleScroll();

window.addEventListener("scroll", handleScroll);

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});