/* ============================================================
   MALU KONTRAKTOR — shared.js
   Navbar + Footer yang sama di semua halaman
   ============================================================ */

'use strict';

/* ── NAVBAR HTML ────────────────────────────────────────── */
function renderNavbar(activePage) {
  const pages = [
    { href: 'index.html',      label: 'Beranda',    id: 'beranda' },
    { href: 'tentang.html',    label: 'Tentang',    id: 'tentang' },
    { href: 'layanan.html',    label: 'Layanan',    id: 'layanan' },
    { href: 'portofolio.html', label: 'Portofolio', id: 'portofolio' },
    { href: 'kontak.html',     label: 'Kontak',     id: 'kontak' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="nav-link${activePage === p.id ? ' active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('navbar-placeholder').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo" aria-label="MALU KONTRAKTOR">
        <img src="./images/logo.png" alt="MALU KONTRAKTOR" class="logo-img logo-img--color">
        <img src="./images/logo-white.png" alt="MALU KONTRAKTOR" class="logo-img logo-img--white">
      </a>

      <div class="nav-links" id="navLinks">${links}</div>

      <div class="nav-actions">
        <button class="nav-theme-toggle" id="themeToggle" aria-label="Toggle dark/light mode">
          <svg class="icon-moon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun"  width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
        <a href="kontak.html" class="btn-cta">Konsultasi Gratis</a>
      </div>

      <button class="hamburger" id="hamburger" aria-label="Buka menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>`;
}

/* ── FOOTER HTML ────────────────────────────────────────── */
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
  <footer class="footer-shared">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="./images/logo-white.png" alt="MALU KONTRAKTOR" class="footer-logo">
            <p>Bekerja Sepenuh Hati, Sampai Tuntas. Mitra terpercaya untuk setiap proyek konstruksi dan renovasi Anda di Bali dan sekitarnya sejak 2014.</p>
            <div class="footer-sosmed">
              <a href="https://www.facebook.com/profile.php?id=61590833872858" class="footer-sosmed-btn" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/malu_kontraktor?igsh=MTNxeXFmcHF5ZTVhMQ==" class="footer-sosmed-btn" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="https://wa.me/6281236726476" class="footer-sosmed-btn" aria-label="WhatsApp" target="_blank"><i class="fab fa-whatsapp"></i></a>
              <a href="https://www.tiktok.com/@malu.kontraktor?_r=1&_t=ZS-9761malrZTj" class="footer-sosmed-btn" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><a href="index.html">Beranda</a></li>
              <li><a href="tentang.html">Tentang Kami</a></li>
              <li><a href="layanan.html">Layanan</a></li>
              <li><a href="portofolio.html">Portofolio</a></li>
              <li><a href="kontak.html">Kontak</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Layanan</h4>
            <ul>
              <li><a href="layanan.html">Pembangunan Rumah</a></li>
              <li><a href="layanan.html">Renovasi Total</a></li>
              <li><a href="layanan.html">Interior & Finishing</a></li>
              <li><a href="layanan.html">Bangunan Komersial</a></li>
              <li><a href="layanan.html">Jasa Tenaga / + Material</a></li>
            </ul>
          </div>
          <div class="footer-col footer-newsletter">
            <h4>Kontak</h4>
            <ul class="footer-kontak-list">
              <li>Alamat jln imam bonjol gang marga agung no26<br>Denpasar, Bali</li>
              <li><a href="tel:+6281236726476">0812-3672-6476</a></li>
              <li><a href="mailto:info@malukontraktor.com">info@malukontraktor.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 MALU KONTRAKTOR. Semua hak dilindungi.</p>
          <p class="footer-tagline">Bekerja Sepenuh Hati, Sampai Tuntas.</p>
        </div>
      </div>
    </div>
  </footer>

  <a href="https://wa.me/+6281236726476?text=Halo%20MALU%20KONTRAKTOR%2C%20saya%20ingin%20konsultasi." class="wa-float" target="_blank" aria-label="Hubungi via WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span>WA</span>
    <div class="wa-ring"></div>
  </a>`;
}

/* ── NAVBAR BEHAVIOR ────────────────────────────────────── */
function initNavbar(isHeroPage) {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // Halaman non-hero: navbar langsung solid
  if (!isHeroPage) navbar.classList.add('solid');

  // Scroll handler
  function onScroll() {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else if (isHeroPage) navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const btn = document.getElementById('hamburger');
  const nav = document.getElementById('navLinks');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('.nav-link').forEach(l => {
      l.addEventListener('click', () => {
        nav.classList.remove('open');
        btn.classList.remove('open');
      });
    });
  }
}

/* ── DARK MODE ──────────────────────────────────────────── */
function initDarkMode() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    document.body.classList.add('no-transition');
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      document.body.classList.remove('no-transition');
    }));
  });
}

/* ── REVEAL ANIMATIONS ──────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.05 });
  els.forEach(el => obs.observe(el));
}

/* ── FAQ ────────────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ── TOAST ──────────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const old = document.querySelector('.mk-toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'mk-toast';
  t.innerHTML = `<span style="color:${type==='success'?'#FF6B1A':'#e25f5f'};font-weight:700;">${type==='success'?'✓':'✕'}</span><span>${msg}</span>`;
  Object.assign(t.style, {
    position:'fixed', bottom:'28px', left:'50%',
    transform:'translateX(-50%) translateY(16px)', zIndex:'9999',
    display:'flex', alignItems:'center', gap:'.75rem',
    background: type==='success' ? '#1a0f00' : '#1a0000',
    border:`1px solid ${type==='success'?'rgba(255,107,26,.5)':'rgba(220,50,50,.5)'}`,
    borderRadius:'6px', padding:'1rem 1.75rem',
    color:'#F0EDE8', fontSize:'1.4rem', fontFamily:"'Inter',sans-serif",
    boxShadow:'0 20px 60px rgba(0,0,0,.45)',
    transition:'opacity .35s ease,transform .35s ease', opacity:'0',
  });
  document.body.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    t.style.opacity='1'; t.style.transform='translateX(-50%) translateY(0)';
  }));
  setTimeout(() => {
    t.style.opacity='0'; t.style.transform='translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 350);
  }, 4000);
}

/* ── NEWSLETTER FORM (FOOTER) ───────────────────────────── */
function initNewsletterForm() {
  const form = document.querySelector('.footer-newsletter form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]')?.value.trim();
    if (!email) { showToast('Mohon isi alamat email Anda.', 'error'); return; }
    showToast('Terima kasih! Anda telah berlangganan.');
    form.reset();
  });
}

/* ── KONTAK FORM → WA ───────────────────────────────────── */
function handleKontakForm(e) {
  e.preventDefault();
  const nama    = document.getElementById('fNama')?.value.trim();
  const telp    = document.getElementById('fTelp')?.value.trim();
  const layanan = document.getElementById('fLayanan')?.value.trim();
  const pesan   = document.getElementById('fPesan')?.value.trim();
  if (!nama || !telp || !pesan) { showToast('Mohon lengkapi semua field wajib.', 'error'); return; }
  const text = [
    '🏗️ *KONSULTASI – MALU KONTRAKTOR*','',
    `👤 Nama     : ${nama}`,`📱 WhatsApp : ${telp}`,
    layanan ? `🔧 Layanan  : ${layanan}` : null,'',
    `📋 Pesan:\n${pesan}`,'',
    '_Dikirim via website MALU KONTRAKTOR_'
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/6281236726476?text=${encodeURIComponent(text)}`, '_blank');
  e.target.reset();
  showToast('Pesan terkirim! Kami akan segera merespons.');
}

/* ── PORTOFOLIO: skeleton loading foto ─────────────────── */
function initPortoSkeleton() {
  document.querySelectorAll('.card-porto__thumb img').forEach(img => {
    const thumb = img.closest('.card-porto__thumb');
    const markLoaded = () => {
      img.classList.add('is-loaded');
      thumb.classList.add('is-loaded');
    };
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener('load', markLoaded);
      img.addEventListener('error', markLoaded); // tetap hentikan shimmer walau gagal load
    }
  });
}

/* ── PORTOFOLIO: konfigurasi lightbox ──────────────────── */
function initPortoLightbox() {
  if (typeof lightbox === 'undefined') return;
  lightbox.option({
    resizeDuration : 200,
    wrapAround     : true,
    albumLabel     : '%1 dari %2'
  });
}