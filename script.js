// ===== Preloader =====
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    // Wait for loading bar animation to complete (2s)
    setTimeout(() => {
        preloader.classList.add("hidden");
        setTimeout(() => preloader.remove(), 1500);
    }, 2000);
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

// ===== Scroll Reveal Animations =====
const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 200,
  reset: true // Animations repeat when you scroll back
});

// Home section
sr.reveal(".home-content h1", { origin: "top" });
sr.reveal(".home-content span", { origin: "left", delay: 300 });
sr.reveal(".home-content p", { origin: "right", delay: 400 });
sr.reveal(".home-content button", { origin: "bottom", delay: 500 });

// About section
sr.reveal(".about-photo", { origin: "left" });
sr.reveal(".about-text", { origin: "right", delay: 300 });

// Projects section
sr.reveal("#projects h2", { origin: "top" });
sr.reveal(".project-card", { origin: "bottom", interval: 200 });

// Contact section
sr.reveal("#contact h2", { origin: "top" });
sr.reveal("#contact p", { origin: "bottom", delay: 200 });
sr.reveal(".contact-info", { origin: "left", delay: 300 });
sr.reveal(".contactform", { origin: "right", delay: 400 });

// Skills Cards
sr.reveal("#skills h2", { origin: "top" });
sr.reveal(".skill-card", {
  origin: "bottom",
  interval: 200,
  distance: "50px"
});
