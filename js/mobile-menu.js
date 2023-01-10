(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open-btn"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mob-menu"),
    body: document.querySelector("body"),
    anchors: document.querySelectorAll('a[href*="#"]'),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  for (let anchor of refs.anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      e.currentTarget.blur();
      const blockId = anchor.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        closeMenu: closeMenu(e),
      })
    })
  }

  function closeMenu(e) {
    if (e.target.closest('.mob-menu-item')) toggleMenu();
  }
})();