// ═══════════════════════════════════════════
//  GyulaBringa · main.js
// ═══════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });

  // ── Aktív nav link ──
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // ── Scroll animáció ──
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

  // ── Navbar árnyék scrollra ──
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav) nav.style.boxShadow = window.scrollY > 10
      ? '0 4px 24px rgba(0,154,217,.2)'
      : '0 2px 20px rgba(0,154,217,.15)';
  });

  // ── Toast ──
  window.toast = function(msg, type = 'info') {
    let c = document.querySelector('.toast-container');
    if (!c) { c = document.createElement('div'); c.className = 'toast-container'; document.body.appendChild(c); }
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.textContent = msg;
    c.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3500);
  };

});