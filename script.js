// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('open');
  });
}

// Hero background slideshow (simple fade)
const slides = document.querySelectorAll('.hero-slides img');
let slideIndex = 0;
function cycleSlides(){
  slides.forEach((img, idx) => img.classList.toggle('active', idx === slideIndex));
  slideIndex = (slideIndex + 1) % (slides.length || 1);
}
if (slides.length){
  cycleSlides();
  setInterval(cycleSlides, 4500);
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Back-to-top smoothness and current year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());


