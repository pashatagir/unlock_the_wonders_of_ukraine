// Set a variable for our button element.
const scrollToTopButton = document.querySelector('.back-to-home');
smoothScrollCapture = (x, e) => {
  e.preventDefault();
  var id = target.getAttribute('href').split('#')[1];
  var el = document.getElementById(id);
  var x = el.getBoundingClientRect().left;
  var y = el.getBoundingClientRect().top;
  smoothScrollFunc(x, y);
};

smoothScrollFunc = (x, y, e) => {
  e.preventDefault();
  window.scrollTo({
    top: y,
    left: x,
    behavior: 'smooth',
  });
};

window.addEventListener('DOMContentLoaded', () => {
  scrollToTopButton.addEventListener('click', e => {
    smoothScrollFunc(0, 0, e);
  });

  let aTags = document.getElementsByTagName('A');
  for (let i = 0; i < aTags.length; i += 1) {
    if (aTags[i].getAttribute('href').indexOf('#') === 0) {
      aTags[i].addEventListener('click', smoothScrollCapture);
    }
  }
});

window.addEventListener('scroll', e => {
  let y = window.scrollY;
  if (y > 800) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
