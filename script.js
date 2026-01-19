// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("open");
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const onScrollReveal = () => {
  const trigger = window.innerHeight * 0.88;
  revealEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
};
window.addEventListener("scroll", onScrollReveal);
onScrollReveal();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Fake form submit (replace with real backend later)
const handleForm = (formId) => {
  const form = document.getElementById(formId);
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your request has been submitted. We will contact you within 24–48 hours.");
    form.reset();
  });
};

handleForm("quickQuote");
handleForm("contactForm");
