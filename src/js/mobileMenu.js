const menuButtonEl = document.querySelectorAll('.header__button');
const menuEl = document.querySelector('.mobile-menu');
const menuLinksEl = document.querySelectorAll('.mobile-menu__link');

menuButtonEl.forEach(item =>
  item.addEventListener('click', e => {
    menuEl.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  })
);

menuLinksEl.forEach(item =>
  item.addEventListener('click', e => {
    if (!document.body.classList.contains('no-scroll')) {
      return;
    }
    menuEl.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  })
);
