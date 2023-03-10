import registerModalEventListeners from './modal';
import { onHamburgerClick, mobileNavItemClicked} from './navbar.js';

console.log(registerEventListeners)

function registerEventListeners(){
    registerModalEventListeners();
    onHamburgerClick();
    mobileNavItemClicked();
}

export default registerEventListeners;