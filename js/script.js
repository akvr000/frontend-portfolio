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
// yearSpan.innerText = currentYear;


// added form submission functionality with popup message

const form = document.getElementById("contact-form");
const popup = document.getElementById("popup-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        await fetch("/", {
            method: "POST",
            body: formData
        });

        popup.classList.add("show");

        form.reset();

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);

    } catch (error) {
        alert("Something went wrong!");
    }
});
