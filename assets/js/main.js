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
