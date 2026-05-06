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

// Play Overlay Logic
document.querySelectorAll('.play-frame').forEach((frame) => {
  const overlay = frame.querySelector('.play-overlay');
  const iframe = frame.querySelector('iframe');
  const url = frame.dataset.gameUrl;

  if (overlay && iframe && url) {
    overlay.addEventListener('click', () => {
      iframe.src = url;
      overlay.classList.add('hidden');
    });
  }
});
