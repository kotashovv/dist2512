document.addEventListener('DOMContentLoaded', ()=>{

    const burgerbtn = document.querySelector('.burger-btn');
    if (burgerbtn) {
        const mobileMenu = document.querySelector('.header__mobile-menu');
        burgerbtn.addEventListener('click', (e)=>{
            if (e.target.classList.contains('active')) {
                CloseMenu(mobileMenu);
            } else {
                OpenMenu(mobileMenu);
            }
        })
        const closeMenuBtn = document.querySelector('.close-menu');

        closeMenuBtn.addEventListener('click', ()=>{
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


    if (rangeSlider) {
        const middleElem = document.querySelector('.range-slider .middle');
        const finishElem = document.querySelector('.range-slider .finish');
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

});