const projectsData = [
    {
        
        title: "Personal Portfolio Website",
        desc: "Built a modern personal portfolio website featuring a glassmorphism navigation bar, responsive layouts, smooth user interactions, project showcases, certifications, and a clean, user-friendly interface.",
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Bootstrap"],
        code: "https://github.com/akvr000/frontend-portfolio",
        demo: "https://akvr000.github.io/frontend-portfolio/",
        img: "assets/images/portfolio-preview.webp", 
        alt: "Portfolio mockup"
    },
    {
        title: "SafeVault — Crypto Wallet SaaS Landing Page",
        desc: "Built a premium crypto landing page featuring modular architecture, an interactive pricing engine, and glassmorphic UI elements. Uses native, hardware-accelerated CSS animations to ensure completely fluid, stutter-free mobile navigation.",
        skills: ["React", "CSS Modules", "Responsive Design", "UI/UX", "Web3 UI"],
        code: "https://github.com/akvr000/safevault-landing-page",
        demo: "https://safevault-landing-page.vercel.app/",
        img: "assets/images/safevault-preview.webp",
        alt: "Safevault landing page mockup"

    },
    {
        title: "CryptoPulse — Crypto Tracker & Journal - Comming soon",
        desc: "A real-time crypto portfolio tracker and trading journal with live coin prices, performance charts, and personal trade notes powered by the CoinGecko API.",
        skills: ["React", "Tailwind CSS", "CoinGecko API", "Recharts", "Framer Motion"],
        code: "https://github.com",
        demo: "https://example.com",
        img: "",
        alt: "Dashboard view of CryptoPulse tracking application"

    }
];

const icons = [
    {
        gitIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"stroke-linejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,

        demoIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`
    }
]

const container = document.querySelector(".projects-grid");

projectsData.forEach(item => {
    let article = document.createElement("article");
    article.className = "project-items";

    let imgWrapper = document.createElement("div");
    imgWrapper.className = "project-image-wrapper";

    let img = document.createElement("img");
    img.className = "project-img";
    img.src = item.img;
    img.alt = item.alt;
    img.loading = "lazy";

    imgWrapper.appendChild(img);

    let h4 = document.createElement("h4");
    h4.textContent = item.title;
    let p = document.createElement("p");
    p.textContent = item.desc;

    let skillsDiv = document.createElement("div");
    skillsDiv.className = "projects-skills-buttons";

    item.skills.forEach(i => {
        let span = document.createElement("span");
        span.textContent = i;
        skillsDiv.append(span);
    })

    let projectButtons = document.createElement("div");
    projectButtons.className = "project-buttons";

    let codeLink = document.createElement("a");
    codeLink.href = item.code;
    codeLink.rel = "noopener noreferrer";
    codeLink.className = "code";
    codeLink.target = "_blank";
    codeLink.innerHTML = `${icons[0].gitIcon} Code`;

    let demoLink = document.createElement("a");
    demoLink.href = item.demo;
    demoLink.rel = "noopener noreferrer";
    demoLink.className = "demo";
    demoLink.target = "_blank";
    demoLink.innerHTML = `${icons[0].demoIcon} Demo`;

    projectButtons.append(codeLink, demoLink);

    article.append(imgWrapper, h4, p, skillsDiv, projectButtons);
    container.appendChild(article);

});
