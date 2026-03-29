// Nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link is clicked (mobile)
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on outside click
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.site-nav a').forEach(link => {
  const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
  if (href === '/' && currentPath === '/') {
    link.classList.add('active');
  } else if (href !== '/' && currentPath.startsWith(href)) {
    link.classList.add('active');
  }
});
