import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const swiperTour = new Swiper('.tours__swiper', {
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
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
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  lazy: true,
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
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
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
