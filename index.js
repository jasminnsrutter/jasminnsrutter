/**
 * Jasminn Rutter - Portfolio Interactive Scripts
 */

// 1. Tech Recruiter Easter Egg
// This runs silently in the background. If a recruiter right-clicks your page 
// and hits "Inspect Element", they will see this custom message in the console!
console.log(
    "%c👋 Hello fellow developer or tech recruiter!",
    "color: #39afa3; font-size: 16px; font-weight: bold; font-family: sans-serif;"
);
console.log(
    "%cThank you for inspecting my portfolio. Feel free to review the clean repository architecture on my GitHub!",
    "color: #3a405a; font-size: 13px; font-family: sans-serif;"
);

// 2. Dynamic DOM Manipulation Wrapper
document.addEventListener("DOMContentLoaded", () => {
    
    // Feature A: Smooth scrolling logic verification
    // Ensures navigation jumps are logged cleanly for diagnostic testing
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            console.log(`Navigating securely to anchor section: ${targetId}`);
        });
    });

    // Feature B: Dynamic Project Card Click Feedback
    // Gives a clean visual cue in the console when someone is reviewing your work
    const projectCards = document.querySelectorAll("article");
    projectCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            const projectTitle = card.querySelector("h3")?.innerText || `Project ${index + 1}`;
            console.log(`User expressing interest in: "${projectTitle}"`);
        });
    });

});

document.addEventListener("DOMContentLoaded", () => {
    // Select all layout elements tagged for animation
    const elementsToReveal = document.querySelectorAll(".reveal");

    // Configure the observer setup
    const observerOptions = {
        root: null,         // Use browser viewport as base bounding box
        threshold: 0.12,    // Trigger animation when 12% of the element is visible
        rootMargin: "0px"   
    };

    const revealOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the CSS class that changes opacity and transforms layout positions
                entry.target.classList.add("active");
                // Stop observing once animated to lock the layout placement permanently
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach tracking system to designated layout segments
    elementsToReveal.forEach(element => {
        revealOnScrollObserver.observe(element);
    });
});