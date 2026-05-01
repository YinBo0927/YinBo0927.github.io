document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.news-carousel');
  if (!carousel) return;

  const container = carousel.querySelector('.carousel-container');
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.carousel-btn-prev');
  const nextBtn = carousel.querySelector('.carousel-btn-next');
  if (!container || items.length === 0 || !prevBtn || !nextBtn) return;
  
  let currentIndex = 0;

  function itemHeight() {
    return items[0].getBoundingClientRect().height || 52;
  }

  function visibleItems() {
    return 4;
  }

  function maxIndex() {
    return Math.max(0, items.length - visibleItems());
  }
  
  function updateCarousel() {
    currentIndex = Math.min(currentIndex, maxIndex());
    const offset = -currentIndex * itemHeight();
    container.style.transform = `translateY(${offset}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex();
  }
  
  function nextItem() {
    if (currentIndex < maxIndex()) {
      currentIndex++;
      updateCarousel();
    }
  }
  
  function prevItem() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }
  
  prevBtn.addEventListener('click', prevItem);
  nextBtn.addEventListener('click', nextItem);
  window.addEventListener('resize', updateCarousel);
  
  // 鼠标滚轮支持
  carousel.addEventListener('wheel', function(e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextItem();
    } else {
      prevItem();
    }
  }, { passive: false });
  
  // 触摸滑动支持
  let touchStartY = 0;
  carousel.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
  });
  
  carousel.addEventListener('touchend', function(e) {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;
    if (Math.abs(diff) > 20) {
      if (diff > 0) {
        nextItem();
      } else {
        prevItem();
      }
    }
  });

  updateCarousel();
});
