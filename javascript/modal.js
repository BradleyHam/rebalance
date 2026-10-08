import HTMLElements from "./HTMLElements";
import { closeMobileNav } from "./navbar";

const { hamburger, bookButtons, closeButton, overlay, modal, secondaryButtons, serviceButtonArray } = HTMLElements;

export default function registerModalEventListeners() {
  let returnFocus;
  let previousOverflow;
  let background = [];
  const focusable = () => Array.from(modal.querySelectorAll("a[href], button, [tabindex='0']"));

  function openModal(event) {
    event.preventDefault();
    if (modal.classList.contains("active")) return;
    returnFocus = event.currentTarget.closest(".nav__list--mobile") ? hamburger : event.currentTarget;
    closeMobileNav();
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    background = Array.from(document.body.children)
      .filter((element) => element !== modal && element !== overlay && element.tagName !== "SCRIPT")
      .map((element) => ({ element, inert: element.inert }));
    background.forEach(({ element }) => { element.inert = true; });
    overlay.classList.add("active");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    closeButton.focus();
  }

  function closeModal() {
    if (!modal.classList.contains("active")) return;
    overlay.classList.remove("active");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = previousOverflow;
    background.forEach(({ element, inert }) => { element.inert = inert; });
    returnFocus?.focus();
  }

  [...bookButtons, ...secondaryButtons, ...serviceButtonArray].forEach((button) => {
    button.addEventListener("click", openModal);
  });
  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("active")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal();
    } else if (event.key === "Tab") {
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === modal)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === modal)) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}
