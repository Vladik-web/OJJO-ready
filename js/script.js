window.onload = function () {
	document.body.classList.add('loaded');
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
};
const nav = document.querySelector(".nav");
const menuWrapper = document.querySelector(".menu-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modal = document.querySelectorAll(".sign-up-in");
const modalWindow = document.querySelectorAll(".modal");
const btnClose = document.querySelectorAll(".btn-close");
const acc = document.querySelector(".acc");

const closeModals = () => {
  modalWindow.forEach((item) => {
    item.classList.remove("active");
    document.body.classList.remove("active");
  });
};

modal.forEach((item) =>
  item.addEventListener("click", () => {
    modalWindow[0].classList.add("active");
    document.body.classList.add("active");
  })
);

btnClose.forEach((item) =>
  item.addEventListener("click", () => {
    closeModals();
  })
);

menuWrapper.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animate");
  nav.classList.toggle("active");
});

const videos = [
  '<iframe width="80%" height="80%" src="https://www.youtube.com/embed/BqPoCq4Y0yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="80%" height="80%" src="https://www.youtube.com/embed/z8uNmQaZgMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];
const video = document.querySelectorAll(".social__grid-item.video");
const here = document.querySelector(".video-iframe");
const modalV = document.querySelector(".modal-v");

video.forEach((item) =>
  item.addEventListener("click", () => {
    modalWindow[1].classList.add("active");
    const src = item.dataset.video;
    here.innerHTML = "";
    here.innerHTML = videos[src];
    document.body.classList.add("active");
  })
);
