const container = document.querySelector(".skills-grid");
// const container = document.querySelectorAll(".skills-buttons");

// const skillsData = [
//     {
//         category: "Frontend",
//         skill: ["HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox & Grid", "Semantic HTML", "Responsive Design", "Bootstrap", "React"]
//     },
//     {
//         category: "Tools & Workflow",
//         skill: ["Git", "GitHub", "VS Code", "Vercel", "Chrome DevTools", "Netlify", "WebForms"]
//     },
//     {
//         category: "Others",
//         skill: ["Figma to Code", "Debugging", "API Integration (Basic)", "Problem Solving"]
//     }
// ]


const skillsData = [
    {
        category: "Frontend",
        skill: [ "React", "HTML5", "CSS3", "JavaScript (ES6+)", "Flexbox & Grid", "Semantic HTML", "Responsive Design","Tailwind CSS", "Bootstrap", "CSS Modules"]
    },
    {
        category: "Tools & Workflow",
        skill: ["Git", "GitHub", "VS Code", "Vercel", "Chrome DevTools", "Netlify", "WebForms"]
    },
    {
        category: "Others",
        skill: ["Figma to Code", "Debugging", "API Integration", "Problem Solving", "UI Development"]
    }
]

skillsData.forEach(items => {
    let skillsDiv = document.createElement("div");
    skillsDiv.className = "skill-category"
    let h3 = document.createElement("h3");
    h3.textContent = items.category;

    let skillsButtons = document.createElement("div");
    skillsButtons.className = "skills-buttons";

    items.skill.forEach(i => {
        let span = document.createElement("span");
        span.textContent = i;
        skillsButtons.append(span);
    })
    skillsDiv.append(h3, skillsButtons);
    container.appendChild(skillsDiv);
});

// skills.forEach((item , index) =>{
//     let box = container[index];

//     item.skill.forEach(i=>{
//         let span = document.createElement("span");
//         span.textContent = i;
//         box.appendChild(span);
//     });

// })