/* ============================
   HAWE PALANI — javascript.js
   ============================ */

// --- NAV SCROLL STATE ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// --- MOBILE BURGER MENU ---
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  // Animate burger to X
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close menu on nav link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    const spans = burger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// --- SCROLL FADE-IN ANIMATIONS ---
const fadeEls = document.querySelectorAll(
  '.om__grid, .tilbud__card, .natur__container, .terskel__inner, .kontakt__container, .pullquote, .om__card'
);

fadeEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Stagger tilbud cards
document.querySelectorAll('.tilbud__card').forEach((el, i) => {
  el.dataset.delay = i * 80;
});
document.querySelectorAll('.om__card').forEach((el, i) => {
  el.dataset.delay = i * 60;
});

fadeEls.forEach(el => observer.observe(el));

// --- CONTACT FORM ---
const form = document.getElementById('kontaktForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const navn = form.querySelector('#navn').value.trim();
  const epost = form.querySelector('#epost').value.trim();

  if (!navn || !epost) {
    showFormMessage('Vennligst fyll inn navn og e-post.', 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(epost)) {
    showFormMessage('Vennligst oppgi en gyldig e-postadresse.', 'error');
    return;
  }

  // Simulate send (replace with real endpoint later)
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sender…';
  btn.disabled = true;

  setTimeout(() => {
    showFormMessage('Takk! Jeg tar kontakt så snart som mulig.', 'success');
    form.reset();
    btn.textContent = 'Send melding';
    btn.disabled = false;
  }, 1200);
});

function showFormMessage(text, type) {
  // Remove existing
  const existing = form.querySelector('.form__message');
  if (existing) existing.remove();

  const msg = document.createElement('p');
  msg.className = 'form__message';
  msg.textContent = text;
  msg.style.cssText = `
    font-size: 0.85rem;
    font-weight: 500;
    padding: 0.65rem 1rem;
    border-radius: 8px;
    text-align: center;
    background: ${type === 'success' ? '#E8F4F0' : '#FDE8E8'};
    color: ${type === 'success' ? '#2D4A3E' : '#7B2020'};
    border: 1px solid ${type === 'success' ? '#B5D9CE' : '#F5C6C6'};
  `;
  form.appendChild(msg);

  if (type === 'success') {
    setTimeout(() => msg.remove(), 6000);
  }
}

// --- SMOOTH ACTIVE NAV HIGHLIGHT ---
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav__links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}`
          ? 'var(--clr-forest-deep)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));