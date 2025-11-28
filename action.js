const text = document.getElementById('text');
const explore = document.getElementById('explore');
const header = document.getElementById('header');
const earth = document.getElementById('earth');
const earthGlow = document.getElementById('earth-glow');
const stars = document.getElementById('stars');
const starsForeground = document.getElementById('stars-foreground');
const starDust = document.getElementById('star-dust');
const deepStars = document.getElementById('deep-stars');
const orbitLines = document.getElementById('orbit-lines');
const aurora = document.getElementById('aurora');
const astronaut = document.getElementById('astronaut');

window.addEventListener('scroll', function () {
    const value = window.scrollY;

    text.style.transform = `translateY(${value * -0.2}px)`;
    header.style.transform = `translateY(${value * 0.3}px)`;
    explore.style.transform = `translateY(${value * 0.5}px)`;

    const earthScale = 1 + value * 0.00025;
    earth.style.transform = `translateX(-50%) translateY(${value * 0.18}px) scale(${earthScale})`;
    earthGlow.style.transform = `translateX(-50%) translateY(${value * 0.14}px)`;
    aurora.style.transform = `translateY(${value * 0.1}px)`;
    stars.style.transform = `translateY(${value * 0.07}px)`;
    starsForeground.style.transform = `translateY(${value * 0.12}px)`;
    if (starDust) {
        starDust.style.transform = `translateY(${value * 0.05}px)`;
    }

    // Parallax for mid-section space textures
    if (deepStars) {
        deepStars.style.transform = `translateY(${value * -0.05}px)`;
    }
    if (orbitLines) {
        orbitLines.style.transform = `translateY(${value * -0.08}px)`;
    }

    // Give the astronaut a lively, pseudo-random flight path tied to scroll
    const randomX = Math.sin(value * 0.022) * 220 + Math.cos(value * 0.07) * 150;
    const randomY = Math.cos(value * 0.018) * 180 + Math.sin(value * 0.042) * 110 + value * 0.36;
    const wobble = Math.sin(value * 0.08) * 14;
    const rotation = Math.sin(value * 0.03) * 24 + wobble;

    astronaut.style.transform = `translate(${randomX}px, ${randomY * 0.45}px) rotate(${rotation}deg)`;
});

// Contains the link for all social media handles
const links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1); });
links[1].addEventListener("click", () => { openlink(2); });
links[2].addEventListener("click", () => { openlink(3); });
links[3].addEventListener("click", () => { openlink(4); });

function openlink(x) {
    if (x === 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x === 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x === 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x === 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}
