
import HTMLElements from "./HTMLElements";

const {
  hamburger,
  navRightSide,
} = HTMLElements;

function onHamburgerClick(){
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    hamburger.classList.toggle("is-active");
    navRightSide.classList.toggle("nav-active");
  });
}

export default onHamburgerClick;