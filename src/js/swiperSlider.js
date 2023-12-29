import Swiper from 'swiper';
import { Navigation, EffectFlip, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-flip';
import 'swiper/scss/effect-coverflow';

const swiperTour = new Swiper('.tours__swiper', {
  modules: [Navigation, EffectFlip],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  lazy: true,
  effect: window.innerWidth < 1440 ? 'flip' : 'null',
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

const swiperGallery = new Swiper('.gallery__swiper', {
  modules: [Navigation, EffectFlip, EffectCoverflow],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  lazy: true,
  effect: window.innerWidth < 835 ? 'flip' : 'coverflow',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: true,
  },
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    835: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
  },
});

const swiperReviews = new Swiper('.reviews__swiper', {
  modules: [Navigation, EffectFlip],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  effect: window.innerWidth < 835 ? 'flip' : 'null',
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    835: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    1440: { slidesPerView: 4, spaceBetween: 32 },
  },
});
