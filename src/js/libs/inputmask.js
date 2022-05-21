/* Маска для работы полей */

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMaskInit = () => {
    const inputMasks = document.querySelectorAll('[data-inputmask]');

    if (inputMasks.length > 0) {
        inputMasks.forEach(input => {
            const im = new Inputmask("+38 ( 999 ) 999-9999");
            im.mask(input);
        });
    }
};

export default inputMaskInit;


