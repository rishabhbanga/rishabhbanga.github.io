(() => {
  const header = document.querySelector('[data-site-header]');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (!header || !menuToggle) return;

  const closeMenu = () => {
    header.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    document.body.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
})();
