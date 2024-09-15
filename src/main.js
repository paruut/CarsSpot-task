const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: false,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 64,
      grabCursor: true,
    },
  },
});

document.getElementById("osobowe-tab").addEventListener("click", function () {
  document.getElementById("osobowe").classList.remove("hidden");
  document.getElementById("dostawcze").classList.add("hidden");

  this.classList.add("text-blue", "border-blue", "font-semibold");
  this.classList.remove("text-dark", "border-transparent");

  document
    .getElementById("dostawcze-tab")
    .classList.remove("text-blue", "border-blue", "font-semibold");
  document
    .getElementById("dostawcze-tab")
    .classList.add("text-dark", "border-transparent");
});

document.getElementById("dostawcze-tab").addEventListener("click", function () {
  document.getElementById("dostawcze").classList.remove("hidden");
  document.getElementById("osobowe").classList.add("hidden");

  this.classList.add("text-blue", "border-blue", "font-semibold");
  this.classList.remove("text-dark", "border-transparent");

  document
    .getElementById("osobowe-tab")
    .classList.remove("text-blue", "border-blue", "font-semibold");
  document
    .getElementById("osobowe-tab")
    .classList.add("text-dark", "border-transparent");
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});