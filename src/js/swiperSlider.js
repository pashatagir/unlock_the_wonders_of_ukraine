import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    835: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperGallery = new Swiper('.swiper-gallery', {
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    835: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperTour = new Swiper('.swiper-tour', {
  modules: [Navigation],
  speed: 500,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
