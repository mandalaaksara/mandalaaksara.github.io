// Favicon Mandala Aksara untuk seluruh halaman yang memuat script.js
(function setMandalaFavicon() {
  if (!document.querySelector('link[rel~="icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/webp';
    favicon.href = '/logo-mandala-aksara.webp';
    document.head.appendChild(favicon);
  }
})();


const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');

// Buka dan tutup navigasi HP
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');

    toggle.setAttribute('aria-expanded', isOpen);
    toggle.setAttribute(
      'aria-label',
      isOpen ? 'Tutup navigasi' : 'Buka navigasi'
    );

    toggle.textContent = isOpen ? '✕' : '☰';
  });
}

// Dropdown navigasi untuk layar kecil
document.querySelectorAll('.nav-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1050px)').matches) {
      btn.parentElement.classList.toggle('expanded');
    }
  });
});

// Fungsi pencarian materi Mandala Aksara
function searchSite(e) {
  if (e) e.preventDefault();

  const form = e && e.currentTarget ? e.currentTarget : null;
  const input = form ? form.querySelector('#searchInput') : document.getElementById('searchInput');
  const q = input ? input.value.trim() : '';

  if (!q) {
    if (input) input.focus();
    return false;
  }

  const target = new URL('pencarian.html', window.location.href);
  target.searchParams.set('q', q);
  window.location.href = target.href;
  return false;
}
