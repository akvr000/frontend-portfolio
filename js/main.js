import "./typing-effect.js";
import "./theme.js";
import "./back-to-top.js";
import "./hamburger.js";
import "./data/skillsData.js";
import"./data/projectsData.js";
import "./data/cert-data.js";
import "./scrollReveal.js";



// added current year in footer

const yearSpan = document.getElementById("current-year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// add navbar scroll effect
const navbar = document.querySelector("#header");
window.addEventListener('scroll',() =>{
    if (window.scrollY>50) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});

// reset form on page load
window.onpageshow = function(event) {
    const form = document.querySelector("form");
    if(form) {
        form.reset();
    }
}