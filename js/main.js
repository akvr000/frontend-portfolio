import "./typing-effect.js";
import "./theme.js";
import "./back-to-top.js";
import "./hamburger.js"


// added current year in footer

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
