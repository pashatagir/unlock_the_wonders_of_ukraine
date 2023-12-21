import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/scss';

const swiper = new Swiper('.swiper', {
  // Install modules
  modules: [Navigation],
  speed: 500,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
