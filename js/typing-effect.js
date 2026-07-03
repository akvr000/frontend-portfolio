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


// const words = ["Anjali Kumari", "a Web Developer", "a Designer", "a Creator"];
// let wordIndex = 0;   // Which word in the array are we currently on?
// let charIndex = 0;   // Which letter of that word are we typing/deleting?
// let isDeleting = false; // Is the effect currently deleting text?

// const typingElement = document.getElementById("typing");

// function typeEffect() {
//   const currentWord = words[wordIndex];
  
//   if (isDeleting) {
//     // 1. Deleting state: Cut off the last character
//     typingElement.innerHTML = currentWord.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     // 2. Typing state: Add the next character
//     typingElement.innerHTML = currentWord.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   // Determine the typing speed dynamically
//   let typeSpeed = isDeleting ? 50 : 100; // Deleting is usually faster

//   // State Machine Logic
//   if (!isDeleting && charIndex === currentWord.length) {
//     // Word is fully typed out -> Pause before starting to delete
//     typeSpeed = 1500; 
//     isDeleting = true;
//   } else if (isDeleting && charIndex === 0) {
//     // Word is fully deleted -> Move to the next word in the array
//     isDeleting = false;
//     wordIndex = (wordIndex + 1) % words.length; // Loops back to 0 when it hits the end
//     typeSpeed = 500; // Brief pause before typing the next word
//   }

//   setTimeout(typeEffect, typeSpeed);
// }

// // Kickstart the effect
// typeEffect();

