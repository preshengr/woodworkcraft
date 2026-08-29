document.addEventListener('DOMContentLoaded', function () {

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('closeBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const cards = Array.from(document.querySelectorAll('.gallery-card'));

  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const card = cards[currentIndex];
    const img = card.querySelector('img');
    lightboxImg.src = img.src.replace('&q=80', '&q=100').replace('w=800', 'w=1400');
    lightboxCaption.textContent = card.getAttribute('data-caption') || img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showRelative(step) {
    currentIndex = (currentIndex + step + cards.length) % cards.length;
    openLightbox(currentIndex);
  }

  if (cards.length) {
    cards.forEach((card, i) => {
      card.addEventListener('click', () => openLightbox(i));
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showRelative(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showRelative(1); });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showRelative(-1);
      if (e.key === 'ArrowRight') showRelative(1);
    });
  }
});