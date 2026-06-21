const certData = [
    {
        logo: "Meta",
        badge: "Frontend",
        title: "Introduction to Front-End Development",
        issuer: "Meta (Coursera)",
        issueDate: "Apr 4, 2026",
        certId: "4REXHGJGTI9X",
        verifyUrl: "https://coursera.org/verify/4REXHGJGTI9X " // Added link data
    },
    {
        logo: "Meta",
        badge: "Git",
        title: "Version Control",
        issuer: "Meta (Coursera)",
        issueDate: "May 9, 2026",
        certId: "C64DAJDDOC74",
        verifyUrl: "https://coursera.org/verify/C64DAJDDOC74  " // Added link data
    },
    {
        logo: "Meta",
        badge: "Frontend",
        title: "Programming with JavaScript",
        issuer: "Meta (Coursera)",
        issueDate: "Apr 28, 2026",
        certId: "L2XIUP5W5KTH",
        verifyUrl: "https://coursera.org/verify/L2XIUP5W5KTH " // Added link data
    },
    {
        logo: "Meta",
        badge: "Frontend",
        title: "HTML and CSS in depth",
        issuer: "Meta (Coursera)",
        issueDate: "May 28, 2026",
        certId: "UYUQUVHL3YBR",
        verifyUrl: "https://coursera.org/verify/UYUQUVHL3YBR  " // Added link data
    }

];

const certIcons = {
    date: `<svg class="icon-calendar" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>`,
    verify: `<svg class="icon-external" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>`
};

const certGrid = document.querySelector("#certificates-container");

// Clear any hardcoded placeholder HTML inside the grid container before rendering
certGrid.innerHTML = "";

certData.forEach(card => {
    // 1. Initialize Card Container
    const certCard = document.createElement("article");
    certCard.className = "cert-card";

    // 2. Build Header Element
    const certHeader = document.createElement("header");
    certHeader.className = "cert-header";
    
    const certLogo = document.createElement("div");
    certLogo.className = "cert-logo";
    certLogo.textContent = card.logo;
    
    const certBadge = document.createElement("div");
    certBadge.className = "cert-badge";
    certBadge.textContent = card.badge;

    // Append items one by one
    certHeader.appendChild(certLogo);
    certHeader.appendChild(certBadge);

    // 3. Main Info Elements
    const certTitle = document.createElement("h3");
    certTitle.className = "cert-title";
    certTitle.textContent = card.title;

    const certIssuer = document.createElement("p");
    certIssuer.className = "cert-issuer";
    certIssuer.textContent = card.issuer;

    // 4. Build Metadata / Date Rows
    const certMeta = document.createElement("div");
    certMeta.className = "cert-meta";
    
    // Set the SVG icon string first safely
    certMeta.innerHTML = certIcons.date; 
    
    // Now create the text container wrap and append it cleanly
    const dateText = document.createElement("span");
    dateText.innerHTML = `Issued <span class="cert-issue-date">${card.issueDate}</span>`;
    certMeta.appendChild(dateText);

    // 5. Build ID Wrapper Element
    const certIdWrapper = document.createElement("p");
    certIdWrapper.className = "cert-id-wrapper";
    certIdWrapper.innerHTML = `ID: <span class="cert-id">${card.certId}</span>`;

    // 6. Build the Action Anchor Link
    const certVerifyBtn = document.createElement("a");
    certVerifyBtn.className = "cert-verify-btn";
    certVerifyBtn.href = card.verifyUrl;
    certVerifyBtn.target = "_blank";
    certVerifyBtn.rel = "noopener noreferrer";
    // Inject the SVG icon string along with the button text label
    certVerifyBtn.innerHTML = `${certIcons.verify} Verify Credential`;

    // 7. Assemble the complete Card Structure
    certCard.appendChild(certHeader);
    certCard.appendChild(certTitle);
    certCard.appendChild(certIssuer);
    certCard.appendChild(certMeta);
    certCard.appendChild(certIdWrapper);
    certCard.appendChild(certVerifyBtn);

    // 8. Inject the finished Card item right into the UI Grid layout
    certGrid.appendChild(certCard);
});