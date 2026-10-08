import registerModalEventListeners from "./modal";
import { onHamburgerClick, mobileNavItemClicked } from "./navbar.js";

export default function registerEventListeners() {
  registerModalEventListeners();
  onHamburgerClick();
  mobileNavItemClicked();
}
