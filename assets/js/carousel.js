/* Hero carousel: rotasi perlahan, bisa dikontrol manual dan pause saat hover. */
document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('heroShowcase');
  if (!element || !window.bootstrap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const carousel = new bootstrap.Carousel(element, {
    interval: 5200,
    ride: false,
    pause: 'hover',
    touch: true,
    wrap: true,
    keyboard: true
  });

  let timer = window.setTimeout(() => carousel.next(), 5200);
  element.addEventListener('slide.bs.carousel', () => {
    window.clearTimeout(timer);
  });
  element.addEventListener('slid.bs.carousel', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => carousel.next(), 5200);
  });
  element.addEventListener('mouseenter', () => window.clearTimeout(timer));
  element.addEventListener('mouseleave', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => carousel.next(), 5200);
  });
  element.addEventListener('focusin', () => window.clearTimeout(timer));
  element.addEventListener('focusout', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => carousel.next(), 5200);
  });
});
