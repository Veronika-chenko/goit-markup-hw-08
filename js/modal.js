(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", onOpenModal);
  refs.closeModalBtn.addEventListener("click", onCloseModal);
  refs.modal.addEventListener("click", onBackdropClick);

  function onOpenModal() {
    window.addEventListener("keydown", onEscKeyPress);
    toggleModal();
  }

  function onCloseModal() {
    window.removeEventListener("keydown", onEscKeyPress);
    toggleModal();
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }

  function onBackdropClick(e) {
    if (e.currentTarget === e.target) toggleModal();
  }

  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      onCloseModal();
      refs.openModalBtn.blur();
    }
  }
})();