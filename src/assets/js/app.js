const { active } = require("browser-sync");

const nav = document.getElementById("nav");
const close = document.getElementById("nav");
const open = document.getElementById("nav");

window.ontouchstart = function (event) {
  if (event.target == open) {
    nav.classList.add("active");
  }
  if (event.target == close) {
    nav.classList.remove("active");
  }
};

const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    575: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
