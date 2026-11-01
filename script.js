const toggle=document.getElementById('menuToggle');const nav=document.getElementById('mainNav');
if(toggle){toggle.addEventListener('click',()=>{nav.classList.toggle('open');toggle.setAttribute('aria-expanded',nav.classList.contains('open'));});}
document.querySelectorAll('.nav-trigger').forEach(btn=>btn.addEventListener('click',()=>{if(window.matchMedia('(max-width: 1050px)').matches){btn.parentElement.classList.toggle('expanded');}}));
function searchSite(e){e.preventDefault();const q=document.getElementById('searchInput').value.trim();if(!q)return false;alert('Pencarian materi "'+q+'" akan diaktifkan setelah katalog materi Mandala Aksara disiapkan.');return false;}
