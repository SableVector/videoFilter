
// Подключение дополнительных модулей Swiper поизводиться в {} через запятую.
// Пример: { Navigation, Pagination }.
// Модули: Autoplay, Lazy, Manipulation, Navigation, Pagination, Parallax, Thumbs
import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';

const slider = () => {

    // Добавить классы слайдерам
    // swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
    const bildSliders = () => {
        let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
        if (sliders) {
            sliders.forEach(slider => {
                slider.parentElement.classList.add('swiper');
                slider.classList.add('swiper-wrapper');
                for (const slide of slider.children) {
                    slide.classList.add('swiper-slide');
                }
            });
        }
    };

    // Инициализация слайдера
    const initSliders = () => {
        // Добавления классов слайдера
        // при необходимости отключить4
        bildSliders();

        // Перечень слайдеров
        if (document.querySelector('.carusel__slider')) { // Указываем скласс нужного слайдера
            // Создаем слайдер
            new Swiper('.carusel__slider', { // Указываем скласс нужного слайдера
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoHeight: true,
                speed: 800,

                //touchRatio: 0,
                //simulateTouch: false,
                // loop: true,
                //preloadImages: false,
                //lazy: true,

                // Эффекты
                // effect: 'fade',
                // autoplay: {
                //     delay: 3000,
                //     disableOnInteraction: false,
                // },


                // Пагинация
                pagination: {
                    el: '.carusel__slider-pagination',
                    clickable: true,
                },


                // Скроллбар
                /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */

                // Кнопки "влево/вправо"
                // navigation: {
                //     prevEl: '.carusel__slider-button-prev',
                //     nextEl: '.carusel__slider-button-next',
                // },

                // Брейкпоинты
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    /* 992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }, */
                },
                // События
                on: {

                }
            });
        }

        if (document.querySelector('.carusel-sertificate__slider')) { // Указываем скласс нужного слайдера
            // Создаем слайдер
            new Swiper('.carusel-sertificate__slider', { // Указываем скласс нужного слайдера
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Thumbs, Autoplay],
                observer: true,
                observeParents: true,
                slidesPerView: 5,
                spaceBetween: 20,
                autoHeight: true,
                speed: 800,
                centeredSlides: true,

                //touchRatio: 0,
                //simulateTouch: false,
                loop: true,
                //preloadImages: false,
                //lazy: true,

                // Эффекты
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },


                // Пагинация
                pagination: {
                    el: '.carusel-sertificate__slider-pagination',
                    clickable: true,
                },


                // Скроллбар
                /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */

                // Кнопки "влево/вправо"
                navigation: {
                    prevEl: '.carusel-sertificate__slider-button-prev',
                    nextEl: '.carusel-sertificate__slider-button-next',
                },

                // Брейкпоинты
                breakpoints: {
                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        autoHeight: true,
                    },
                    500: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                        // spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        // spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 5,
                        // spaceBetween: 30,
                    },
                },
                // События
                on: {

                }
            });
        }

        if (document.querySelector('.content-reviews__slider')) { // Указываем скласс нужного слайдера
            // Создаем слайдер
            new Swiper('.content-reviews__slider', { // Указываем скласс нужного слайдера
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                observer: true,
                observeParents: true,
                slidesPerView: 2,
                spaceBetween: 30,
                autoHeight: true,
                speed: 800,

                //touchRatio: 0,
                //simulateTouch: false,
                loop: true,
                //preloadImages: false,
                //lazy: true,

                
                // Эффекты
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },

                // Пагинация

                pagination: {
                    el: '.content-reviews__slider-pagination',
                    clickable: true,
                },


                // Скроллбар
                /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */

                // Кнопки "влево/вправо"
                navigation: {
                    prevEl: '.content-reviews__slider-button-prev',
                    nextEl: '.content-reviews__slider-button-next',
                },

                // Брейкпоинты

                breakpoints: {
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                        autoHeight: true,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1268: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                },

                // События
                on: {

                }
            });
        }

        if (document.querySelector('.carusel-news__slider')) { // Указываем скласс нужного слайдера
            // Создаем слайдер
            new Swiper('.carusel-news__slider', { // Указываем скласс нужного слайдера
                // Подключаем модули слайдера
                // для конкретного случая
                modules: [Navigation, Pagination, Autoplay],
                observer: true,
                observeParents: true,
                slidesPerView: 3,
                spaceBetween: 30,
                autoHeight: true,
                speed: 800,

                //touchRatio: 0,
                //simulateTouch: false,
                loop: true,
                //preloadImages: false,
                //lazy: true,

                
                // Эффекты
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },

                // Пагинация

                pagination: {
                    el: '.carusel-news__slider-pagination',
                    clickable: true,
                },


                // Скроллбар
                /*
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                */

                // Кнопки "влево/вправо"
                navigation: {
                    prevEl: '.carusel-news__slider-button-prev',
                    nextEl: '.carusel-news__slider-button-next',
                },

                // Брейкпоинты

                breakpoints: {
                    320: {
                        slidesPerView: 1.1,
                        spaceBetween: 20,
                        autoHeight: true,
                    },
                    650: {
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                    1268: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },

                // События
                on: {

                }
            });
        }
    };

    // Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
    function initSlidersScroll() {
        let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
        if (sliderScrollItems.length > 0) {
            for (let index = 0; index < sliderScrollItems.length; index++) {
                const sliderScrollItem = sliderScrollItems[index];
                const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
                const sliderScroll = new Swiper(sliderScrollItem, {
                    observer: true,
                    observeParents: true,
                    direction: 'vertical',
                    slidesPerView: 'auto',
                    freeMode: {
                        enabled: true,
                    },
                    scrollbar: {
                        el: sliderScrollBar,
                        draggable: true,
                        snapOnRelease: false
                    },
                    mousewheel: {
                        releaseOnEdges: true,
                    },
                });
                sliderScroll.scrollbar.updateSize();
            }
        }
    }

    window.addEventListener("load", function (e) {
        // Запуск инициализации слайдеров
        initSliders();
        // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
        //initSlidersScroll();
    });

};

export default slider;