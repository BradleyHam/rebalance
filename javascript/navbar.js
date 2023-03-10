
import HTMLElements from "./HTMLElements";

const {
  hamburger,
  navRightSide,
  mobileListItems,
} = HTMLElements;

export function onHamburgerClick(){
  hamburger.addEventListener("click", () => {
    toggleMobileNav()
  });
}
export function mobileNavItemClicked(){
  mobileListItems.forEach(item => {
    item.addEventListener('click', () => {
      toggleMobileNav()
    })
  })
}
function toggleMobileNav(){
  hamburger.classList.toggle("is-active");
  navRightSide.classList.toggle("nav-active");
}

