/* Konfigurasi nomor WhatsApp bisnis. Gunakan format internasional tanpa +, spasi, atau tanda hubung. */
const WHATSAPP_PHONE = '6285542226363';

function openWhatsApp(message) {
  if (!WHATSAPP_PHONE || !/^\d{8,15}$/.test(WHATSAPP_PHONE)) {
    alert('Nomor WhatsApp belum dikonfigurasi. Isi WHATSAPP_PHONE di assets/js/main.js dengan nomor bisnis yang benar.');
    return;
  }
  const url = 'https://wa.me/' + WHATSAPP_PHONE + '?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('current-year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openWhatsApp(link.getAttribute('data-whatsapp') || 'Halo Indo Jasa Website, saya ingin berkonsultasi.');
    });
  });

  const nav = document.getElementById('mainNav');
  if (nav && window.bootstrap) {
    nav.querySelectorAll('a.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const collapse = bootstrap.Collapse.getInstance(nav);
          if (collapse) collapse.hide();
        }
      });
    });
  }
});