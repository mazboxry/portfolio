const filterButtons = document.querySelectorAll('[data-filter]');
const gameCards = document.querySelectorAll('.game-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    gameCards.forEach((card) => {
      const tags = card.dataset.tags?.split(' ') ?? [];
      const shouldShow = filter === 'all' || tags.includes(filter);
      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

// Featured Slider Logic
const slider = document.getElementById('featured-slider');
if (slider) {
  const track = slider.querySelector('.slider-track');
  const slides = Array.from(slider.querySelectorAll('.featured-slide'));
  const nextBtn = slider.querySelector('.slider-btn.next');
  const prevBtn = slider.querySelector('.slider-btn.prev');
  const dots = Array.from(slider.querySelectorAll('.dot'));

  let currentIndex = 0;
  let interval;

  const updateSlider = (index) => {
    currentIndex = index;
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  const nextSlide = () => {
    updateSlider((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    updateSlider((currentIndex - 1 + slides.length) % slides.length);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      updateSlider(i);
      resetInterval();
    });
  });

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, 5000);
  };

  resetInterval();
}
