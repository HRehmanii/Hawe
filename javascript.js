const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

burger?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Lukk meny' : 'Åpne meny');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Åpne meny');
  });
});

const animated = document.querySelectorAll('.topic-card, .article-card, .split-section, .final-cta');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
animated.forEach(element => {
  element.classList.add('fade-up');
  observer.observe(element);
});

const form = document.getElementById('kontaktForm');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.querySelector('#navn')?.value.trim();
  const contact = form.querySelector('#kontaktinfo')?.value.trim();
  const button = form.querySelector('button');
  const existing = form.querySelector('.form__message');
  existing?.remove();

  if (!name || !contact) {
    showFormMessage('Fyll inn navn og telefon eller e-post.', false);
    return;
  }

  button.disabled = true;
  button.textContent = 'Takk, forespørselen er sendt';
  showFormMessage('Jeg tar kontakt så snart som mulig.', true);
  form.reset();
});

function showFormMessage(text, success) {
  if (!form) return;
  const message = document.createElement('p');
  message.className = 'form__message';
  message.textContent = text;
  message.style.cssText = `padding: 10px 0; color: ${success ? '#dce8d9' : '#ffe0d4'};`;
  form.appendChild(message);
}


