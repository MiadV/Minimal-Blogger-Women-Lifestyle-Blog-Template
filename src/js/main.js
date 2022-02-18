/*=====  OPEN MENU  ======*/

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=====  CLOSE MENU  ======*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=====  HERO SLIDER  ======*/
const swiper = new Swiper('.hero__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

/*=====  BACK TO TOP  ======*/
function backToTop() {
  const backToTopBtn = document.getElementById('back-to-top');

  // check if scroll is more than 200 viewport height then add class "show"
  if (this.scrollY >= 200) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', backToTop);
