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
  
  