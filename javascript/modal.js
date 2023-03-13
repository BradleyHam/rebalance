
import HTMLElements from "./HTMLElements";

const {
  hamburger,
  navRightSide,
  bookButtons,
  closeButton,
  overlay,
  modal,
  secondaryButtons,
  serviceButtonArray
} = HTMLElements;

function registerModalEventListeners(){
  bookButtons.forEach( (button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      overlay.classList.toggle("active");
      modal.classList.toggle("active");
    });
  });
  
  closeButton.addEventListener("click", () => {
    overlay.classList.remove("active");
    modal.classList.remove("active");
    hamburger.classList.remove("is-active");
    navRightSide.classList.remove("nav-active");
  });
  
  serviceButtonArray.forEach((button) => {
    button.addEventListener("click", () => {
      overlay.classList.toggle("active");
      modal.classList.toggle("active");
    });
  });
  
  secondaryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      overlay.classList.toggle("active");
      modal.classList.toggle("active");
    });
  });
}

export default registerModalEventListeners;
