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

