// added typing effect for name in header

const text = "Anjali Kumari";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    // typing finished → remove cursor
    typingElement.classList.add("done");
  }
}

typeEffect();

// added hamburger menu functionality

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".inner-navbar");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


// added current year in footer

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// added back to top button functionality
const topButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  } 
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});