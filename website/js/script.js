// =============================
// AWS Dashboard Script
// =============================

// Smooth scrolling for navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Hero button
function scrollToSection() {
    const section = document.getElementById("architecture");

    if (section) {
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// =============================
// Active Navigation Highlight
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});

// =============================
// Reveal Cards on Scroll
// =============================

const revealElements = document.querySelectorAll(
    ".card, .status-card, .node, .box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    observer.observe(el);

});

// =============================
// Navbar Shadow
// =============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 8px 20px rgba(0,0,0,0.35)";

    } else {

        navbar.style.boxShadow = "none";

    }

});

// =============================
// Button Click Animation
// =============================

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});

// =============================
// Footer Year
// =============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `AWS 3-Tier Architecture Project • Built by Gargi Gogulwar • © ${new Date().getFullYear()}`;

}

console.log("AWS Dashboard Loaded Successfully");