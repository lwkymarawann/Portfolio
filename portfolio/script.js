window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    const balls = document.querySelectorAll(".ball, .ball1, .ball2, .ball3, .ball4, .ball5");

    // Trigger animation for hero text
    heroText.classList.add("animate");

    // Trigger animation for balls
    balls.forEach((ball) => {
        ball.style.opacity = "1"; // Ensure they appear
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const workButton = document.getElementById("work-button");
    const lookbtn = document.getElementById("lookbtn");
    const projectsSection = document.getElementById("projectsec");
    const serviceSection = document.getElementById("serviceSection");

    // Smooth scroll for 'work-button'
    if (workButton) {
        workButton.addEventListener("click", () => {
            projectsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }

    // Smooth scroll for 'lookbtn'
    if (lookbtn) {
        lookbtn.addEventListener("click", () => {
            serviceSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    }
});
// Get the div that opens the link
const clickableDiv = document.getElementById("clickableDiv");

// Set the URL you want to open
const url = "https://linktr.ee/marawan.m.ibrahim01"; // Change this to your desired URL

// When the user clicks on the div, open the link
clickableDiv.onclick = function() {
    window.open(url, "_blank"); // Opens the URL in a new tab
}
