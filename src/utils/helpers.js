// Helper function to handle page navigation
export const showPage = (pageId, pages, navLinks) => {
  if (!pageId) return;
  pages.forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    targetPage.querySelectorAll('.fade-in-up').forEach(el => el.classList.remove('visible'));
    observeAnimatedElements(targetPage);
  }
  navLinks.forEach(l => {
    const isActive = l.dataset.page === pageId;
    l.classList.toggle('active', isActive);
  });
};

// Helper function to observe animated elements
export const observeAnimatedElements = (container) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });
  container.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
};

// Helper function to handle carousel navigation
export const setupCarousel = (carousel) => {
  if (!carousel) return;
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = carousel.querySelector('.carousel-next');
  const prevButton = carousel.querySelector('.carousel-prev');
  const indicators = carousel.querySelectorAll('.carousel-indicator');
  let slideWidth = slides.length > 0 ? slides[0].getBoundingClientRect().width : 0;
  let currentIndex = 0;
  let startX = 0;
  let isDragging = false;
  let diffX = 0;

  const updateSlideWidth = () => {
    if (slides.length === 0) return;
    slideWidth = slides[0].getBoundingClientRect().width;
    moveToSlide(currentIndex, false);
  };

  const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  };

  const moveToSlide = (targetIndex, withAnimation = true) => {
    if (!track) return;
    if (!withAnimation) track.style.transition = 'none';
    track.style.transform = 'translateX(-' + slideWidth * targetIndex + 'px)';
    currentIndex = targetIndex;
    updateIndicators();
    if (!withAnimation) setTimeout(() => track.style.transition = 'transform 0.5s ease-in-out', 50);
  };

  const handleDragStart = (e) => {
    isDragging = true;
    startX = e.pageX || e.touches[0].pageX;
    track.style.transition = 'none';
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX || e.touches[0].pageX;
    diffX = currentX - startX;
    track.style.transform = `translateX(${(-currentIndex * slideWidth) + diffX}px)`;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s ease-in-out';
    if (Math.abs(diffX) > slideWidth / 4) {
      if (diffX < 0 && currentIndex < slides.length - 1) {
        moveToSlide(currentIndex + 1);
      } else if (diffX > 0 && currentIndex > 0) {
        moveToSlide(currentIndex - 1);
      } else {
        moveToSlide(currentIndex);
      }
    } else {
      moveToSlide(currentIndex);
    }
    diffX = 0;
  };

  if (nextButton && prevButton) {
    nextButton.addEventListener('click', () => moveToSlide((currentIndex + 1) % slides.length));
    prevButton.addEventListener('click', () => moveToSlide((currentIndex - 1 + slides.length) % slides.length));
  }

  indicators.forEach(indicator => {
    indicator.addEventListener('click', () => {
      const targetIndex = parseInt(indicator.dataset.slide);
      moveToSlide(targetIndex);
    });
  });

  track.addEventListener('mousedown', handleDragStart);
  track.addEventListener('touchstart', handleDragStart);

  document.addEventListener('mousemove', handleDragMove);
  document.addEventListener('touchmove', handleDragMove);

  document.addEventListener('mouseup', handleDragEnd);
  document.addEventListener('touchend', handleDragEnd);

  window.addEventListener('resize', updateSlideWidth);
  updateSlideWidth();
};