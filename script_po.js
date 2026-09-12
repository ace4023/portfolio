// Auto-fills the footer with today's date so you don't have to
// hardcode it every time you edit the page.
document.addEventListener('DOMContentLoaded', () => {
  const label = document.getElementById('last-updated-label');
  if (label) {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    label.textContent = `last updated: ${formatted}`;
  }

  // One subtle load-in moment for the hero, nothing else animates.
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(6px)';
    hero.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    requestAnimationFrame(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    });
  }
});