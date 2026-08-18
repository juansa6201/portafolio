// ===== Language toggle (ES / EN) =====
const STORAGE_KEY = 'portfolio-lang';

function setLanguage(lang) {
  document.documentElement.lang = lang;

  // Swap text + attribute content for every translatable node
  document.querySelectorAll('[data-en], [data-es]').forEach((el) => {
    const value = el.getAttribute('data-' + lang);
    if (value === null) return;
    if (el.tagName === 'META') {
      el.setAttribute('content', value);
    } else {
      el.textContent = value;
    }
  });

  // Update the toggle's active state
  document.querySelectorAll('.lang-toggle__opt').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

(function initLanguage() {
  let lang;
  try { lang = localStorage.getItem(STORAGE_KEY); } catch (_) {}
  if (!lang) {
    lang = (navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es';
  }
  setLanguage(lang);

  document.getElementById('langToggle').addEventListener('click', () => {
    const next = document.documentElement.lang === 'es' ? 'en' : 'es';
    setLanguage(next);
  });
})();

// ===== Nav: scrolled state + mobile menu =====
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('navBurger');

const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.classList.toggle('open', open);
});
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('open');
  })
);

// ===== Scroll reveal =====
const revealTargets = document.querySelectorAll(
  '.section__title, .about__grid, .stack__group, .tl, .card, .edu__item, .edu__col, .contact'
);
revealTargets.forEach((el) => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add('visible'));
}

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
