import { menuOpen, menuClose, bodyLockToggle, bodyLock } from "./functions.js";

const menuBurger = () => {
    if (document.querySelector('#burger')) {
        document.addEventListener('click', function (e) {
            const target = e.target;

            if (target && e.target.closest('#burger')) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        });
    };
};

export default menuBurger;
