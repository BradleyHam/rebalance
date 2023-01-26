const hamburger = document.getElementById('hamburger');
const navRightSide = document.getElementById('nav-right-side');

hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    hamburger.classList.toggle('is-active');
    navRightSide.classList.toggle('nav-active');
})