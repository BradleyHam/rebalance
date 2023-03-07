import registerModalEventListeners from './modal';
import onHamburgerClick from './navbar';

console.log(registerEventListeners)

function registerEventListeners(){
    registerModalEventListeners();
    onHamburgerClick();
}

export default registerEventListeners;