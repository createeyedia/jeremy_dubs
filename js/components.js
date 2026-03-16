// Shared components injected into every page

const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a href="/index.html" class="nav-logo">
      <span class="nav-logo-name">Jeremy Dubs</span>
      <span class="nav-logo-sub">Cascade Creatives</span>
    </a>
    <ul class="nav-links">
      <li><a href="/pages/work.html">Work</a></li>
      <li><a href="/pages/services.html">Production</a></li>
      <li><a href="/pages/website-upgrades.html">Website Upgrades</a></li>
      <li><a href="/pages/about.html">About</a></li>
      <li><a href="/pages/contact.html">Contact</a></li>
    </ul>
    <a href="/pages/contact.html" class="nav-cta">Request a Quote</a>
    <button class="nav-toggle" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-close" onclick="toggleMenu()">✕</button>
  <a href="/pages/work.html" onclick="toggleMenu()">Work</a>
  <a href="/pages/services.html" onclick="toggleMenu()">Production</a>
  <a href="/pages/website-upgrades.html" onclick="toggleMenu()">Website Upgrades</a>
  <a href="/pages/about.html" onclick="toggleMenu()">About</a>
  <a href="/pages/contact.html" onclick="toggleMenu()">Contact</a>
  <a href="/pages/contact.html" class="btn btn-primary" onclick="toggleMenu()">Request a Quote</a>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <div class="footer-brand-name">Jeremy Dubs</div>
        <div class="footer-brand-sub">Cascade Creatives — Bellingham, WA</div>
        <div class="footer-social">
          <a href="https://vimeo.com/cascadecreatives" target="_blank" rel="noopener">Vimeo</a>
          <a href="https://www.instagram.com/cascadecreatives/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="/pages/work.html">Work</a></li>
          <li><a href="/pages/services.html">Services</a></li>
          <li><a href="/pages/about.html">About</a></li>
          <li><a href="/pages/contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/pages/services.html">Commercial Production</a></li>
          <li><a href="/pages/services.html">Remote Editing</a></li>
          <li><a href="/pages/services.html">Social Content</a></li>
          <li><a href="/pages/services.html">Real Estate Video</a></li>
          <li><a href="/pages/services.html">Drone & Aerial</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2024 Jeremy Dubs / Cascade Creatives. All rights reserved.</span>
      <span class="footer-copy">Based in Bellingham, WA — Available locally and remotely</span>
    </div>
  </div>
</footer>
`;

// Inject nav and footer
document.getElementById('nav-mount').innerHTML = NAV_HTML;
document.getElementById('footer-mount').innerHTML = FOOTER_HTML;

// Set active nav link
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  if (path.includes(a.getAttribute('href').replace('/', ''))) {
    a.classList.add('active');
  }
});

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

// Scroll nav background
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 40) {
    nav.style.background = 'rgba(8,8,8,0.98)';
  } else {
    nav.style.background = 'rgba(8,8,8,0.92)';
  }
});
