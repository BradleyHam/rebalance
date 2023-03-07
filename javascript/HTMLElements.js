const hamburger = document.getElementById("hamburger");
const navRightSide = document.getElementById("nav-right-side");
const mobileNav = document.getElementById("mobile-nav");
let mobileListItems = document.querySelectorAll(
  ".nav__list--mobile .nav__list--item"
);
let bookButtons = document.querySelectorAll(".book-button");
let closeButton = document.querySelector(".modal__close");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");
let serviceButtons = document.getElementsByClassName(
  "services-card__image-container"
);
let secondaryButtons = document.querySelectorAll(".secondary-button");
let serviceButtonArray = Array.from(serviceButtons);

export default { 
    hamburger,
    navRightSide,
    mobileNav,
    mobileListItems,
    bookButtons,
    closeButton,
    overlay,
    modal,
    serviceButtons,
    secondaryButtons,
    serviceButtonArray
}