// Theme Toggle Script

const icon = document.getElementById('theme-icon');
const root = document.documentElement;


// Moon Icon
const moonIcon = `
<path d="M12 3a6 6 0 1 0 9 9 9 9 0 1 1-9-9"></path>
`;


// Sun Icon
const sunIcon = `
<circle cx="12" cy="12" r="5"></circle>

<line x1="12" y1="1" x2="12" y2="3"></line>
<line x1="12" y1="21" x2="12" y2="23"></line>

<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>

<line x1="1" y1="12" x2="3" y2="12"></line>
<line x1="21" y1="12" x2="23" y2="12"></line>

<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
`;


// Load saved theme
let savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');


// Apply theme
root.setAttribute('data-theme', savedTheme);


// Set icon
icon.innerHTML =
    savedTheme === 'dark'
        ? sunIcon
        : moonIcon;


// Toggle theme
icon.addEventListener('click', () => {

    let currentTheme =
        root.getAttribute('data-theme');

    let newTheme =
        currentTheme === 'dark'
            ? 'light'
            : 'dark';

    // Apply theme
    root.setAttribute('data-theme', newTheme);

    // Save theme
    localStorage.setItem('theme', newTheme);

    // Rotate animation
    icon.style.rotate = '180deg';

    setTimeout(() => {
        icon.style.rotate = '0deg';
    }, 400);

    // Change icon
    icon.innerHTML =
        newTheme === 'dark'
            ? sunIcon
            : moonIcon;

});