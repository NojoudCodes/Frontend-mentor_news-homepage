const hamburger = document.querySelector('.nav-menu');
const mobile_nav = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  mobile_nav.classList.toggle('mobile-visible')
})