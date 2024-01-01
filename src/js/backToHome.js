const backHomeEl = document.querySelector('.to-top');
const anchorEl = document.querySelectorAll('a[href^="#"]');

anchorEl.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // document.querySelector(this.getAttribute('href')).scrollIntoView({
    //   behavior: 'smooth',
    // });
    const targetId = this.getAttribute('href').substring(1); // remove the '#' symbol
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  if (y > 1000) {
    backHomeEl.style.display = 'block';
  } else {
    backHomeEl.style.display = 'none';
  }
});
