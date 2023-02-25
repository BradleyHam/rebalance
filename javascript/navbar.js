const hamburger = document.getElementById('hamburger');
const navRightSide = document.getElementById('nav-right-side');
const mobileNav = document.getElementById('mobile-nav');
let mobileListItems = document.querySelectorAll('.nav__list--mobile .nav__list--item')

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    navRightSide.classList.toggle('nav-active');
});