document.addEventListener('DOMContentLoaded', function () {
  const anchorEl = document.querySelectorAll('a[href^="#"]');

  anchorEl.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});

window.addEventListener('scroll', () => {
  const backHomeEl = document.querySelector('.to-top');
  let y = window.scrollY;

  if (y > 1000) {
    backHomeEl.style.display = 'block';
  } else {
    backHomeEl.style.display = 'none';
  }
});
