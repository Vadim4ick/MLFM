const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-mainBanner-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 700,
});

const swiperBuyImage = new Swiper(".swiper-buyImage", {
  pagination: {
    el: ".swiper-buyImage-pagination",
    clickable: true,
  },
  spaceBetween: 20,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  speed: 700,
});

if (window.matchMedia("(max-width: 1024px)").matches) {
  const swiperNew = new Swiper(".swiper-newItems", {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const swiperNewBottom = new Swiper(".swiper-newItemsBottom", {
    speed: 700,
    slidesPerView: 3,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 2.15,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 8,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 8,
      },
    },
  });
}
