/* Scroll reveal menggunakan IntersectionObserver. Konten tetap tampil jika API tidak tersedia. */
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.browser-card, .section-heading, .feature-card, .service-card, .service-image-wrap, .demo-card, .process-card, .custom-accordion .accordion-item, .contact-section .container'
  );
  targets.forEach((element, index) => {
    element.setAttribute('data-reveal', element.classList.contains('service-image-wrap') ? 'zoom' : 'up');
    if (element.matches('.feature-card, .service-card, .demo-card, .process-card')) {
      element.style.setProperty('--reveal-delay', (index % 3) * 85 + 'ms');
    }
  });

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });

  targets.forEach((element) => observer.observe(element));
});
