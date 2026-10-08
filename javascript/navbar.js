import HTMLElements from "./HTMLElements";

const { hamburger, navRightSide, mobileListItems } = HTMLElements;

export function closeMobileNav() {
  hamburger.classList.remove("is-active");
  navRightSide.classList.remove("nav-active");
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");
}

export function onHamburgerClick() {
  hamburger.addEventListener("click", () => {
    const open = hamburger.getAttribute("aria-expanded") !== "true";
    hamburger.classList.toggle("is-active", open);
    navRightSide.classList.toggle("nav-active", open);
    hamburger.setAttribute("aria-expanded", String(open));
    hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && hamburger.getAttribute("aria-expanded") === "true") {
      closeMobileNav();
      hamburger.focus();
    }
  });
}

export function mobileNavItemClicked() {
  mobileListItems.forEach((item) => item.addEventListener("click", closeMobileNav));
}
