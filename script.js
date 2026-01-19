// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navlinks = document.getElementById("navlinks");

menuBtn?.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    navlinks.classList.remove("open");
  });
});

// Reveal animation on scroll
const revealEls = document.querySelectorAll(".reveal");
const runReveal = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) el.classList.add("active");
  });
};
window.addEventListener("scroll", runReveal);
runReveal();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Form submits
const hookForm = (id) => {
  const form = document.getElementById(id);
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Thanks! Your request has been submitted. We will contact you within 24–48 hours.");
    form.reset();
  });
};
hookForm("quickQuote");
hookForm("contactForm");
