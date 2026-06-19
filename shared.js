// shared.js — Navbar, Footer, Scroll Effects

// =============================================
// NAVBAR COMPONENT
// =============================================
function renderNavbar(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'services.html', label: 'Services', id: 'services' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];

  const links = pages.map(p => `
    <a href="${p.href}" class="nav-link ${activePage === p.id ? 'active' : ''}" id="nav-${p.id}">${p.label}</a>
  `).join('');

  const mobileLinks = pages.map(p => `
    <a href="${p.href}" class="nav-link ${activePage === p.id ? 'active' : ''}">${p.label}</a>
  `).join('');

  const whatsappUrl = 'https://wa.me/923124567890?text=Hello%20Dr.%20Ahmed%20Raza%2C%20I%20would%20like%20to%20book%20an%20appointment.';

  const html = `
    <nav class="navbar" id="navbar">
      <div class="container nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="logo-icon">🏥</div>
          <div class="logo-text">
            <span class="logo-name">Dr. Ahmed Raza</span>
            <span class="logo-tag">MBBS, FCPS — Internal Medicine</span>
          </div>
        </a>
        <div class="nav-links">${links}</div>
        <div class="nav-cta">
          <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp" id="nav-whatsapp-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="mobile-nav" id="mobile-nav">
      ${mobileLinks}
      <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Book via WhatsApp
      </a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// =============================================
// FOOTER COMPONENT
// =============================================
function renderFooter() {
  const whatsappUrl = 'https://wa.me/923124567890?text=Hello%20Dr.%20Ahmed%20Raza%2C%20I%20would%20like%20to%20book%20an%20appointment.';

  const html = `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="nav-logo">
              <div class="logo-icon">🏥</div>
              <div class="logo-text">
                <span class="logo-name">Dr. Ahmed Raza</span>
                <span class="logo-tag">MBBS, FCPS — Internal Medicine</span>
              </div>
            </div>
            <p>Providing compassionate, expert healthcare with 12+ years of experience. Your health is our priority.</p>
          </div>

          <div>
            <p class="footer-title">Quick Links</p>
            <div class="footer-links">
              <a href="index.html">→ Home</a>
              <a href="about.html">→ About Doctor</a>
              <a href="services.html">→ Our Services</a>
              <a href="contact.html">→ Contact Us</a>
              <a href="admin-login.html">→ Doctor Portal</a>
            </div>
          </div>

          <div>
            <p class="footer-title">Contact Info</p>
            <div class="footer-contact-item">
              <div class="icon">📍</div>
              <span>Shop 4, Al-Shifa Plaza, Block 2, PECHS, Karachi</span>
            </div>
            <div class="footer-contact-item">
              <div class="icon">📞</div>
              <span>021-34567890</span>
            </div>
            <div class="footer-contact-item">
              <div class="icon">🟢</div>
              <span>0312-4567890 (WhatsApp)</span>
            </div>
            <div class="footer-contact-item">
              <div class="icon">🕐</div>
              <span>Mon–Sat &nbsp;|&nbsp; 6:00 PM – 9:00 PM</span>
            </div>
            <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp" style="margin-top:16px; font-size:0.88rem; padding:11px 22px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Appointment
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2025 Dr. Ahmed Raza Clinic. All rights reserved.</p>
          <p>MBBS, FCPS (Internal Medicine) &nbsp;·&nbsp; General Physician, Karachi</p>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
}

// =============================================
// SCROLL REVEAL
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
