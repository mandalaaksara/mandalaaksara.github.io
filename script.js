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

// Fungsi pencarian
function searchSite(e) {
  e.preventDefault();

  const input = document.getElementById('searchInput');
  const q = input ? input.value.trim() : '';

  if (!q) return false;

  alert(
    'Pencarian materi "' + q +
    '" akan diaktifkan setelah katalog materi Mandala Aksara disiapkan.'
  );

  return false;
}
