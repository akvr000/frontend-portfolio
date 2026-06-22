import "./typing-effect.js";
import "./theme.js";
import "./back-to-top.js";
import "./hamburger.js";
import "./data/skillsData.js";
import"./data/projectsData.js";
import "./data/cert-data.js";



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