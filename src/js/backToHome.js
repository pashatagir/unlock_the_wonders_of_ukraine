// Set a variable for our button element.
const backHomeEl = document.querySelector('.back-to-home');
const anchorEl = document.querySelectorAll('a[href^="#"]');

anchorEl.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  if (y > 850) {
    backHomeEl.style.display = 'block';
  } else {
    backHomeEl.style.display = 'none';
  }
});
