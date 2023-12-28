document.addEventListener('DOMContentLoaded', () => {

    const burgerbtn = document.querySelector('.burger-btn');
    if (burgerbtn) {
        const mobileMenu = document.querySelector('.header__mobile-menu');
        burgerbtn.addEventListener('click', (e) => {
            if (e.target.classList.contains('active')) {
                CloseMenu(mobileMenu);
            } else {
                OpenMenu(mobileMenu);
            }
        })
        const closeMenuBtn = document.querySelector('.close-menu');

        closeMenuBtn.addEventListener('click', () => {
            CloseMenu(mobileMenu)
        });
    }

    function CloseMenu(mobileMenu) {
        mobileMenu.classList.remove('active');
        burgerbtn.classList.remove('active');

    }

    function OpenMenu(mobileMenu) {
        mobileMenu.classList.add('active');
        burgerbtn.classList.add('active');
    }


    const commandSlider = new Swiper('.command__swiper', {
        slidesPerView: 1,
        navigation: {
            prevEl: '.command__prev-slide',
            nextEl: '.command__next-slide'
        },
        breakpoints: {
            1: {
                slidesPerView: 1.05,
            },
            920: {
                slidesPerView: 1,
            }
        }
    })


    const rangeSlider = document.querySelector('#range-slider');
    const rangeSliderTwo = document.querySelector('#range-slider-2');

    if (rangeSliderTwo) {
        const finishElem = document.querySelector('#range-slider-2 .finish');
        noUiSlider.create(rangeSliderTwo, {
            start: 5,
            connect: 'lower',
            tooltips: true,
            step: 1,
            range: {
                'min': 1,
                'max': 10
            },
            format: {
                to: function (value) {
                    return Math.round(parseFloat(value))
                },
                from: function (value) {
                    return Number(value.replace(',-', ''));
                }
            },


        });

        rangeSliderTwo.noUiSlider.on('update', function (values, handle) {
            const sliderValue = parseInt(values[handle]);

            // Проверка для элемента с классом 'finish'
            if (sliderValue === 10) {
                finishElem.classList.add('active');
            } else {
                finishElem.classList.remove('active');
            }
        });
    }


    if (rangeSlider) {
        const middleElem = document.querySelector('#range-slider .middle');
        const finishElem = document.querySelector('#range-slider .finish');
        noUiSlider.create(rangeSlider, {
            start: 75,
            connect: 'lower',
            tooltips: true,
            step: 1,
            range: {
                'min': 50,
                'max': 250
            },
            format: {
                to: function (value) {
                    return value + 'K';
                },
                from: function (value) {
                    return Number(value.replace(',-', ''));
                }
            },


        });

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            const sliderValue = parseInt(values[handle]);

            // Проверка для элемента с классом 'middle'
            if (sliderValue >= 150) {
                middleElem.classList.add('active');
            } else {
                middleElem.classList.remove('active');
            }

            // Проверка для элемента с классом 'finish'
            if (sliderValue === 250) {
                finishElem.classList.add('active');
            } else {
                finishElem.classList.remove('active');
            }
        });
    }


    const inputElems = document.querySelectorAll('.input-elem');

    if (inputElems.length !== 0) {
        inputElems.forEach((item) => {
            item.addEventListener('focus', (e) => {
                let target = e.target;
                let placeHolder = target.nextElementSibling;

                placeHolder.classList.add('_top');
            });

            item.addEventListener('blur', (e) => {
                let target = e.target;
                let placeHolder = target.nextElementSibling;

                if (target.value.trim() === '') {
                    placeHolder.classList.remove('_top');
                }
            });
        });
    }

    const stepTabs = document.querySelectorAll('.calc__tab');
    const stepElems = document.querySelectorAll('.calc__step');

    if (stepTabs.length !== 0) {
        stepTabs.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                let target = e.target;

                stepTabs.forEach((item) => {
                    item.classList.remove('active');
                });

                target.classList.add('active');

                stepElems.forEach((item) => {
                    item.classList.remove('active');
                });

                stepElems[index].classList.add('active');
            });
        });
    }


});