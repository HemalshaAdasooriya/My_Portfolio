// ===== Preloader =====
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Wait for loading bar animation to complete (2s)
    setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => preloader.remove(), 1500);
    }, 2000);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Typing Effect =====
const typingText = ["Software Engineer", "Frontend Developer", "UI/UX Designer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".home-content p");

function type() {
    if (charIndex < typingText[textIndex].length) {
        typingElement.textContent += typingText[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = typingText[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(type, 500);
    }
}

type();

// ===== contact Me Button =====
document.getElementById("hireBtn").addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// ===== Contact Form =====
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
});

// ===== Remove Old Scroll Handler (not needed anymore) =====
// (Deleted: window.addEventListener("scroll") {...})

// ===== Project Card Glow =====
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 4px 20px rgba(255,152,0,0.6)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    });
});

// ===== ScrollReveal Popup Animations =====
const sr = ScrollReveal({
    duration: 1200,
    distance: "40px",
    easing: "ease-out",
    opacity: 0,
    reset: false,
    scale: 0.8 // popup effect
});

// Home Section
sr.reveal(".home-content", { origin: "top" });

// About Section
sr.reveal(".about-box", { origin: "bottom" });

// Projects Section
sr.reveal("#projects h2", { origin: "top" });
sr.reveal(".project-card", { origin: "bottom", interval: 200, scale: 0.85 });

// Contact Section
sr.reveal(".contact-container h2", { origin: "top" });
sr.reveal(".contact-container p", { origin: "top", delay: 200 });
sr.reveal(".contact-info", { origin: "left", scale: 0.9 });
sr.reveal(".contact-form", { origin: "right", scale: 0.9 });

// ===== Dynamic Year =====
document.querySelector("footer p").innerHTML =
    `&copy; ${new Date().getFullYear()} Your Name. All Rights Reserved.`;

// ===== 3D Tilt on Project Cards =====
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 25).toFixed(2);
    const rotateY = ((x - centerX) / 25).toFixed(2);

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// ===== Cursor Glow =====
const cursorGlow = document.getElementById("cursor-glow");
document.addEventListener("mousemove", e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

// ===== Parallax Background Shapes =====
const shapes = document.querySelectorAll(".bg-shape");
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  shapes.forEach((shape, i) => {
    const factor = (i + 1) * 15;
    shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
