document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs__buttons");
  const tabsContents = document.querySelectorAll(".tabs__content");

  tabs.addEventListener("click", (event) => {
    const target = event.target.closest(".btn");
    if (!target) return;
    else {
      [...tabs.children].forEach((item) => item.classList.remove("active"));
      target.classList.add("active");
      let currentBtn = target.dataset.tab;
      tabsContents.forEach((item) => item.classList.remove("active"));
      tabsContents[currentBtn].classList.add("active");
    }
  });
});

const nav = document.querySelector(".nav");
const menuWrapper = document.querySelector(".menu-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modal = document.querySelectorAll(".sign-up-in");
const modalWindow = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");
const acc = document.querySelector(".acc");
const closeModal = () => {
  modalWindow.classList.toggle("active");
  document.body.classList.remove("active");
};
modalWindow.addEventListener("click", (evt) => {
  if (!evt.target.closest(".modal__wrapper")) {
    closeModal();
  }
});
modal.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.classList.toggle("active");
    document.body.classList.add("active");
  });
});
btnClose.addEventListener("click", () => {
  closeModal();
});
menuWrapper.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animate");
  nav.classList.toggle("active");
});
