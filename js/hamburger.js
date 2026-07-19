const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".inner-navbar");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("show")
  nav.classList.toggle("active")
})

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('show');
    nav.classList.remove('active');
  });
});