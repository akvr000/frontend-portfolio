import "./typing-effect.js";
import "./theme.js";
import "./back-to-top.js";
import "./hamburger.js";
import "./skillsData.js";
import"./cert-data.js";
import "./projectsData.js";



// added current year in footer

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// reset form on page load
window.onpageshow = function(event) {
    const form = document.querySelector("form");
    if(form) {
        form.reset();
    }
}