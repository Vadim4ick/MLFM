// HOME PAGE SWIPERS
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
// /HOME PAGE SWIPERS

// ==============================================================

// CardItem PAGE SWIPERS
const swiperCardItem = new Swiper(".cardItem__slider", {
  spaceBetween: 20,
  speed: 700,
});

if (window.matchMedia("(max-width: 1024px)").matches) {
  const swiperSimilarProducts = new Swiper(".swiper-similarProducts", {
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
}
// /CardItem PAGE SWIPERS

// ==============================================================

// Basket PAGE SWIPERS
const swiperBasket = new Swiper(".interest__slider", {
  speed: 700,

  breakpoints: {
    320: {
      slidesPerView: 2.7,
      spaceBetween: 16,
    },
    460: {
      slidesPerView: 3.5,
      spaceBetween: 24,
    },
    600: {
      slidesPerView: 4.3,
    },
    768: {
      slidesPerView: 3.5,
    },
  },
});
// /Basket PAGE SWIPERS

// ==============================================================
